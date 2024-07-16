const express = require("express")
const router = express.Router()
const {getthedata,resrverdata} = require("../controller/recyclbincontroller")
router.post("/sendorder",resrverdata)
router.get("/getorder",getthedata)
module.exports = router