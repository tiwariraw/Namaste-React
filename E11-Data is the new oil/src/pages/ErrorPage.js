import '../assets/styles/ErrorPage.css';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError();
    // console.log(err);

    return (
        <div className='error-page-container'>
            <div className='img-container'>
                <img
                    src='https://cdn.dribbble.com/users/568818/screenshots/2621013/media/42090252fb4acb202298558e61df6485.jpg?resize=800x600&vertical=center'
                    className='img'
                    alt='error-image'
                />
            </div>

            <div className='error-description'>
                <h1>{err.status} - {err.statusText}</h1>
                <h3>{err.data}.</h3>
                <button className='home-btn'>Back Home</button>
            </div>
        </div>
    );
}

export default ErrorPage;