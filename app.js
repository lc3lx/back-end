const express = require("express")
const cors = require('cors')

const {concatdb} = require("./config/concattodb")
const app = express()

require("dotenv").config()

//concatin to database
concatdb()
app.use(express.json())
app.use("/api/order",require("./router/order"))
app.use(cors({
    origin:"*"
}))

//cerate srever 
app.listen(18012, ()=>{
    console.log("sever is ruing in port 5000")
})

