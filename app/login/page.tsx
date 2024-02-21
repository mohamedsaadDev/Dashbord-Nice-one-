'use client'
import React, { RefObject,useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import * as jsCookie from 'js-cookie';
const Login = () => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '', 
        password: '',
        emailError: '',
        passwordError: ''})
        const validateForm = () => {
            if (formData.email.trim() === '') {
                setFormData({ ...formData, emailError:"email is required" })
                return false;
            }
            if(formData.email.length > 5) {
                setFormData({ ...formData, emailError:'' })
                console.log('erorr ')
            }
            if (formData.password.trim() === '') {
                setFormData({ ...formData, passwordError:"password is required" })
                return false
            }
            
            if (formData.password.length < 7) {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    passwordError: 'password must be at least 7 characters long',
                }));
                return false;
            }
            return true;
        };
    async function handelLogin(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(validateForm()){
            try{
                const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/login`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email:formData.email, password:formData.password }),
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                // set the token in cookie
                const data = await res.json();
                const tokenhash = btoa(data.data.token)
                jsCookie.default.set('cookie', tokenhash,{ expires: 1 })
                jsCookie.default.set('role', data.data.role,{ expires: 1 })
                jsCookie.default.set('USER',"true",{ expires: 1 })
                router.push('/')
            }catch(err){
                console.log(err)
                setIsVisible(true);
                const timeout = setTimeout(() => {
                    setIsVisible(false);
                }, 4000);
            }
        }
    } 
    return (
        <>
        <div className='w-full h-full fixed top-0 left-0 bottom-0 right-0 bg-white'>
            <div className='flex items-center w-full h-full my-auto '>
                <div className='w-1/2 border-r-2  '>
                    <Image className='w-full h-5/6 ' src='/loginveiw.svg' alt="Picture of the author" width={100} height={100} priority/>
                </div>
                <div className='w-1/2'>
                    <div className='w-3/4 mx-auto'>
                        <Image className='mx-auto' src='/logo.png' alt="Picture of the author" width={100} height={100} priority/>
                        <h6 className='text-center font-extrabold'>Nice One</h6>
                        <form method="POST" className='w-full' onSubmit={handelLogin}>
                        <div className='w-full'>
                            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email</label>
                            <input className="block w-full rounded-md bg-slate-100 p-3"
                            type="email" name="email" id="email"
                            placeholder='    Enter your email'
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                            {
                                formData.emailError.length > 0 && 
                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" >
                                {formData.emailError}
                            </div>
                            }
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">Password</label>
                            <input className="block w-full rounded-md bg-slate-100 p-3 " 
                            type="password" name="password" id="password"
                            placeholder='    Enter your password'
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
                            {
                                formData.passwordError.length > 0 && 
                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" >
                                {formData.passwordError}
                                </div>
                            }
                        </div>
                        <button className='btn-login' type="submit">Login</button>
                        </form>
                        {
                            isVisible&&
                            <div className={`message-error ${isVisible?'right-2':'right-[-300px]'} absolute top-10 flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800`}>
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <div className="ms-3 text-sm font-medium">
                                    Invalid email address or password
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default React.memo(Login)
