import { useParams } from 'react-router-dom';
import useFetchRestaurantMenu from '../utils.js/useFetchRestaurantMenu';
import { CDN_IMAGE_URL } from '../utils.js/constant';
import ShimmerResMenu from '../components/ShimmerResMenu';
import '../assets/styles/RestaurantMenu.css';

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    // useFetchRestaurantMenu hook fetched the data from Swiggy Restaurant Menu api for the passed resId.
    const { resInfo, error } = useFetchRestaurantMenu(resId);

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (resInfo === null) {
        return <ShimmerResMenu />;
    }

    const { name, cloudinaryImageId, avgRating, costForTwoMessage, cuisines, areaName, sla } = resInfo?.data?.cards[0]?.card?.card?.info || {};

    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    // console.log(itemCards); ---> an array of menu items object

    let cards = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    cards = cards?.slice(2, 11);

    const allItemCards = [];

    if (Array.isArray(cards)) {
        for (const card of cards) {
            const arrayOfObj = card?.card?.card?.itemCards;
            if (Array.isArray(arrayOfObj)) {
                for (const obj of arrayOfObj) {
                    allItemCards.push(obj);
                }
            }
        }
    }

    return (
        <div className='res-menu-container'>
            <div className='res-summary'>
                <div className='res-img-container'>
                    <img
                        src={`${CDN_IMAGE_URL}${cloudinaryImageId}`}
                        className='res-img'
                        alt='res-image'
                    />
                </div>

                <div className='res-menu-details'>
                    <h1>{name}</h1>
                    <h3 className='area-name'>{areaName}</h3>
                    <h4 className='cuisines-name'>{cuisines?.join(', ')}</h4>
                    <div className='rating-distance-price'>
                        <h4 style={{ color: "#32de84" }}><i className="fas fa-star" style={{ color: "#32de84" }}></i> {avgRating}</h4>
                        <h4>{sla?.slaString}</h4>
                        <h4>{costForTwoMessage}</h4>
                    </div>

                </div>
            </div>

            <div className='res-menu-content'>
                <div className='menu-items-title'>
                    <h3>Recommended</h3>
                    <h4 className='total-items'>{allItemCards?.length}</h4>
                </div>

                {
                    allItemCards?.map((itemCard) => (

                        <div className='res-menu-content' key={itemCard?.card?.info?.id}>
                            <div className='menu-items-list'>
                                <div className='menu-items-list-description'>
                                    <h2 className='item-name'>{itemCard?.card?.info?.name}</h2>
                                    <h3 className='item-price'>₹{Math.round(itemCard?.card?.info?.price / 100) || Math.round(itemCard?.card?.info?.defaultPrice / 100)}</h3>
                                    <p className='item-description'>{itemCard?.card?.info?.description}</p>
                                </div>

                                <div className='menu-items-list-img-btn'>
                                    <img
                                        src={itemCard?.card?.info?.imageId === undefined ? 'https://www.vegan-cruises.com//assets/images/not-available.jpg' : `https://media-assets.swiggy.com/swiggy/image/upload/${itemCard?.card?.info?.imageId}`}
                                        className='menu-item-list-img'
                                        alt='menu item'
                                    />
                                    <button className='item-add-btn'>Add+</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RestaurantMenu;