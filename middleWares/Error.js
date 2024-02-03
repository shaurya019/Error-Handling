const middleError = (err,req,res,next) => {
    err.message = err.message || "Inter error",
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
};

export default middleError;