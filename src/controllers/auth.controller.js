import { createTokenAccess } from "../libs/jwt.js";
import User from "../models/user.models.js";
import bcrypt from 'bcryptjs';

const register = async (requese, response) => {
    const {email, password, username} = requese.body;
    try {

        const userFound = await User.findOne({email})
        if(userFound) return response.status(400).json(['the email is already  in use']);


        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createTokenAccess({id: userSaved._id});
        response.cookie('token', token)
        response.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })

    } catch (error) {
        response.status(500).json({message: error.message});
    }
}
const login = async (requese, response) => {
    const {email, password} = requese.body;
    try {
        const userFound = await User.findOne({email});
        if(!userFound) return response.status(400).json({message: 'User not found'});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch)return response.status(400).json({message: "Error in Credentials"});
       
        response.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })

    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

const logout = (requeuse, response) =>  {
    response.cookie('token', '', {
        expires: new Date(0),
    })
    return response.sendStatus(200);
}

const profile = async (requese, response) => {
    const userFound = await User.findById(requse.user.id);
    if(!userFound) return response.status(400).json({message: 'User no found'});
    response.status(201).json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email
    })

}

export {
    register, 
    login, 
    logout,
    profile
}