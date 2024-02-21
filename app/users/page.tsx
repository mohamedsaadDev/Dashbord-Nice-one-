"use client"
import React, { useState } from 'react'
import { useAppContext } from '../_context/index';
import {UserType} from "../../type/type"
import dynamic from 'next/dynamic'
const Pagination = dynamic(() => import('../_components/Pagination/page'))
const Users = () => {
        const { Users } = useAppContext();
        const [items,setitems]= useState<Array<any>>([])
    return (
        <>
            <div className='p-5 '>
                <div className='w-11/12'>
                    {items.map((us: UserType, index: number) => (
                        <div className='flex items-center ' key={index}>
                            <p className='w-1/2 my-2'>Name : {us.firstName} {us.LastName}</p>
                            <p className='w-1/2 my-2'>Email : {us.email}</p>
                            <p className='w-1/2 my-2'>Time : {us.registrationTime}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Pagination items={Users} setitemsPage={setitems} numberofitems={10}/>
        </>
    );
};
export default React.memo(Users)