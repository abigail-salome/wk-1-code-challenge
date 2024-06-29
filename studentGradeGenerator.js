
// Function to determine the grade based on the marks input
function determineGrade(marks) {
     // Grades are determined based on specific ranges of marks
    if (marks > 79 ) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 49 && marks <=59 ) {
        return "C"; 
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else if (marks < 40 ) {
        return "E";
    }
    }
    // Function to test and display the grade for a given mark
    function testGrade(mark) {
        // Check if the mark is a valid number within the range of 0 to 100
        if (! isNaN(mark) && mark >= 0 && mark <= 100) {
             // Calculate and store the grade using the determineGrade function
            let grade = determineGrade(mark);
            // Output the grade based on the mark
            console.log("for mark", mark + ", the student's grade is :" , grade);
        } else {
            // Output an error message if the mark is not within the valid range
            console.log("ERROR: marks should be between 0 and 100")
        }
    }
    // Testing the function with a mark of 55
    testGrade(55);