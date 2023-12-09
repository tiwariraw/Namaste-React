import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/Cart.css';

import { clearCart, removeItem } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Cart = () => {
    // Cart component subscribing to the store using a selector
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    // handleClearCart
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    // handleRemoveItem
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    // refs
    const clearCartElement = useRef();
    const backToShopBtn = useRef();
    const continueToCheckoutBtn = useRef();


    useEffect(() => {
        if (cartItems.length === 0) {
            clearCartElement.current.style.display = "none";
            backToShopBtn.current.style.display = "none";
            continueToCheckoutBtn.current.style.display = "none";
        }
    }, [cartItems.length]);

    return (
        <div className="cart-container">
            <div className='top'>
                <h2 className='cart-title'>Your cart</h2>
                <button className='clear-cart-btn' onClick={handleClearCart} ref={clearCartElement}>Clear Cart</button>
            </div>
            {
                cartItems.length == 0
                    ?
                    <div className='empty-cart'>
                        <img src='https://images.pexels.com/photos/296916/pexels-photo-296916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='food-img' />
                        <h2>Your cart is empty</h2>
                        <p>You can go to home page to view more restaurants</p>
                        <Link to="/" className='home'>See Restaurants near you</Link>
                    </div>
                    :
                    cartItems?.map((item) => (

                        <div className='res-menu-content' key={item?.card?.info?.id}>
                            <div className='menu-items-list'>
                                <div className='menu-items-list-description'>
                                    <h2 className='item-name'>{item?.card?.info?.name}</h2>
                                    <h3 className='item-price'>₹{Math.round(item?.card?.info?.price / 100) || Math.round(item?.card?.info?.defaultPrice / 100)}</h3>
                                    <p className='item-description'>{item?.card?.info?.description}</p>
                                </div>

                                <div className='menu-items-list-img-btn'>
                                    <img
                                        src={item?.card?.info?.imageId === undefined ? 'https://www.vegan-cruises.com//assets/images/not-available.jpg' : `https://media-assets.swiggy.com/swiggy/image/upload/${item?.card?.info?.imageId}`}
                                        className='menu-item-list-img'
                                        alt='menu item'
                                    />
                                    <button className='item-add-btn' onClick={() => handleRemoveItem(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
            }

            <div className='bottom'>
                <Link to="/" className='home' ref={backToShopBtn}>Back to shop</Link>
                <button ref={continueToCheckoutBtn}>Continue to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;