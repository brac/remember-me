// jshint asi:true

const express      = require('express')
const app          = express()
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/homepage.html`)
})

app.post('/set-name', (req, res) => {
  res.cookie('username', req.body.name).send('Cookie is set')
})

app.listen(3000, () => {
  console.log('Remeber me app listening on port 3000')
})