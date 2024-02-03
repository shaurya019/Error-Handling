import express from "express"
import userRouter from "./routes/user"
import middleError from "./middleWares/Error"
import {connectDB} from "./config/database"

const app = express();

connectDB();

app.use("/user",userRouter);
app.listen(4000,() => {
    console.log(`server is loading ${4000}`);
});

app.use(middleError);