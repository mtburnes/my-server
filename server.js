//telling node it's http
const http = require('http')
//setting variables
const hostname = process.env.hostname || '0.0.0.0'
const port = process.env.PORT || 80
//creating HTTP Document
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello...\n')
    res.write('Hello...\n')
    res.end('Hello, world! This is a nodeJS server. :D')
})
//opens the server. Takes name and port
server.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}`)
})