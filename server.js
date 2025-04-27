const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

const PORT = 3000
app.use(express.static('dist'))

server.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`)
})
