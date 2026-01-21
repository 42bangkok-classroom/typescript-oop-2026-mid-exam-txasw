// Write your code below
const rawPattern = process.argv.slice(2)
const pattern = Number(rawPattern)

if (pattern > 0) {
    for (let i = 1; i <= pattern; i++) {
        let out = ""
        for (let j = 0; j < pattern - i; j++) {
            out += " "
        }
        for (let k = i; k >= 1; k--) {
            out += `${k}`
        }
        console.log(out)
    }
}