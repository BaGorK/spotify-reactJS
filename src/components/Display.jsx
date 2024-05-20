import { Route, Routes } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';

function Display() {
  return (
    <div className='w-[100%] lg:ml-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%]'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
