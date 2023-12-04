// We are creating a custom hook to fetch data from Swiggy Restaurant Menu api for the passed resId.

import { useState, useEffect } from "react";

const useFetchRestaurantMenu = (resId) => {
    const MENU_API = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.120194&lng=77.619249&restaurantId=' + resId;

    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    // We want to fetch the data only once, therefore [] as dependency array
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API);
            if (!data.ok) {
                throw new Error(`Failed to fetch data (status code: ${data.status})`)
            }
            const json = await data.json();
            setResInfo(json);
            console.log(json);

        } catch (err) {
            setError(err);
        }
    }

    return { resInfo, error };
}

export default useFetchRestaurantMenu;