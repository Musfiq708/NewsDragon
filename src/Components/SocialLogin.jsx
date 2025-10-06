import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SocialLogin() {
  return (
    <div>
      <h1 className='text-[#403F3F] text-[20px] font-bold mb-5'>Login With </h1>
      <div className='*:w-full'>
        <button className="btn bg-white   text-blue-400 hover:bg-blue-100 text-base  shadow-none border border-blue-400 mb-3"><FaGoogle className='text-xl  ' /> Login with Google</button>
        <button className="btn  bg-white text-black   hover:bg-gray-200 text-base shadow-none border border-black"><FaGithub className='text-xl ' /> Login with Github</button>
      </div>
    </div>
  )
}
