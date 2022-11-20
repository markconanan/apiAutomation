const request = require('supertest')
const id = require("../components/Generator.js")

describe('Petstore Suite', () => {

    //generate the petID to be used for the add, update and delete tests
    const petID = parseInt(id.randomID())

    //verifies responses for add new pet endpoint and creates a petID to be used for the rest of the tests
    it('TC001 - Add new pet - Using valid ID', async() => {   
        const pet = id.petGenerator(petID, `"lion"`) 
        const response = await request('https://petstore.swagger.io').post(`/v2/pet/`)
            .send(pet)
            .set('Content-Type', 'application/json')
            .set('accept', 'application/json')
        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual('lion')
        expect(response.body.id).toEqual(petID);
    });

    //verifies responses for find pet by ID using valid ID
    it('TC002 - Find pet by ID - Using valid ID', async() => {
        const response = await request('https://petstore.swagger.io').get(`/v2/pet/${petID}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual('lion');
        expect(response.body.id).toEqual(petID);
    });
    
    //verifies responses for find pet by ID using invalid ID
    it('TC003 - Find pet by ID - Using invalid ID', async() => {
        const invalidID = 33333
        const response = await request('https://petstore.swagger.io').get(`/v2/pet/${invalidID}`);
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toEqual('Pet not found')
        expect(response.body.type).toEqual('error')
    });

    //verifies responses for update pet by ID using valid ID
    it('TC004 - Update existing pet - Using valid ID', async() => {
        const updatePet = id.petGenerator(petID, `"tiger"`)
        const response = await request('https://petstore.swagger.io').put(`/v2/pet/`)
            .send(updatePet)
            .set('Content-Type', 'application/json')
            .set('accept', 'application/json')
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual('tiger');
        expect(response.body.id).toEqual(petID);
    });

    //verifies responses for update pet by ID using invalid ID
    it('TC005 - Update existing pet - Using invalid ID', async() => {
        const invalidID = '33333A'
        const updatePet = id.petGenerator(invalidID, `"tiger"`)
        const response = await request('https://petstore.swagger.io').put(`/v2/pet/`)
            .send(updatePet)
            .set('Content-Type', 'application/json')
            .set('accept', 'application/json')
        expect(response.statusCode).toBe(400);
    });

    //verifies responses for delete pet by ID using valid ID
    it('TC006 - Delete existing pet - Using valid ID', async() => {
        const response = await request('https://petstore.swagger.io').delete(`/v2/pet/${petID}`)
            .set('Content-Type', 'application/json')
            .set('api_key', 'special-key')
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toEqual(petID.toString())
    })

    //verifies responses for delete pet by ID using invalid ID
    it('TC006 - Delete existing pet - Using invalid ID', async() => {
        const invalidID = '33333'
        const response = await request('https://petstore.swagger.io').delete(`/v2/pet/${invalidID}`)
            .set('Content-Type', 'application/json')
            .set('api_key', 'special-key')
            expect(response.statusCode).toEqual(404)
    })

})