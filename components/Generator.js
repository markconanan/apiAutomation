class Generator {
    
    randomID() {
        const date = new Date(Date.now());
        const randomID = String(date.getMonth())+String(date.getDate())+String(date.getHours())+String(date.getMilliseconds())+String(Math.floor(Math.random()*100));

        return randomID
    }

    petGenerator(randomID) {

        var pet = `
        {
            "id":${randomID} ,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "lion",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
        }`
        return pet
    }
}

module.exports = new Generator()