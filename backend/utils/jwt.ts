const jwt = require('jsonwebtoken');
import type { User } from '@prisma/client'

function generateAccessToken(user: User) {
    return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: '15',
    });
}
export function generateRefreshToken(user: User, jti: string) {
    return jwt.sign({
        userId: user.id,
        jti
    }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: '8h',
    });
}

export function generateTokens(user: User, jti: string) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user, jti);

    return {
        accessToken,
        refreshToken,
    };
}