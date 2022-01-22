const express = require('express') 

const app = express() 

const port = process.env.PORT || 3000

const fs = require('fs')

const home = fs.readFileSync('index.html') 

const menu = fs.readFileSync('freelance.html')

const contact = fs.readFileSync('contact.html')

const more = fs.readFileSync('more.html')

app.get('/', (req, res) => {

  res.end(home)

})

app.get('/menu', (req, res) => {                              res.end(menu)                                         })

app.get('/contact', (req, res) => {                              res.end(contact)                                         })

app.get('/more', (req, res) => {                              res.end(more)                                         })

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) }) 
