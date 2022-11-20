const request = require('supertest')
const id = require("../components/Generator.js")
var petData = require("../resources/pets.json")

describe('Petstore Suite', () => {

    const petID = id.randomID()
    const pet = id.petGenerator(petID)

    it('TC001 - Add new pet - Using ', async() => {    
        const response = await request('https://petstore.swagger.io').post(`/v2/pet/`)
            .send(pet)
            .set('Content-Type', 'application/json')
            .set('accept', 'application/json')
            console.log(pet)
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual('lion');
        console.log(response.body.id)
    });

    it('TC001 - Find pet by ID - Using valid ID', async() => {
        const response = await request('https://petstore.swagger.io').get(`/v2/pet/${petData.validPetID}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual('tiger');
        expect(response.body.id).toEqual(2022);
        console.log(response.body)
    });
    
    it('TC002 - Find pet by ID - Using invalid ID', async() => {
        const response = await request('https://petstore.swagger.io').get(`/v2/pet/${petData.invalidPetID}`);
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toEqual('Pet not found')
        expect(response.body.type).toEqual('error')
        console.log(response.body)
    });

    it('TC003 - Find pet by ID - Using invalid ID', async() => {
        const response = await request('https://petstore.swagger.io').get(`/v2/pet/${petData.invalidPetID}`);
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toEqual('Pet not found')
        expect(response.body.type).toEqual('error')
        console.log(response.body)
    });



})