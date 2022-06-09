const milkyWay = {
    type: 'Barred Spiral',
    age: "13,600,000,000",
    containsEarth: false,
}
milkyWay.containsEarth = true,
milkyWay.numberOfStars = "100-400 billion";
// console.log(milkyWay)

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];
// console.log(solarSystem[0].ringSystem)

// console.log(solarSystem[4].moons)

// console.log(solarSystem[7].moons[1])

// solarSystem[1].moons = 'Endor'
// console.log(solarSystem)

solarSystem.push('Pluto')
console.log(solarSystem)
