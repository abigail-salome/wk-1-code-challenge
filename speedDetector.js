
function detector(speed) {
    // Defines the speed limit
    const speedLimit = 70
    // Checks if the speed is within the limit or not
    const kmPerDemeritPoint = 5;
if (speed <= 70) {
    return "Ok";
} else if (speed <= 75) {
    return "Points: 1";
} else if (speed <= 80) {
    return "Points: 2";
} else if (speed <= 85) {
    return "Points: 3";
} else if (speed <= 90) {
    return "Points: 4";
} else if (speed <= 95) {
    return "Points: 5";
} else if (speed <= 100) {
    return "Points: 6";
} else if (speed <= 105) {
    return "Points: 7";
} else if (speed <= 110) {
    return "Points: 8";
} else if (speed <= 115) {
    return "Points: 9";
} else if (speed <= 120) {
    return "Points: 10";
} else if (speed <= 125) {
    return "Points: 11";
} else if (speed <= 130) {
    return "Points: 12";
} else {
    return "License suspended."
}
}
// Testing the function with a speed of 80
detector(80);