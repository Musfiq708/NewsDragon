import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from "../assets/user.png"
export default function Navbar() {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>

            </div>
            <div className="flex items-center gap-3">
                <img src={userIcon} alt="" />
                <button className='font-semibold text-white text-[20px] px-[43px] py-[10px] bg-[#403F3F] hover:bg-gray-500 '>Login</button>
            </div>
        </div>
    )
}
