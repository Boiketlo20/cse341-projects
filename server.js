const express = require('express')
const app = express()
const routes = require('./routes/index')

const port = process.env.PORT || 3000 ;

app.use('/', routes);

app.listen(port, () =>{
    console.log("Listening on port 3000")
})