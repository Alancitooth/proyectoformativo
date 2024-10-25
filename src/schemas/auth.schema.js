import {z} from 'zod';


export  const registerSchema = z.object({
    username: z.string({
        required_error: "username is required"
    }),
    email: z.string({
        required_error: "El email is required"
    }).email({
        message: 'Invalid Email Addres'
    }),
    password: z.string({
        required_error: "Password must be a least 6 cheracters long."
    }).min(6, {
        message: 'Password must be at least 6 characters long'
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "El email is required"
    }).email({
        message: 'Invalid Email Addres'
    }),
    password: z.string({
        required_error: "Password must be a least 6 cheracters long."
    }).min(6, {
        message: 'Password must be at least 6 characters long'
    })
});