import { useParams } from 'react-router-dom';
import useFetchRestaurantMenu from '../utils/useFetchRestaurantMenu';
import { CDN_IMAGE_URL } from '../utils/constant';
import ShimmerResMenu from '../components/ShimmerResMenu';
import '../assets/styles/RestaurantMenu.css';
import ItemList from './ItemList';

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

    const allItemCards = [];

    const filterCards = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => {
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    filterCards.forEach(filterCard => {
        for (const c of filterCard?.card?.card?.itemCards) {
            allItemCards.push(c);
        }
    });

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

                <ItemList allItemCards={allItemCards} />
            </div>
        </div>
    );
}

export default RestaurantMenu;