const findTheOldest = function (people) {
  const ages = people.map((person) => {return {
        name: person.name,
        years: person.yearOfDeath? person.yearOfDeath : new Date().getFullYear() - person.yearOfBirth
}});
ages.sort((a,b) => b.years - a.years);
return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
