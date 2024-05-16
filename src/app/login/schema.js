import {z} from "zod";


const Schema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({message: "Invalid email"}),
    password: z.string().min(6, {message: "Password is required"})
})

export {
    Schema
}