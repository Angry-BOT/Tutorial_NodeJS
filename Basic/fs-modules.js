const { readFile, readFileSync, writeFile, writeFileSync } = require('fs')

writeFileSync(
    './Files/testingfile.txt',
    'Hello This is my Mac',
    { flag: 'a' }
)

console.log(readFileSync('./Files/testingfile.txt', 'utf8'))

writeFile(
    './Files/testingfileAsync.txt',
    'Hello This is my Mac Air M1',
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    }
)