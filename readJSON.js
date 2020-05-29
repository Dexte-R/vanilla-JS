function parseJSON() {
    inputJSON = 
    `[
        {
            "string": "Dexter",
            "number": 1,
            "boolean": true,
            "null": null,
            "Array": [1, "2", true],
            "Objects": [{
                "key": "value"
            }]
        },
        {
            "secondObject": null
        }
    ]`
    return output = JSON.parse(inputJSON)
}

const array = parseJSON()

array.forEach((object) => {
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`)
    }
})