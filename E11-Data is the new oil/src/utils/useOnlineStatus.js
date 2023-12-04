// A custom hook which tells whether the user is online or offline i.e their internet connection is working or not.

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // check if online -> using 'online' and 'offline' event
    // navigator.onLine is a boolean. It return true if you are online.

    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        // console.log('event listener called');

        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });
    }, []);

    // onlineStatus is a boolean
    return onlineStatus;
}

export default useOnlineStatus;