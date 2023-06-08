import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Database connected successfully')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=dbConnect;