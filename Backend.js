const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname+'/front.html'));
})
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname + '/menu.html'));
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
})
app.get('/more', (req, res) => {
  res.sendFile(path.join(__dirname + '/more.html'));
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})