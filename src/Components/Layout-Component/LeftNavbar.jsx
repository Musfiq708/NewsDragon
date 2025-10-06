import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function LeftNavbar() {
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>setCategories(data.data.news_category))
  },[]);
  
  return (
    <div>
      <h1 className='text-[#403F3F] text-[20px] font-semibold mb-5'>All Caterogy </h1>
      <div className='flex flex-col '>
        {
          categories.map(category =><NavLink 
            to={`/category/${category.category_id}`}
            className='py-[17px] hover:text-black hover:bg-[#E7E7E7] rounded-[5px] text-left pl-[50px] text-[#9F9F9F] font-medium hover:font-semibold ' key={category.category_id}>{category.category_name}</NavLink>)
        }
      </div>
    </div>
  )
}
