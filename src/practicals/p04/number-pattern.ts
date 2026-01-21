// Write your code below
const rawPattern = process.argv.slice(2)
const pattern = Number(rawPattern)

if (pattern > 0) {
    for (let i = 1; i <= pattern; i++) {
        for (let j = 0; j < pattern - i; j++) {
            process.stdout.write(" ")
        }
        for (let k = i; k >= 1; k--) {
            process.stdout.write(`${k}`)
        }
        console.log()
    }
}