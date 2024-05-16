"use client"
import Button from '@/ui/Button';
import Dubi from '../../../public/assets/paris.jpg'
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Input from '@/ui/Input';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Schema } from './schema';
import { object } from 'zod';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Login = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
         handleSubmit,
          formState: {errors}
        } = useForm({
            resolver: zodResolver(Schema),
        });
    const onSubmit = async (data) => {
        if(Object.keys(errors)?.length> 0) {
            toast.error("Invalid input");

            return
        }

        setIsLoading(true)
        try{
            const res = await signIn("credentials", {
                ...data,
                redirect: false
            })
            if(res?.error == null){
                setIsLoading(false);
                toast.success("Logged in successfully");
                router.push("/");
            } 
            else {
                toast.error("Email or Password is invalid");
            }
        }
        catch(err) {
            toast.error(error);
        }

        setIsLoading(false)
    }

    return (
       
        <div className='relative h-screen w-full'>
            <div className='relative h-full w-full'>
                <Image src={Dubi} alt="hero image" className='h-full w-full object-cover brightness-50 '></Image>
                <div className='h-[450px] w-[400px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl'>
                    <h2 className='text-center text-2xl pt-6 pb-3 font-semibold text-slate-800 border-b border-slate-500'>
                        Log into your Account
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-12 flex flex-col w-full gap-8 mx-auto text-center px-12'>
                        
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
                            disabled={isLoading}
                            className="w-3/4 mt-12 mx-auto cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
                            label="Submit"

                        ></Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;