const getRandomDayNumber = require('./getDayNumber');

const isEnDay = () => {
    const availableDays = [1, 2, 3, 4, 5]; // 0 is Sunday, 5 is Friday
    const min = availableDays[0];
    const max = availableDays[availableDays.length - 1]

    let dayNumber = getRandomDayNumber(min, max);
    let day = new Date().getDay();


    if (day !== dayNumber) return false;

    return true;
}

module.exports = isEnDay;