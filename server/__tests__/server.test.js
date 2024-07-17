const request = require('supertest');
const app = require('../server');

describe('POST /api/upload-conversion', () => {
  it('should upload a conversion', async () => {
    const res = await request(app)
      .post('/api/upload-conversion')
      .send({
        clickId: 'test-click-id',
        conversionTime: new Date().toISOString()
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('success', true);
  });

  it('should return 400 for invalid input', async () => {
    const res = await request(app)
      .post('/api/upload-conversion')
      .send({
        clickId: '',
        conversionTime: 'invalid-date'
      });
    expect(res.statusCode).toEqual(400);
  });
});