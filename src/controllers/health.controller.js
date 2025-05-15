const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const redis = require('../services/redis.service');

module.exports = {
  healthCheck: async (req, res) => {
    try {
      await Promise.all([
        prisma.$queryRaw`SELECT 1`,
        redis.ping()
      ]);
      res.json({ status: 'OK' });
    } catch (error) {
      res.status(503).json({ status: 'SERVICE_UNAVAILABLE' });
    }
  }
};