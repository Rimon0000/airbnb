import { FaStar } from "react-icons/fa";

const SubCategory = ( {item} ) => {
    console.log(item)
    const {photo, location, rating, price, description, date} = item
    return (
        <div className="card card-compact mx-auto bg-base-100 px-5">
          <figure className="rounded-lg"><img src={photo} alt="Shoes" /></figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
              <h2 className="text-base font-semibold">Location: {location}</h2>
              </div>
              <div className="flex items-center gap-1">
                <p><FaStar/></p>
                <p>{rating}</p>
              </div>
            </div>
            <div className=''>
              <p className="text-base text-gray-500">{description}</p>
              <p className="text-base text-gray-500">{date}</p>
            <p className='py-1 text-base'><span className="font-semibold">${price}</span> night</p>
            </div>
          </div>
        </div>
    );
};

export default SubCategory;