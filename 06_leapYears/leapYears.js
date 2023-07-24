const leapYears = function(year) {
    // div by 4 = leap year
    // unless div by 100  = not leap year
    // if div by 400 then leap year
    let isLeapYear = false;
    if (!Number.isInteger(year) ) {
        return "ERROR";
    } else if ( year % 400 === 0 ) {
        isLeapYear = true;
    } else if (year % 4 === 0 && year % 100 != 0) {
        isLeapYear = true;
    }

    return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
