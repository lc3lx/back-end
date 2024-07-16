const express = require("express")
const router = express.Router()
const {getthedata,resrverdata} = require("../controller/recyclbincontroller")
router.post("/postdata",resrverdata)
router.get("/getdata",getthedata)
module.exports = router
