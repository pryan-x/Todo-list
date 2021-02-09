const express = require('express')
const app = express()

const apiRoute = require('./routes.js')


// const bodyParser = require('body-xparser')
const cors = require('cors')

//middleware
app.use(express.json())
app.use(cors())


app.use('/api', apiRoute)

app.listen(3001, () => console.log(`Listening on port: 3001`))