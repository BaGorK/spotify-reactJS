import { assets } from '../assets/assets';
import { usePlayerContext } from '../context/PlayerContext';

function Player() {
  const {
    seekBg,
    seekBar,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = usePlayerContext();

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img src={track.image} alt='image' className='w-12' />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 15)}. . .</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img
            className='w-4 cursor-pointer'
            src={assets.shuffle_icon}
            alt='shuffle icon'
          />
          <img
            onClick={() => previous()}
            className='w-4 cursor-pointer'
            src={assets.prev_icon}
            alt='shuffle icon'
          />
          {playStatus ? (
            <img
              onClick={pause}
              className='w-4 cursor-pointer'
              src={assets.pause_icon}
              alt='shuffle icon'
            />
          ) : (
            <img
              onClick={play}
              className='w-4 cursor-pointer'
              src={assets.play_icon}
              alt='shuffle icon'
            />
          )}
          <img
            onClick={() => next()}
            className='w-4 cursor-pointer'
            src={assets.next_icon}
            alt='shuffle icon'
          />
          <img
            className='w-4 cursor-pointer'
            src={assets.loop_icon}
            alt='shuffle icon'
          />
        </div>
        <div className='flex items-center gap-5'>
          <p>{`${time.currentTime.minute}:${time.currentTime.second}`}</p>
          <div
            ref={seekBg}
            onClick={(e) => seekSong(e)}
            className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'
          >
            <hr
              ref={seekBar}
              className='h-1 border-none w-0 bg-green-800 rounded-full'
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img src={assets.play_icon} alt='play_icon' className='w-4' />
        <img src={assets.mic_icon} alt='mic_icon' className='w-4' />
        <img src={assets.queue_icon} alt='queue_icon' className='w-4' />
        <img src={assets.speaker_icon} alt='speaker_icon' className='w-4' />
        <img src={assets.volume_icon} alt='volume_icon' className='w-4' />
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img src={assets.mini_player_icon} alt='mini_player' className='w-4' />
        <img src={assets.zoom_icon} alt='zoom_icon' className='w-4' />
      </div>
    </div>
  );
}

export default Player;
