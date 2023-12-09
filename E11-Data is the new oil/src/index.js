import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Body from './components/Body';
import Contact from './pages/Contact';
import RestaurantMenu from './pages/RestaurantMenu';
import ErrorPage from './pages/ErrorPage';
import Shimmer from './components/Shimmer';
import Cart from './components/Cart';

// chunking / code-splitting / dynamic bundling / lazy loading / on demand loading / dynamic import
/* we won't import Grocery component like 
    import Grocery from './components/Grocery'
*/

// lazy is a built in function given by React. It accepts a callback function.
// The below import is a function and it is different from a normal import
// const Grocery = lazy(() => import('./components/Grocery'));

/* import() returns a promise */
const Grocery = lazy(() => {
    const p1 = import('./components/Grocery');
    p1.then(val => console.log(val))
    console.log(p1);
    return p1;
});

// lazy loading for <About /> compoenent
const About = lazy(() => import('./pages/About'))

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
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
) 