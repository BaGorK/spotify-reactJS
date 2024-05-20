import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { usePlayerContext } from './context/PlayerContext';

export default function App() {
  const { audioRef } = usePlayerContext();

  return (
    <div className='h-screen bg-black '>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} preload='auto'></audio>
    </div>
  );
}
