import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function FindUs() {
    return (
        <div>
            <h1 className='text-[#403F3F] text-[20px] font-semibold mb-5 mt-[35px]'>Find Us On </h1>
            <div className="join join-vertical flex *:bg-white  *:border-[#E7E7E7] *:shadow-none *:text-[16px] *:font-medium *:text-[#706F6F]">
                <button className="btn join-item hover:bg-gray-200 justify-start py-[23px] pl-[17px] hover:text-black hover:font-semibold"><FaFacebook className="text-xl text-blue-600 mr-[5px]" /> Facebook</button>
                <button className="btn join-item hover:bg-gray-200 justify-start py-[23px] pl-[17px] hover:text-black hover:font-semibold"><FaTwitter className="text-xl text-blue-600 mr-[5px]" /> Twitter</button>
                <button className="btn join-item hover:bg-gray-200 justify-start py-[23px] pl-[17px] hover:text-black hover:font-semibold"><FaInstagram className="text-xl text-pink-600 mr-[5px]" /> Instagram</button>
            </div>
        </div>
    )
}
