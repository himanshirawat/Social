// Express + API endPoints + HTTP Methods

const express = require('express')
const {Users,add} = require('./models/user.models')
const app = express()
const port = 3000

//GET Method to get information from the server
app.get('/users', (req, res) => {
  res.send({user:Users, message : "Sucsessfully connected "}).status(200)
})


//POST Method to crete data in server
app.post('/users',(req,res) => {
    console.log(req.body)
    add(req.body)
})
// to check above req work go to Postman and type the url there


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})