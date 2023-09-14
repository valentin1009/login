import prisma from "../prisma/client";
import {randomUUID} from "crypto";
const md5 = require('md5');
import { generateTokens } from "../utils/jwt";
import {User} from "@prisma/client";

type authRequestType = {
    email: string;
    password: string;
}
export const login = async (userPayload: authRequestType) => {
    const email = userPayload.email?.trim();
    const password = userPayload.password?.trim();

    const user = await prisma.user.findUnique({
        where: {
            email,
            password: md5(password)
        }
    });

    if (!user) {
        throw new Error('Invalid credentials');
    }

    return user;
}

export const saveUserTokens = async ( user: User ) => {
    const jti = randomUUID();
    const { accessToken, refreshToken } = generateTokens(user, jti);

    try {
        await prisma.refreshToken.create({
            data: {
                id: jti,
                hashedToken: refreshToken,
                userId: user.id,
            },
        });

        return {
            accessToken,
            refreshToken
        }
    } catch (e) {
        throw new Error("Unhandled exception");
    }
}