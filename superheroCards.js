//Given index
const avengers = [
  {
   "name": "Iron Man",
   "realName": "Tony Stark",
   "age": 48,
   "primaryPower": "Genius-level intellect" 
  }, 
  { 
    "name": "Captain America",
    "realName": "Steve Rogers", 
    "age": 100, 
    "primaryPower": "Super Strength" 
  }, 
  { 
    "name": "Thor Odinson", 
    "age": 1500, 
    "primaryPower": "Lightning" 
  }, 
  { 
    "name": "Hulk",
    "realName": "Bruce Banner",
    "age": 49, 
    "primaryPower": "Super Strength" 
  }, 
  { 
    "name": "Black Widow",
    "realName": "Natasha Romanoff",
    "age": 34, 
    "primaryPower": "Expert spy" 
  }, 
  { 
    "name": "Hawkeye",
    "realName": "Clint Barton", 
    "age": 35, 
    "primaryPower": "Master archer"
  }
];

// Will go over the whole array of heroes
console.log("Superheroes:");
for (let i = 0; i < avengers.length; i++) {
  console.log(avengers[i].name);
}

// Logging a name for the hero(s) that have super strength
console.log("\nSuperheroes that have Super Strength:");
for (let i = 0; i < avengers.length; i++) {
  if (avengers[i].primaryPower === "Super Strength") {
    console.log(avengers[i].name);
  }
}

// Will show heros that are 50 or older
console.log("\nSuperheroes that are 50 or older:");
for (let i = 0; i < avengers.length; i++) {
  if (avengers[i].age >= 50) {
    console.log(avengers[i].name + ", Age: " + avengers[i].age);
  }
}