const express = require('express')
const app = express()
//first route
app.get('/', (req, res) => {
    res.send('Hello world!')
})
//second route
app.get('*', (req,res) => {

})

//404 page
app.get('*', (req,res) => {
    res.send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)
