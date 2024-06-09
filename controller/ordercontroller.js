
const asynchandler = require("express-async-handler")
const Order = require("../model/Order")

const getthedata = asynchandler(async(req,res)=>{
    const ord = await Order.find()
    res.status(200).json(ord)

})

const resrverdata = asynchandler(async(req,res)=>{
    const order = new Order({
        customarname : req.body.customarname,
        customarphone : req.body.customarphone,
        locationCar :req.body.locationCar,
        timeofserves:req.body.timeofserves
    })
    const ruesult = await order.save()
    res.status(201).json(ruesult)
})
const updatedata = asynchandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)
    if(order)
    {
    await Order.findByIdAndUpdate(req.params.id,{
        $set:{
            customarname : req.body.customarname,
            customarphone : req.body.customarphone,
            locationCar :req.body.locationCar,
            timeofserves:req.body.timeofserves}
    },{new:true})
    res.status(200).json(order)
}else{
    res.status(404).json("order he is not found ")

}
}
)
const deletedata = asynchandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)
    if (order){
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("he is deleted")
    }else{
        res.status(404).json("order he is not found")
    }

})
module.exports ={
    getthedata,
    resrverdata,
    updatedata,
    deletedata
}
