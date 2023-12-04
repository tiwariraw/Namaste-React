import './RestaurantCard.css';

const RestaurantCard = ({ restaurantData }) => {
    const data = restaurantData?.info;
    console.log(data);
    return (
        <div className="restaurant-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`} className='restaurant-img' alt='restaurant-img' />
            <h3 className='restaurant-name'>{data.name}</h3>
            <div className='rating-price'>
                <h4><i className="fas fa-star" style={{ color: "#32de84" }}></i> {data.avgRating}</h4>
                <h4>{data.costForTwo}</h4>
            </div>
            <h4 className='cuisine'>{data.cuisines.join(', ')}</h4>
            <h4 className='address'>{data.areaName}</h4>
        </div>
    )
}

export default RestaurantCard;