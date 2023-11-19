const mongoose = require('mongoose')

const connection = async()=>{
    try{
        mongoose.connect(
            process.env.DATABASE_URI,
            {}
        )
    }catch(e){
            console.error(e.message)

        }
    }
    


module.exports =connection