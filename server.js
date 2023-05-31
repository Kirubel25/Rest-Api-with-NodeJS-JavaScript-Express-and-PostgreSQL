const express = require('express')
const studentsRoute = require('./src/student/routes')
const { json } = require('express/lib/response')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/v1/students',studentsRoute)

app.listen(port,console.log(`app listning to port ${port}`))

