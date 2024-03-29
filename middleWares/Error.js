const middleError = (err,req,res,next) => {
    err.message = err.message || "Inter error",
    err.statusCode = err.statusCode || 500;
    if(err.code === 11000){
        err.message = "duplicate key error",
        err.statusCode = 400;
    }
    res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
};

export default middleError;