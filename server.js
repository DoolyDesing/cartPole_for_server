const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

server.listen(PORT, '0.0.0.0', () => {
	console.log(`Server listening on http://localhost:${PORT}`)
})
