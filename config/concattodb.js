const mongoes = require("mongoose")
async function concatdb ()
{try {
   await mongoes.connect(process.env.concationstarting)
    console.log("is successlfuly concation")

    
} catch (error) {
    console.log(error)
    
}}


module.exports = {
    concatdb
}