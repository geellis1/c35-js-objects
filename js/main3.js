myPet = {
    name: "Nellie", 
    species: "goldendoodle", 
    nickNames: ["Nel", "Nelbel", "Whoa, Nellie"],
    age: 1,
    food: "fromm",
    favoriteToys: [],
    play: function (toy) {
        let squeaky  = toy.includes("squeaky")
        if (squeaky === true) {
          this.favoriteToys.push(toy)
          window.alert("she likes it!")
        }
        else {
            window.alert("she doesn't like it!")
        }
    },
    eat: function (item)  {
        myPet.food.push(item)
    },
    bark: function (something) {
        window.alert(`Nellie barks 'woof!' at ${something}`)
    },
    called: function () {
        window.alert(`Nellie's nicknames are ${myPet.nickNames[1]}`)
    }
}

myPet.play("squeaky bone")
myPet.play("hard toy")
myPet.called()

/* the above method which is a function inside an object doesnt automatically know what the paramters
are above it so you have to reference it with the name of the variable i.e. myPet.nickNames*/