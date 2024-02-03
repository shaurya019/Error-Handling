import ErrorHandler from "../utils/errorHandler"

export const newUser = (req,res, next) => {
    const userEnter = false;
    if(userEnter){
        return next(ErrorHandler("No user created", 400));
    }
res.status(200).json({ message : "User created"});
};