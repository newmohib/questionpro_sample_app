const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const redis = require('./redis.service');

class EmployeeService {
  async getSubordinates(id) {
    const cacheKey = `employee:${id}:subordinates`;
    const cached = await redis.get(cacheKey);
    
    if (cached) return JSON.parse(cached);

    const result = await prisma.$queryRaw`
      WITH RECURSIVE subordinates AS (
        SELECT id, name, position, supervisorId
        FROM "Employee"
        WHERE id = ${id}
        UNION
        SELECT e.id, e.name, e.position, e.supervisorId
        FROM "Employee" e
        INNER JOIN subordinates s ON s.id = e."supervisorId"
      )
      SELECT * FROM subordinates WHERE id != ${id};
    `;

    await redis.set(cacheKey, JSON.stringify(result), 'EX', 60);
    return result;
  }
}

module.exports = new EmployeeService();