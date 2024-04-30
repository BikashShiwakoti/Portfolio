import './ContactMe.css'
function ContactMe() {
    return (
        <div  id="contact" className="contact">
                <h3>Contact Me</h3>
            <div class="container">
                <div className='left'>
                    <h2>Let's Talk</h2>
                    <p class="text-center">Feel free to reach out to me with any questions or inquiries.
                        I am currently free to work.</p>
                    <p class="text-center">
                        Email: <a href="mailto:bikash.shiwakoti@mohawkcollege.ca" >bikash.shiwakoti@mohawkcollege.ca
                        </a><br />
                        Phone: +1 437-799-2057<br />
                        Location: Hamilton, ON
                    </p>
                </div>
                <div className='right'>
                    <form className='contactForm'>
                        <label htmlFor=''>Your Name</label>
                        <input type='text' placeholder='Enter your name' name='name' />
                        <label htmlFor=''>Email</label>
                        <input type='email' placeholder='example@gmail.com' name='email' />
                        <label htmlFor=''>Write your meassage</label>
                        <textarea name='message' rows={8} placeholder='Enter you meassage'> </textarea>
                        <button className='contact-submit'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;