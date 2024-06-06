const express = require("express")
const router = express.Router()
const {getthedata,resrverdata,updatedata,deletedata} = require("../controller/ordercontroller")


router.post("/",resrverdata)
router.get("/",getthedata)
router.put("/:id",updatedata)
router.delete("/:id",deletedata)
module.exports = router
