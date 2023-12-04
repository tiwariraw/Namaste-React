import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import { RESTAURANT_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import '../assets/styles/Body.css';
// import { restaurantsList } from '../utils/mockData';

const Body = () => {

    // console.log('Body Rendered');  -> to check how many times this Body component is rendered

    const [restaurantsArray, setRestaurantsArray] = useState([]);
    const [filteredRestaurantsArray, setFilteredRestaurantsArray] = useState([]);  // for implementing searc functionality

    // console.log(restaurantsArray);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_API);
            if (!data.ok) {
                console.log('failed to fetch the data');
            }
            const json = await data.json();
            console.log(json);

            // optional chaining
            const arr1 = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            console.log(arr1);
            setRestaurantsArray(arr1);
            setFilteredRestaurantsArray(arr1);
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleTopRatedRestaurants = () => {
        const filteredRestaurants = restaurantsArray?.filter(function (restaurant) {
            return restaurant.info.avgRating >= 4;
        })

        setFilteredRestaurantsArray(filteredRestaurants);
    }

    const handleChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleClickSearch = () => {
        // filter the restaurant card and update the UI

        // we are filtering on the original restaurantsArray (and not the filteredRestaurantsArray) which contains all the restaurants fetched by the api
        const searchResult = restaurantsArray?.filter((restaurant) => {
            if (restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())) {
                return restaurant;
            }
        });

        setFilteredRestaurantsArray(searchResult);
    }

    // online status (we are calling useOnlineStatus hook)
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1 className="online-status">Looks like you are offline!! Please check your internet connection.</h1>;
    }

    // till we receive data from swiggy API, show fake cards (Shimmer UI) in your UI
    // conditional rendering
    return restaurantsArray?.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter">
                <div className='search-container'>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for restaurants and food"
                        value={searchText}
                        onChange={handleChange}
                        onKeyDown={(event) => {
                            // console.log(event);
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                document.querySelector('.search-btn').click();
                            }
                        }}
                    />
                    <button className="search-btn" onClick={handleClickSearch}>Search</button>
                </div>

                {/* top rated restaurants (having >= 4 avgRating) */}
                <button className="filter-btn" onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>

            <div className='restaurant-cards-container'>
                {
                    filteredRestaurantsArray?.length === 0
                        ?
                        <div className="no-restaurant-found">Sorry, we couldn't find any results for "<b>{searchText}</b>"</div>
                        :
                        filteredRestaurantsArray?.map(restaurant => (
                            <Link to={'/restaurants/' + restaurant?.info?.id} key={restaurant?.info?.id} className="link-component">
                                <RestaurantCard restaurantData={restaurant} />
                            </Link>))
                }
            </div>
        </div>
    )
}

export default Body;

