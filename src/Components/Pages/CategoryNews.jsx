import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";



export default function CategoryNews() {
    const {data:news} = useLoaderData();
    
    
  return (
    <div>
       <h1 className='text-[#403F3F] text-[20px] font-semibold mb-5'>Dragon News Home ({news.length})</h1>
       <div>
        {
            news.map((singleNews)=>(<NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            )
        }
       </div>
    </div>
  )
}
