import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

export default function LatestNews() {
  return (
    <div className='flex items-center gap-[20px] '>
      <p className='text-white bg-[#D72050] py-[9px] px-[24px] text-[20px] font-medium hover:bg-red-400'>Latest</p>
      <Marquee pauseOnHover={true} className='space-x-5'>
        <Link className='text-[18px] text-[#403F3F] font-semibold' to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae fugiat in commodi soluta eveniet. Reprehenderit excepturi iure quae reiciendis!</Link>
        <Link className='text-[18px] text-[#403F3F] font-semibold' to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae fugiat in commodi soluta eveniet. Reprehenderit excepturi iure quae reiciendis!</Link>
        <Link className='text-[18px] text-[#403F3F] font-semibold' to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae fugiat in commodi soluta eveniet. Reprehenderit excepturi iure quae reiciendis!</Link>
        </Marquee>
    </div>
  )
}
