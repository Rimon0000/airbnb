

const SubCategory = ( {item} ) => {
    console.log(item)
    const {photo, location, rating, price} = item
    return (
        <div className="card card-compact mx-auto w-96 bg-base-100 shadow-xl px-5">
          <figure><img src={photo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Location: {location}</h2>
            <div className='font-semibold'>
            <p className='py-1'>price: {price}</p>
            <p className='py-1 pb-2'>Rating: { rating}</p>
            </div>
          </div>
        </div>
    );
};

export default SubCategory;