import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Body from './components/Body';
import About from './pages/About';
import Contact from './pages/Contact';
import RestaurantMenu from './pages/RestaurantMenu';
import ErrorPage from './pages/ErrorPage';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
) 