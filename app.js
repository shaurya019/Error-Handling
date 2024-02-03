import express from "express"
import userRouter from "./routes/user"
import middleError from "./middleWares/Error"

const app = express();

app.use("/user",userRouter);
app.listen(4000,() => {
    console.log(`server is loading ${4000}`);
});

app.use(middleError);