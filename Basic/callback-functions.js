const { readFileSync, readFile } = require('fs')

/**
 * This is an example of event loop concept in js where it creates a illusion of multi-threading, even if js is 
 * single thread language.
 * 
 * Event Loop, Async Functions are used to offload the tasks to a other thread and continue the next tasks until 
 * that task is completes.
 */

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