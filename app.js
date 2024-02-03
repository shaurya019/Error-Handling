import express from "express"

const app = express();

app.listen(4000,() => {
    console.log(`server is loading ${4000}`);
});