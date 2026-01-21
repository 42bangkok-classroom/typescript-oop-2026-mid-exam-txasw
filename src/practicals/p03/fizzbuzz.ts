// Write your code below
const rawFizz = process.argv.slice(2)
const fizz = Number(rawFizz)
for (let i = 1; i <= fizz; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz")
        continue
    }
    
    if (i % 3 == 0) {
        console.log("Fizz")
        continue
    }

    if (i % 5 == 0) {
        console.log("Buzz")
        continue
    }

    console.log(i)
}