const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.httpVersion)
    console.log('Inside Server Callback..')
    res.end('This is the response !!')
})

server.listen(4000, () => {
    console.log('Server is listening on port 4000...')
})