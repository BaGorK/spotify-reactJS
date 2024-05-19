import { assets, songsData } from '../assets/assets';

function Player() {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img src={songsData[0].image} alt='image' className='w-12' />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 15)}. . .</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
