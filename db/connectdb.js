import mongoose from "mongoose";

const connectMongo = async ()=>{
    try{
        console.log("connected");
        await mongoose.connect(process.env.MONGO_URI)
    }catch(error){
        console.log(error);
        // throw new Error("Error mongodb")
    }
}

export default connectMongo