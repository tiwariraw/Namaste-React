import Header from './components/Header';
import Footer from './components/Footer';
import '../index.css'

import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;  