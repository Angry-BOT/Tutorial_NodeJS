const { readFileSync, readFile } = require('fs')

console.log(`File Reading Started ...`)

readFile(
    '../Files/testingfileAsync.txt',
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
        console.log('Reading Finished ...')
    }
)

console.log(`Starting the next file reading job ...`)

readFileSync(
    '../Files/testingFile.txt',
    'utf8'
)

console.log(`All Reading jobs finished !!`)