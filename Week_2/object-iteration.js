var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (var planet in planetMoons) {//keys in planet inside planetMoons PlanetMoons[0]
  var numberOfMoons = planetMoons[planet];//object name or value square bracket
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}

