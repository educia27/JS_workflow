/*
//Week 1 Day 1 Exercise Sept 20 5:30pm

// declaring variables

let spaceShuttle = "Determination";
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384000
const milesPerKilometer = 0.621

// returning data types for  data values

console.log(typeof "Determination");
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384000);
console.log(typeof 0.621);

// Mars distance and time data

let totalMilesToMars = distanceMars * milesPerKilometer;
console.log(totalMilesToMars);

let totalHoursToMars = totalMilesToMars / shuttleSpeed;
console.log(totalHoursToMars);

let daysToMars = totalHoursToMars / 24;
console.log(daysToMars);

console.log(spaceShuttle + " will take " + daysToMars + " days to reach Mars.")

// Moon distance and time data 

let totalMilesToMoon = distanceMoon * milesPerKilometer;
console.log(totalMilesToMoon);

let totalHoursToMoon =totalMilesToMoon / shuttleSpeed;
console.log(totalHoursToMoon);

let daysToMoon = totalHoursToMoon / 24;
console.log(daysToMoon);

console.log(spaceShuttle + " will take " + daysToMoon + " days to reach the Moon.");
*/

const d = new Date(2019, 2, 18).toDateString();
console.log("Date:", d);

const t = new Date('March 3, 2018, 10:05:34')
.toLocaleTimeString('en-US');
console.log("Time:", t);


let astronautCount = 7;
console.log("* Count:", astronautCount);

let astronautStatus = "Ready";
console.log("* Status:", astronautStatus);


let averageAstronautMassKg =  80.7;
//console.log(averageAstronautMassKg);

let fuelTempCelsius = "-225C";
console.log("* Fuel Temp Celsius:", fuelTempCelsius);

let fuelLevel = 100;
console.log("* Fuel Level:", fuelLevel);

let crewMassKg = astronautCount * averageAstronautMassKg;
console.log("* Crew mass:", crewMassKg)

let fuelMassKg = 760000;
console.log("* Fuel mass:", fuelMassKg);

let shuttleMassKg = 74842.31;
console.log("* Shuttle mass:", shuttleMassKg);

let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
console.log("* Total mass:", totalMassKg);

let weatherStatus = "Clear";
console.log("* Weather:", weatherStatus);

/*
-------------------------------------
> OVERALL STATUS
-------------------------------------
*/

let overallStatus = "Yes";
console.log("* Clear for takeoff:", overallStatus); 