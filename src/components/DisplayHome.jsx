import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import NavBar from './NavBar';

function DisplayHome() {
  return (
    <>
      <NavBar />
      <div className='my-5 font-bold text-2xl'>
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
    </>
  );
}

export default DisplayHome;
