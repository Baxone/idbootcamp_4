const request = require('supertest');
const app = require('../app');

describe('Products Tests', () => {

    describe('GET /api/products', () => {

        it('debería devolver una respuesta correcta', async () => {
            const response = await request(app).get('/api/products').send();

            expect(response.statusCode).toBe(200);
        });

        it('debería devolver un objeto en formato json', async () => {
            const response = await request(app).get('/api/products').send();

            expect(response.headers['content-type']).toContain('json');
        });

    });

});