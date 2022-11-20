const request = require('supertest');

describe('Petstore Suite', () => {

    it('TC001 - Find pet by ID - Using valid ID', async() => {
        const response = await request('https://petstore.swagger.io').get("/v2/pet/2022");
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual('tiger');
        expect(response.body.id).toEqual(2022);
        console.log(response.body)
    });
    
    it('TC002 - Find pet by ID - Using invalid ID', async() => {
        const response = await request('https://petstore.swagger.io').get("/v2/pet/2021X");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toEqual('Pet not found')
        expect(response.body.type).toEqual('error')
        console.log(response.body)
    });



})