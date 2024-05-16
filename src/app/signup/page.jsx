"use client"
import Image from 'next/image';
import React from 'react';
import Dubi from '../../../public/assets/dubai.jpg'
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import { useForm } from 'react-hook-form';
import { schema } from './schema';
import AXIOS_API from '@/utils/axiosAPI';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })
    const router = useRouter()
    const onSubmit = async (data) => {

        if(Object.keys(errors)?.length> 0) {
            toast.error("Invalid input");

            return
        }

        try{
            
            await AXIOS_API.post('/register', data) 

            toast.success("Registered successfully")

             setTimeout(() => {
                router.push('/login')
            },2500)
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className='relative h-screen w-full'>
            <div className='relative h-full w-full'>
                <Image src={Dubi} alt="hero image" className='h-full w-full object-cover brightness-50 '></Image>
                <div className='h-[450px] w-[400px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl'>
                    <h2 className='text-center text-2xl pt-6 pb-3 font-semibold text-slate-800 border-b border-slate-500'>
                        Create an account
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-12 flex flex-col w-full gap-8 mx-auto text-center px-12'>
                        <Input className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
                            type={"text"}
                            placeholder={"Name"}
                            register={register("username")}
                        ></Input>
                        <Input className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
                            type={"email"}
                            placeholder={"Email"}
                            register={register("email")}
                        ></Input>
                        <Input className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
                            type={"password"}
                            placeholder={"*********"}
                            register={register("password")}
                        ></Input>
                        <Button
                            className="w-3/4 mt-12 mx-auto cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
                            label="Submit"

                        ></Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;