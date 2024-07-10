// utils.js

// First Function: No return, just print a welcome message
function welcomeStudent(firstName, lastName) {
 console.log(`Hello there, welcome ${firstName} ${lastName} to the Grading Portal`);
}

// Second Function: Convert a percentage score to a letter grade
function convertScoreToGrade(score) {

    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';

    }
}

// Third Function: Calculate the average of an array of scores
function calculateAverage(scores) {

 const total = scores.reduce((acc, score) => acc + score, 0);
 return total / scores.length;

}

// Fourth Function: Determine if a student passes based on their average score
function didStudentPass(averageScore) {

 return averageScore >= 60 ? 'Pass' : 'Fail';

}

// Exporting the functions
module.exports = {

    welcomeStudent,
    convertScoreToGrade,
    calculateAverage,
    didStudentPass

};
