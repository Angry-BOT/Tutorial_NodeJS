const os = require('os')

// console.log(os.hostname(), os.loadavg(), os.freemem())
// console.log(`System uptime is ${os.uptime() % 100} Hours`)

const osObject = {
    name: os.hostname(),
    memory: os.totalmem(),
    freemem: os.freemem(),
    uptime: (os.uptime() % 100)
}

console.log(osObject)