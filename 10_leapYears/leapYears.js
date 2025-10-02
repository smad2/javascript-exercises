const leapYears = function (year) {
    return year % 4 === 0 && ((year % 100 !== 0) ||
        ((year % 100 === 0) && (year % 400 === 0))) ? true : false;

    // let check = false;
    // if(year % 4 ===0){
    //     check = true;
    //     if(year % 100 === 0){
    //         check = false;
    //         if(year % 400 ===0){
    //             check= true;
    //         }
    //     }
    // }
    // return check;


};

// Do not edit below this line
module.exports = leapYears;
