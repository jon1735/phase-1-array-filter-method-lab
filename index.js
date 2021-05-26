// Code your solution here
function findMatching(drivers, name){
    const newDriversArray = drivers.filter(string => string.toLowerCase() === name.toLowerCase())
    return newDriversArray
}

function fuzzyMatch(drivers, name) {
    const newDriversArray = drivers.filter(string => string.charAt(0) === name.charAt(0))
    return newDriversArray
}

function matchName (drivers, name){
    const newDriversArray = drivers.filter(drivers => drivers.name === name)
    return newDriversArray
}
