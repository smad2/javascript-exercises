const getTheTitles = function(arr) {
    return arr.reduce((actual, next) => {
        actual.push(next.title);
        return actual;
    }, []);

};

// Do not edit below this line
module.exports = getTheTitles;
