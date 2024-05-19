import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import NavBar from './NavBar';
import SongItem from './SongItem';

function DisplayHome() {
  return (
    <>
      <NavBar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, i) => (
            <AlbumItem
              key={i}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, i) => (
            <SongItem
              key={i}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
