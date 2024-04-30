import profile from '../Images/bikash.JPG'
import './Home.css'
function Home(){

    return(
        <div id='home' className="aboutme">
            <img src={profile} alt='Bikash' className='profile'/>
            <h1><span>Hi, it's me Bikash Shiwakoti.</span> I am a software developer based on Canada.</h1>
            <p>I recently graduate from Mohak colleege from Software course securing Dean's Honour list.<br/><br/>
                I am eager and really passionate about to explore more in programming world.
            </p>
            <div className='myself'>
            <div className='connect'>Connect</div>
            <div className='resume'>Resume</div>
            </div>
        </div>
        
    )
}

export default Home;