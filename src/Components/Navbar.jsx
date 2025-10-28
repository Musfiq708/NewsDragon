import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';
export default function Navbar() {

    const { user, Logout } = useContext(AuthContext);
   

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.displayName}</div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>

            </div>
            {
                user && user.email ?
                    <div className='flex items-center gap-3'>
                        
                        <h1>
{user && user.displayName}
                        </h1>
                        <button onClick={Logout} className='font-semibold text-white text-[20px] px-[43px] py-[10px] bg-[#403F3F] hover:bg-gray-500 '>Log Out</button>
                    </div>
                    :
                    <div className="flex items-center gap-3">
                        <img src={userIcon} alt="" />
                        <Link to="/auth/login" className='font-semibold text-white text-[20px] px-[43px] py-[10px] bg-[#403F3F] hover:bg-gray-500 '>Login</Link>
                    </div>
            }


        </div>
    )
}