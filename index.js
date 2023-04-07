const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function(drivers, returnDriverFunction) {
    return returnDriverFunction(drivers);
};
const drivers = ["Driver 1", "Driver 2", "Driver 3", "Driver 4", "Driver 5"];
console.log("First two drivers:", selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log("Last two drivers:", selectDifferentDrivers(drivers, returnLastTwoDrivers));
console.log("Fare doubled:", fareDoubler(10));
console.log("Fare tripled:", fareTripler(10));

