import ErrorHandler from "../utils/errorHandler";
import {User} from "../model/user";

export const newUser = async (req,res, next) => {
    try {
       let user = await User.findOne({email:"sp@gnail.com"})
        if(user){
            return next(ErrorHandler("No user created", 400));
        }
        await User.create({
            name:"shaurya",email:"sp@gnail.com"
        })
    res.status(200).json({ message : "User created"});
    } catch (error) {
        return next(error);
    }
};