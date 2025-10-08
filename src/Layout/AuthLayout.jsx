import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



export default function AuthLayout() {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="w-10/12 mx-auto pt-[51px] ">
        
        <header>
            <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
