

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
    let people = [
        {name: "Ilona", age: 18},
        {name: "Maria", age: 32},
        {name: "Gustav", age: 16},
        {name: "Pablo", age: 31},
        {name: "Lisa", age: 22}
    ];

    function getPerson(arr) {
        for (let person of arr) {
            if (person.age >= 30) {
                console.log(person.name);
            }
        }
    }

    getPerson(people);

}

module.exports = { uppg8 };