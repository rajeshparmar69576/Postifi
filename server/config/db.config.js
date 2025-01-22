import mongoose from "mongoose"

export const ConnDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db connected suceesfully...")
    }catch(error){
        console.error("Error while connecting to DB")
        process.exit(1)
    }
}
