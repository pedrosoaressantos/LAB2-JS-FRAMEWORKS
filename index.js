// index.js

// Importing the functions from utils.js
const { welcomeStudent, convertScoreToGrade, calculateAverage, didStudentPass } = require('./utils');

// Calling the functions

welcomeStudent('Student', 'DSample');

const score = 85;
const grade = convertScoreToGrade(score);
console.log(`Score: ${score} - Grade: ${grade}`);

const scores = [75, 85, 95, 65, 80];
const averageScore = calculateAverage(scores);
console.log(`Your average is: ${averageScore}`);

const passStatus = didStudentPass(averageScore);
console.log(`Student Status: ${passStatus}`);
