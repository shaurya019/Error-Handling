import express from "express"
import newUser from "../controllers/userController"

const router = express.Router();

router.get("/",newUser);

export default router;