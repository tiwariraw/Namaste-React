import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ allItemCards }) => {

    const dispatch = useDispatch();

    // handleAddItem (onClick on Add button)
    const handleAddItem = (itemCard) => {
        //dispatch an action
        dispatch(addItem(itemCard));
        // console.log(itemCard);
    }

    return (
        <div className="item-list">
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
                                <button className='item-add-btn' onClick={() => handleAddItem(itemCard)}>Add+</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemList;