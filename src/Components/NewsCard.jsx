import { CiBookmark } from 'react-icons/ci';
import { IoEye, IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function NewsCard({ news }) {
    const { name, published_date, img } = news.author;
    const { title, image_url, details, rating, total_view } = news;
    return (
        <div className='mb-[30px]'>
            <div className='flex items-center py-4 bg-[#F3F3F3] rounded-t-[8px] px-[20px] '>
                <img className='h-[40px] w-[40px]  rounded-[40px] mr-[15px] ' src={img} alt="" />
                <div className='flex w-full justify-between items-center'>
                    <div>
                        {
                            name ? <h1 className='text-base font-semibold'>{name}</h1> : <h1 className='text-base font-semibold'>Anonymous</h1>
                        }

                        {
                            published_date ? <p className='text-[14px] font-normal text-[#706F6F]'>{published_date}</p> : <p className='text-[14px] font-normal text-[#706F6F]'>Publish Date Unknown</p>
                        }

                    </div>
                    <div className='flex gap-[10px]'>
                        <button className='text-2xl hover:text-blue-500'><CiBookmark /></button>
                        <button className='text-2xl hover:text-blue-500'><IoShareSocialOutline /></button>
                    </div>
                </div>
            </div>
            <div className='px-[20px] pt-[14px] border border-[#E7E7E7] rounded-b-[5px]'>
                <h1 className='text-xl font-bold mb-[20px]'>{title}</h1> 
                <img className='mb-[32px]' src={image_url} alt="" />
                <p className='line-clamp-4 font-normal text-[16px] text-[#706F6F]'>{details}</p>
                <Link to={`/news/${news._id}`} className='mt-2 text-[16px] font-semibold text-[#F75B5F] hover:text-orange-300 mb-5 '>Read More</Link>
                <div className='h-[1px] bg-[#E7E7E7] mb-5'></div>
                <div className='flex mb-5 justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />

                        </div>
                        <h1 className='text-base font-medium text-[#706F6F]'>{rating.number}</h1>
                    </div>
                    <div className='flex gap-[10px] items-center'>
                        <IoEye className='text-3xl text-[#706F6F] ' />
                        <h1 className='text-base font-medium text-[#706F6F]'>{total_view}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
