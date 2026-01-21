// Write your code below
const rawGrade = process.argv.slice(2)
const grade = Number(rawGrade)
if (grade >= 0 && grade <= 49) {
    console.log("F")
} else if (grade >= 0 && grade <= 59) {
    console.log("D")
} else if (grade >= 0 && grade <= 69) {
    console.log("C")
} else if (grade >= 0 && grade <= 79) {
    console.log("B")
} else if (grade >= 0 && grade <= 100) {
    console.log("A")
} else {
    console.log("Invalid input")
}