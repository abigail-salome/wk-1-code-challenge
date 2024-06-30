const userInput = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to determine the grade based on the marks input
function determineGrade(marks) {
  // Grades are determined based on specific ranges of marks
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else if (marks < 40) {
    return "E";
  }
}

// Prompt the user to enter student marks
userInput.question("enter student marks: ", function (input) {
  const marks = parseInt(input); //  // Parse the input as an integer
  // Check if the input is valid (a number between 0 and 100
  if (isNaN(marks) || marks > 100 || marks < 0) {
    console.log("you entered an invalid mark"); // Inform the user of invalid input
  } else {
    const grade = determineGrade(marks); // Determine the grade based on marks
    console.log(`the grade is ${grade}`); // Output the grade
  }
  userInput.close(); // Close the input interface
});
