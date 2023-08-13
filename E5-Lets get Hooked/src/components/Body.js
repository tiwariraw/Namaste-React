import RestaurantCard from "./RestaurantCard";
import '../assets/styles/Body.css';
import { restaurantsList } from '../utils.js/mockData';
import { useState } from "react";

const Body = () => {

    const [restaurantsArray, setRestaurantsArray] = useState(restaurantsList);

    const handleTopRatedRestaurants = () => {
        const filteredRestuaurants = restaurantsArray.filter(function (restaurant) {
            return restaurant.info.avgRating >= 4;
        })

        setRestaurantsArray(filteredRestuaurants);
    }

    return (
        <div className='body'>
            {/* <div className='search'>Search</div> */}

            {/* top rated restaurants (having >= 4 avgRating) */}
            <div className="filter">
                <button className="filter-btn" onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>

            <div className='restaurant-cards-container'>
                {
                    restaurantsArray.map(restaurant => (<RestaurantCard restaurantData={restaurant} key={restaurant.info.id} />))
                }
            </div>
        </div>
    )
}

export default Body;

