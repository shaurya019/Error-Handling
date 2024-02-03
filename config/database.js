import mongoose from "mongoose"

export const connectDB = async() =>{
    try {
        const {connection} = await mongoose.connect("mongodb://localhost:27017/expresserror");

    } catch (error) {
        console.log(error);
    }
}