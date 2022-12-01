const express = require("express")
const mongo = require('./mongo')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const UserRouter = require('./router')
app.use(express.json())
app.use(bodyParser.json())
app.use(morgan("combined"))
// app.use(cors)
mongo.connectToServer((err)=>{
    if(err) console.log(err)

})
app.use('/', UserRouter)

app.listen(3001, ()=> console.log("app running in port 3001"))


