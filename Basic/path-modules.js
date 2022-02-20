const path = require('path')

const join = path.join(__dirname, 'TestingFolder', 'TestingFile.txt')
const resolve = path.resolve(__dirname, 'launch.json')

console.log(path.basename(join))
console.log(join)
console.log(resolve)