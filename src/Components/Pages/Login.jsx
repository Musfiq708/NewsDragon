import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center p-0'>
            <div className="card bg-white w-[750px]
               shrink-0 shadow-2xl mt-[px]">
                <div className="card-body px-[98px]">
                    <fieldset className="fieldset">
                        <h2 className='mt-[30px] text-center text-[35px] font-semibold'>Login your account</h2>
                        <hr className='text-[#E7E7E7] my-[50px]' />
                        
                        <label className="label text-[20px] font-semibold text-black mb-[15px]">Email address</label>
                        <input type="email" name='email' className="input  w-full bg-[#F3F3F3] py-[21px] pl-[20px] mb-[24px]" placeholder="Enter your email address" />
                        <label className="label text-[20px] font-semibold text-black mb-[15px]">Password</label>
                        <input type="password" name='password' className="input  w-full bg-[#F3F3F3] py-[21px] pl-[20px] mb-[14px]" placeholder="Enter your password" />
                        <div><a className="link link-hover text-[15px] hover:text-red-400">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 hover:bg-gray-600 mb-[30px]">Login</button>
                        <p className='text-[16px] font-semibold text-[#706F6F] text-center'>Dont’t Have An Account ?<Link  className='text-[#F75B5F] hover:text-[#FF8C47] mb-[20px]' to="/auth/Register"> Register</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
        </div>
    )
}
