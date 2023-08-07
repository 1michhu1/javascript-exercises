const findTheOldest = function(people) {
// carly 28, ray 49, jane 29

    sortedArr = people.sort( (a,b) => {
        if
        if ((+(a.yearOfDeath) - +(a.yearOfBirth)) > (+(b.yearOfDeath) - +(b.yearOfBirth))) {
            console.log(a.name, " is greater than ", b.name)
            console.log((+(a.yearOfDeath) - +(a.yearOfBirth)) > (+(b.yearOfDeath) - +(b.yearOfBirth)))
            return 1
        } else {
            console.log(a.name, " is less than ", b.name)

            return -1
        }
    })
    console.log(sortedArr)
    return sortedArr[people.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
