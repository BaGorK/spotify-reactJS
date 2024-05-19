import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className='h-screen bg-black '>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
}
