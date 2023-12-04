import './../assets/styles/RestaurantCard.css';
import { CDN_IMAGE_URL } from '../utils/constant';

const RestaurantCard = ({ restaurantData }) => {
    // const data = restaurantData?.info;
    const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, areaName } = restaurantData?.info;

    return (
        <div className="restaurant-card">
            <img src={`${CDN_IMAGE_URL}${cloudinaryImageId}`} className='restaurant-img' alt='restaurant-img' />
            <h3 className='restaurant-name'>{name}</h3>
            <div className='rating-price'>
                <h4><i className="fas fa-star" style={{ color: "#32de84" }}></i> {avgRating}</h4>
                <h4>{costForTwo}</h4>
            </div>
            <h4 className='cuisine'>{cuisines.join(', ')}</h4>
            <h4 className='address'>{areaName}</h4>
        </div>
    )
}



export default RestaurantCard; 