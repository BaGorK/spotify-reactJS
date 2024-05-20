import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div
          onClick={() => navigate('/')}
          className='flex items-center gap-3 pl-8 cursor-pointer'
        >
          <img className='w-6' src={assets.home_icon} alt='home icon' />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt='home icon' />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212]  h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src={assets.stack_icon} alt='stack icon' className='' />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img src={assets.arrow_icon} alt='arrow icon' className='w-5' />
            <img src={assets.plus_icon} alt='plus icon' className='w-5' />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2 pl-4'>
          <h1 className='capitalize'>create your first playlist</h1>
          <p className='capitalize font-light'>
            it&apos;s easy we will help you
          </p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Create Playlist
          </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2 pl-4 mt-4'>
          <h1 className='capitalize'>
            let&apos;s find some podcasts to follow
          </h1>
          <p className='capitalize font-light'>
            We&apos;ll keep you update on new episodes
          </p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
