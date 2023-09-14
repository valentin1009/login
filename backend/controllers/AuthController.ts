import prisma from '../prisma/client';
import {login, saveUserTokens} from '../services/auth';
import {NextFunction} from "express";
import {TypedRequestBody} from "../utils/general";
import { Response } from 'express';
import {validationResult} from "express-validator";
async function auth(req: TypedRequestBody<{email: string, password: string}>, res: Response, next: NextFunction){
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(403).json({
            success: false,
            errors: errors.array(),
        });
    }

    const { email, password }  = req.body;

    try {
        const user = await login({email, password});
        const tokens = await saveUserTokens(user);

        res.json(tokens);
    } catch (error) {
        return res.status(403).json({
            success: false,
            errors: [error.message],
        });
    }
}

export {
    auth
};