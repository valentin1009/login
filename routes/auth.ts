import express from "express";
import {body} from "express-validator";
import {auth} from "../controllers/AuthController";

const router = express.Router();

router.post('/auth', [
    body('email')
        .isEmail()
        .withMessage("Invalid email")
        .notEmpty()
        .withMessage("Email is required"),
    body('password')
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
], auth);

export default router;