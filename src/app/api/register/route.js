import db from '@/lib/db'
import {NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'

export async function POST(req) {
    try{
        const body = await req.json()
        const {email,username, password} = body
        const isExisting = await db.user.findUnique({
            where: {
                email
            }
        })
        if(isExisting){
            return NextResponse.error({message: 'you already have an account'}, {status: 409})
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        await db.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        })

        return NextResponse.json({message: 'account created'}, {status: 201})
       
    }
    catch(error){
        return NextResponse.error(error)
    }

}