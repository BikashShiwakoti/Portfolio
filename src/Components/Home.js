import profile from '../Images/bikash.JPG'
import resume from '../Assets/Resume.pdf'
import './Home.css'
function Home() {


    return (
        <div id='home' className="aboutme ">
            <div className='grid grid-rows-2 items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <img src={profile} alt='Bikash' className='profile ' />

                </div>
                <div>
                    <h1><span>Hi, it's me Bikash Shiwakoti.</span> I am a software developer based on Canada.</h1>
                    <p>I recently graduate from Mohak colleege from Software course securing Dean's Honour list.<br /><br />
                        I am eager and really passionate about to explore more in programming world.
                    </p>
                </div>
            </div>

            <div className='myself'>
                
                    <div>
                <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-10">
                        <a
                            className="button"
                            href="https://www.linkedin.com/in/bikashshiwakoti"
                        >
                           Connect
                        </a>
                    </button>
                    <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <a
                            className="button"
                            href={resume}
                            download
                        >
                            Download Resume
                        </a>
                    </button>


                </div>
            </div>
        </div>

    )
}

export default Home;
