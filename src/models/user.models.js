import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    usernamae: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        requiere: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    }

}
,{
    timestamps: true
}
)

export default mongoose.model( "User" , userSchema );