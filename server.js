const http = require('http')
const server = http.createServer((req, res) => {
	res.end('hello, world')
})
server.listen(3333, () => {
	console.log("port is 3333")
})
