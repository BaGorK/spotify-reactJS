import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { albumsData, assets } from '../assets/assets';

function DisplayAlbum() {
  const { id } = useParams();

  const albumData = albumsData[id];

  return (
    <>
      <NavBar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img src={albumData.image} alt='' className='w-48 rounded' />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1'>
            <img
              src={assets.spotify_logo}
              alt=''
              className='inline-block w-5 mr-1'
            />
            <b>Spotify</b> ~ 1,323,154 likes ~ <b>50 songs ~ </b> about 2 hr 30
            min
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p>
          <b className='mr-4'>#</b> Title
        </p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img src={assets.clock_icon} alt='' className='m-auto w-4' />
      </div>
    </>
  );
}

export default DisplayAlbum;
