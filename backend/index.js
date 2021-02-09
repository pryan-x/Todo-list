const express = require('express')
const app = express()

const apiRoute = require('./routes.js')


const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')

//middleware
app.use(express.json())
app.use(cors())


app.use('/api', apiRoute)

app.listen(3001, () => console.log(`Listening on port: 3001`))