const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;
const fareDoubler = createFareMultiplier(2);
function fareTripler(fare) {
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers);
}
