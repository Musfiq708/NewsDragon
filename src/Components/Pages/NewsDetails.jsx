import React from 'react'
import Header from '../Header'
import RightNavbar from '../Layout-Component/RightNavbar'
import { Link, useLoaderData } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

export default function NewsDetails() {
    const data = useLoaderData();
    const datam = data.data[0];
    console.log(datam.category_id)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12 gap-6'>
                <section className='col-span-9'>
                    <h1 className='text-[20px] font-semibold text-[#403F3F] mb-5'>Dragon News</h1>
                    <div className='p-[30px] border border-[#E7E7E7] rounded-[5px]'>
                        <img className='mb-5' src={datam.image_url} alt="" />
                        <h1 className='text-xl font-bold mb-2 mr-[115px]'>{datam.title}</h1> 
                        <p className=' font-normal text-[16px] text-[#706F6F] mb-8'>{datam.details}</p>
                        <Link to={`/category/${datam.category_id}`} className='flex items-center gap-[5px] py-[12px] px-6 bg-[#D72050] hover:bg-red-300 text-white w-[320px] text-[20px] font-[500] hover:text-black'><FaArrowLeft />All news in this category</Link>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    )
}
