const express = require("express")
const router = express.Router()
const {getthedata,resrverdata,deleteformrecyclbin } = require("../controller/recyclbincontroller")
router.post("/postdata",resrverdata)
router.get("/getdata",getthedata)
router.delete("/deleteorder/:id",deleteformrecyclbin )
module.exports = router
