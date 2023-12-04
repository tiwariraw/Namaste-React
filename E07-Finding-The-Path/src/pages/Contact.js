import '../assets/styles/Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='img-container'>
                <img
                    src='https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png'
                    className='img'
                    alt='form-image'
                />
            </div>

            <div className='form-container'>
                <form className='form'>
                    <h1>Contact Us</h1>
                    <input type='text' placeholder='Name' name='name' className='input' required />
                    <input type='email' placeholder='Email' name='email' className='input' required />
                    <textarea name='feedback' cols="30" rows="7" placeholder='Type your message here...' required></textarea>
                    <div className='submit-btn-container'>
                        <input type='submit' value="Submit" className='submit-btn' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
