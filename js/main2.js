console.log("hamster stuff", hamster["name"]);
console.log("hamster children", hamster.children[0]);
console.log(`The hamsters children are ${hamster.children[0]} ${hamster.children[1]}, and ${hamster.children[2]}`)

for (let i = 0; i < hamster.children.length; i++) {
    console.log(`Hamster child: ${i + 1} is ${hamster.children[i]}`)
}

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


console.log(`Empire State Building is ${empireStateBuilding.squareFeet} square feet and ${empireStateBuilding.height} 
feet tall and ${empireStateBuilding.stories} stories high`) 

console.log("Empire state building is located at", empireStateBuilding["address"]);