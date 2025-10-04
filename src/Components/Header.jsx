import React from 'react'
import logo from "../assets/logo.png"
import plugin from './../../node_modules/daisyui/index';
import moment from 'moment';

export default function Header() {
    return (
        <div className='flex flex-col justify-center items-center pt-[50px]'>
            <div>
                <img className='h-[60px] w-[470px] ' src={logo} alt="" />
            </div>
            <h2 className='text-[#706F6F] text-[18px] font-normal my-[15px]'>Journalism Without Fear or Favour</h2>
            <p  className='text-[#706F6F] font-medium text-[20px]'>{moment().format('dddd , MMMM Do , YYYY')}</p>
        </div>
    )
}
