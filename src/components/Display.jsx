import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { useEffect, useRef } from 'react';
import { albumsData } from '../assets/assets';

function Display() {
  const displayRef = useRef();
  const { pathname } = useLocation();

  const isAlbum = pathname.includes('album');
  const albumId = isAlbum ? pathname.split('/').at(-1) : '';

  const bgColor = albumsData[Number(albumId)]?.bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  }, [bgColor, isAlbum]);

  return (
    <div
      ref={displayRef}
      className='w-[100%] lg:ml-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%]'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
