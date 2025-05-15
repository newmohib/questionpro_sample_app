const request = require('supertest');
const app = require('../src/app');
const prisma = require('@prisma/client');

describe('Employee API', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('GET /employees/:id/subordinates - success', async () => {
    const res = await request(app)
      .get('/api/employees/1/subordinates')
      .expect(200);
    
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining({ position: 'Senior software eng' }),
      expect.objectContaining({ position: 'Software eng' })
    ]));
  });

  test('GET /employees/:id/subordinates - invalid ID', async () => {
    const res = await request(app)
      .get('/api/employees/invalid/subordinates')
      .expect(400);
    
    expect(res.body).toHaveProperty('message');
  });
});