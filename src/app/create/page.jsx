"use client"
import Input from '@/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { schema } from './schema';
import Select from '@/ui/Select';
import { optionLocations, optionTypes } from '@/data/data';
import Button from '@/ui/Button';
import { postImages } from './api';
import { useMutation } from 'react-query';

const Create = () => {
    const CLOUD_NAME = process.env.CLOUD_NAME
    const UPLOAD_PRESET = process.env.UPLOAD_PRESET

    const {mutateAsync, isLoading} = useMutation({
        mutationFn: (data, imageUrls) => createNewListing(data, imageUrls),
        mutationKey:["createListing"]
    })



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name:"",
            desc:"",
            beds:5,
            hasFreeWifi:false,
            type: "luxury",
            location:"berlin",
            pricePerNight: 100,
        }
    })

    useEffect(() => {
        if(Object.keys((errors)).length > 0){
            Object.keys((errors)).map((error) => {
                toast.error(errors[keys].message)
            })
        }
    }, [errors])

    const uploadImages = async (images, idx) => {
        if(!images) return

        const toastId = toast.loading(`image ${idx + 1} is being uploaded`)
        const formDate = new FormData()
        formDate.append("file", images)
        formDate.append("upload_preset", UPLOAD_PRESET)

        try {
            const imageUrl = await postImages(CLOUD_NAME, formDate)
            toast.success(`Successfully uploaded image ${idx + 1}`)
            toast.dismiss(toastId)

            return imageUrl
        }
        catch(err) {
            console.error(err)
        }
        
    }

    const onSubmit = async (data) => {
        if(!images?.length) return toast.error("Please upload at least one image")
            
        const imageUrls = await Promise.all(data.images.map((image, idx) => {
            const imageUrl = uploadImages(image, idx)
        }))
    }
    return (
        <div className='min-h-[900px] w-full flex justify-center items-center'>
            <div className='h-2/5 w-1/5 rounded-xl border border-slate-300'>
                <div className='p-3 w-full border-b border-slate-300'>
                    <h3 className='text-center font-semibold text-2xl'>Create a Listing</h3>
                </div>    
                <form action="" className='w-full px-4 py-6 flex flex-col items-center gap-8 border border-slate-400'>
                    <Input 
                        className={'w-full text-slate-400 outline-none p-2 border border-slate-400'} 
                        type={'text'} 
                        register={register("name")}
                        placeholder={"Name"}
                    />
                    <Input 
                        className={'w-full text-slate-700 outline-none p-2 border border-slate-400'} 
                        type={'text'} 
                        register={register("desc")}
                        placeholder={"Description"}
                    />
                    <Select
                        data={optionLocations}
                        register={register("location")}
                        className={"bg-slate-200 w-full outline-none ml-2 p-2 border border-slate-400"}
                    />
                     <Select
                        data={optionTypes}
                        register={register("location")}
                        className={"bg-slate-200 w-full outline-none ml-2 p-2 border border-slate-400"}
                    />
                     <Input 
                        className={'w-full text-slate-300 outline-none p-2 border border-slate-400'} 
                        type={'number'} 
                        register={register("pricePerNight", {valueAsNumber: true})}
                        step={0.01}
                        placeholder={"$249.00"}
                    />
                     <Input 
                        className={'w-full text-slate-300 outline-none p-2 border border-slate-400'} 
                        type={'number'} 
                        register={register("pricePerNight", {valueAsNumber: true})}
                        step={1}
                        
                    />
                    <div className='text-slate-400 ml-4 w-full flex gap-4 flex justify-center'>
                        <label htmlFor="hasFreeWifi">Free Wifi</label>
                        <Input
                            register={register("hasFreeWifi")}
                            type={"checkbox"}
                            id="hasFreeWifi"
                            className="w-5 h-5"
                        />
                    </div>
                    <label htmlFor="images" className='text-slate-400 w-2/3 ml-4'>Upload Images</label>
                    <Input
                        onChnage={() => {}}
                        type={"file"}
                        className={"text-slate-400"}
                        style={{display:"none"}}
                        id="images"
                    />
                    <Button
                        disabled={false}
                        label={"Create"}
                        className={"w-2/3 bg-blue-500 text-white px-4 py-2 disabled:bg-blue-700"}
                    />
                </form>
            </div>            
        </div>
    );
};

export default Create;