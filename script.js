"use strict"


let dogs=[]
/*
dogs.push({Name:"Fluffy", Breed:"Poodle", Picture:"https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", Age: "7 months"})
dogs.push({Name:"Otto", Breed:"Chihuahua", Picture:"https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", Age: "2 years old"})
dogs.push({Name:"Alfie", Breed:"French Bulldog", Picture:"https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", Age: "6 months"})
dogs.push({Name:"Ruby", Breed:"Pomeranian", Picture:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", Age: "3 months"})
dogs.push({Name:"Sparkie", Breed:"Golden Retriever", Picture:"https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", Age: "1 year old"})
dogs.push({Name:"Koko", Breed:"Jack Russell", Picture:"https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", Age: "3 months"})

for (let i=0; i<dogs.length; i++){

    let card = document.createElement("div") //Creates div
    document.body.appendChild(card)
    let dogName = document.createElement("h1") //Creates dogName in h1
    card.appendChild(dogName)
    dogName.style.backgroundColor = "yellow"
    
    document.body.style.backgroundColor = "yellow" //Changes background colour
    card.style.backgroundColor = "cyan" //Changes colour of the card
    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)

    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].Picture
    dogPicture.style.width = 500 + "px"
    dogPicture.style.height = "auto"

    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    dogAge.style.fontWeight = "bold"

    card.style.padding = 300 + "px"
    card.style.margin = 400 + "px"
    card.style.borderRadius = 100 + "px"

    let button = document.createElement("button")
    card.appendChild(button)

    card.style.fontFamily = "Helvetica"
    dogName.innerHTML = dogs[i].Name
    dogBreed.innerHTML = dogs[i].Breed
    dogPicture.innerHTML = dogs[i].Picture
    dogAge.innerHTML = dogs[i].Age
    button.innerHTML = "Adopt Now"
}

"use strict"

let dogs=[]

dogs.push({Name:"Fluffy", Breed:"Poodle", Picture:"https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", Age: "7 months"})
dogs.push({Name:"Otto", Breed:"Chihuahua", Picture:"https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", Age: "2 years old"})
dogs.push({Name:"Alfie", Breed:"French Bulldog", Picture:"https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", Age: "6 months"})
dogs.push({Name:"Ruby", Breed:"Pomeranian", Picture:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", Age: "3 months"})
dogs.push({Name:"Sparkie", Breed:"Golden Retriever", Picture:"https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", Age: "1 year old"})
dogs.push({Name:"Koko", Breed:"Jack Russell", Picture:"https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", Age: "3 months"})

function showDogs(){

for (let i=0; i<dogs.length; i++){

    let card = document.createElement("div") //Creates div
    document.body.appendChild(card)
    let dogName = document.createElement("h1") //Creates dogName in h1
    card.appendChild(dogName)
    dogName.style.backgroundColor = "yellow"
    
    document.body.style.backgroundColor = "yellow" //Changes background colour
    card.style.backgroundColor = "cyan" //Changes colour of the card
    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)

    let dogPicture = document.createElement("img")
    card.appendChild(dogPicture)
    dogPicture.src = dogs[i].Picture
    dogPicture.style.width = 500 + "px"
    dogPicture.style.height = "auto"

    let dogAge = document.createElement("p")
    card.appendChild(dogAge)
    dogAge.style.fontWeight = "bold"

    card.style.padding = 300 + "px"
    card.style.margin = 400 + "px"
    card.style.borderRadius = 100 + "px"

    let button = document.createElement("button")
    card.appendChild(button)

    card.style.fontFamily = "Helvetica"
    dogName.innerHTML = dogs[i].dogName()
    dogBreed.innerHTML = dogs[i].dogBreed()
    dogPicture.innerHTML = dogs[i].dogPicture()
    dogAge.innerHTML = dogs[i].dogAge()
    button.innerHTML = "Adopt Now"
}

*/ 

function showDogs(){

    for (let i=0;i<dogs.length;i++){
    
        let card = document.createElement("div") //Creates div
        card.classList.add("card")
        document.getElementById("cardholder").appendChild(card)
        document.body.appendChild(card)

        let dogName = document.createElement("h1") //Creates dogName in h1
        card.appendChild(dogName)
        dogName.style.backgroundColor = "yellow"
        
        document.body.style.backgroundColor = "yellow" //Changes background colour
        card.style.backgroundColor = "cyan" //Changes colour of the card
        let dogBreed = document.createElement("h2")
        card.appendChild(dogBreed)
    
        let dogPicture = document.createElement("img")
        dogPicture.classList.add("dogpicture")
        card.appendChild(dogPicture)
        dogPicture.src = dogs[i].picture
        dogPicture.style.width = 500 + "px"
        dogPicture.style.height = "auto"
    
        let dogAge = document.createElement("p")
        card.appendChild(dogAge)
        dogAge.style.fontWeight = "bold"
    
        card.style.padding = 300 + "px"
        card.style.margin = 400 + "px"
        card.style.borderRadius = 100 + "px"
    
        let button = document.createElement("button")
        button.classList.add ("button")
        card.appendChild(button)
    
        card.style.fontFamily = "Helvetica"
        dogName.innerHTML = dogs[i].name
        dogBreed.innerHTML = dogs[i].Breed
        dogPicture.innerHTML = dogs[i].picture
        dogAge.innerHTML = dogs[i].age

        button.innerHTML = "Adopt Now"
    }
}

class Dog {
    constructor (name, Breed, picture, age){ //Makes an instance of a class
        this.name = name
        this.Breed = Breed
        this.picture = picture
        this.age = age
    }
}

function setupDogs(){
    dogs.push(new Dog("Fluffy", "Poodle", "https://1.bp.blogspot.com/-HGHeu9tMAVk/X38fEMeFTAI/AAAAAAAABpU/DlZnIO_c7q8b98uUYSX02wEsgOpib7xzQCLcBGAsYHQ/s616/toy-poodle-puppy-price-in-india.png", "7 months"))
    dogs.push(new Dog("Otto", "Chihuahua", "https://i.pinimg.com/originals/cc/66/5b/cc665b8cc5fd3a0f416c37c437f10a9d.jpg", "2 years old"))
    dogs.push (new Dog("Alfie", "French Bulldog", "https://www.lovelyhomefenchbulldogs.com/wp-content/uploads/2020/10/e31d4008-3462-43d4-a45d-cf05aa3421d0.jpg", "6 months"))
    dogs.push (new Dog("Ruby", "Pomeranian", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg", "3 months"))
    dogs.push (new Dog("Sparkie", "Golden Retriever", "https://i.pinimg.com/originals/59/df/de/59dfde6234ce23109248065208283059.jpg", "1 year old"))
    dogs.push (new Dog("Koko", "Jack Russell", "https://i.pinimg.com/originals/b5/ae/79/b5ae797a411df740484ededb704a33cd.jpg", "3 months"))
}

setupDogs()
showDogs()