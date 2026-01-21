// Write your code below
const rawGrade = process.argv.slice(2)
const grade = Number(rawGrade)
if (grade >= 0 && grade <= 49) {
    console.log("Grade is F")
} else if (grade >= 0 && grade <= 59) {
    console.log("Grade is D")
} else if (grade >= 0 && grade <= 69) {
    console.log("Grade is C")
} else if (grade >= 0 && grade <= 79) {
    console.log("Grade is B")
} else if (grade >= 0 && grade <= 100) {
    console.log("Grade is A")
} else {
    console.log("Invalid input")
}