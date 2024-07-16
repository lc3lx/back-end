const asynchandler = require("express-async-handler")
const Recyclbin  = require("../model/Recyclbin")

const getthedata = asynchandler(async(req,res)=>{
    const recyclbin = await Recyclbin.find()
    res.status(200).json(ord)

})
const resrverdata = asynchandler(async(req,res)=>{
    const recyclbin = new Recyclbin({
        customarname : req.body.customarname,
        customarphone : req.body.customarphone,
        locationCar :req.body.locationCar,
        timeofserves:req.body.timeofserves
    })
    const ruesult = await order.save()
    res.status(201).json(ruesult)
})
module.exports ={
    getthedata,
    resrverdata,}