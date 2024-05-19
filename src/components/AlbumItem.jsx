/* eslint-disable react/prop-types */
function AlbumItem({ image, name, desc, id }) {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer transition duration-300 hover:bg-[#ffffff26]'>
      <img src={image} alt={image} className='rounded' />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
}

export default AlbumItem;
