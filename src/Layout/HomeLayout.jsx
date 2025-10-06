import React from 'react'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'
import Navbar from '../Components/Navbar'
import LeftNavbar from '../Components/Layout-Component/LeftNavbar'
import RightNavbar from '../Components/Layout-Component/RightNavbar'

import { Outlet } from 'react-router-dom'


export default function HomeLayout() {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto p-4
                 bg-[#F3F3F3] mt-[30px]' >
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-10/12 mx-auto pt-[34px]'><Navbar></Navbar></nav>
            <main className='w-10/12 mx-auto grid md:grid-cols-12 mt-[80px] gap-6'>
                <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    )
}
