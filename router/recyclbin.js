const express = require("express")
const router = express.Router()
const {getthedata,resrverdata} = require("../controller/recyclbincontroller")
router.post("/postdata",resrverdata)
router.get("/getdata",getthedata)
router.delete("/deleteorder/:id")
module.exports = router
