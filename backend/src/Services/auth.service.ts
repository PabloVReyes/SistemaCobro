import { loginQuery } from "src/Helpers/user.query"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const loginService = async (req: any) => {
    const { username, password } = req.body

    const user: any = await loginQuery(username)

    if (!user) {
        throw new Error("INVALID_CREDENTIALS")
    }

    if (!user.active) {
        throw new Error("USER_INACTIVE")
    }

    const isValidPassword = bcrypt.compareSync(password, user.password)

    if (!isValidPassword) {
        throw new Error("INVALID_CREDENTIALS")
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.name,
            role: user.rol
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "1h"
        }
    )

    return {
        token,
        user: {
            id: user.id,
            username: user.username,
            role: user.rol
        }
    }
} 