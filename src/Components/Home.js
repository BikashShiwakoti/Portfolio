import profile from '../Images/bikash.JPG'
import './Home.css'
function Home(){
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../BikashShiwakoti.docx'; // Adjust the path as needed
        link.setAttribute('download', 'BikashShiwakoti.docx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return(
        <div id='home' className="aboutme ">
            <div className='grid grid-rows-2 items-center justify-center'>
                <div className='flex items-center justify-center'> 
                <img  src={profile} alt='Bikash' className='profile '/>

                </div>
                <div>
                <h1><span>Hi, it's me Bikash Shiwakoti.</span> I am a software developer based on Canada.</h1>
            <p>I recently graduate from Mohak colleege from Software course securing Dean's Honour list.<br/><br/>
                I am eager and really passionate about to explore more in programming world.
            </p>
                </div>
            </div>
           
            <div className='myself'>
            <a href="https://www.linkedin.com/in/bikashshiwakoti" className="connect">Connect</a>

            <div>
      <button onClick={handleDownload}>Download Resume</button>
    </div>            </div>
        </div>
        
    )
}

export default Home;
