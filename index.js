// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function() {
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
    return function fareMultiplier(fare){
        return fare*integer;
    };
    
}const fareDoubler = function fareDoubler (fare){
    return fare*2;
}
const fareTripler = function fareTripler (fare) {
    return fare*3;
}
function selectDifferentDrivers(drivers, twoDrivers) {
    return twoDrivers(drivers);
}
