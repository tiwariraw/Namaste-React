import '../assets/styles/About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='description'>
                <h3>Anytime, anywhere, anything</h3>
                <h3>We deliver</h3>
                <h3 className='orange-bg'>Tasty & Fresh Food</h3>
                <p>
                    <q>
                        Want a delicious meal, but no time?
                        <span className='orange'> Foodle</span> will deliver it hot and yummy.
                    </q>
                </p>
            </div>

            <div className='img-container'>
                <img
                    src='https://images.deliveryhero.io/image/fd-my/LH/tvd8-hero.jpg'
                    className='img'
                    alt='burger-img'
                />
            </div>
        </div>
    );
}

export default About;