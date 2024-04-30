import profile from '../Images/Myimage.JPG'
import './AboutMe.css'
function AboutMe() {

    return (
        <div  id='about' className='aboutBikash'>
        <h1>About Me</h1>
            <div className='grid-container'>
                <div className='profilepic'>
                    <img src={profile} alt='Bikash'  />
                </div>
                <div className='descrp'>
                    <p>
                        Hello! I'm Bikash Shiwakoti, a recent graduate in Software Engineering with a passion for creating innovative solutions and building impactful software applications.
                        Throughout my academic journey,
                        I've acquired a strong foundation in computer science principles and gained practical experience through various projects
                    </p>
                    <div className='skills'>
                        <div className='skill' ><p>HTML&CSS</p><hr style={{width: "80%"}}/> </div>
                        <div className='skill' ><p>ReactJS</p><hr style={{width: "85%"}}/> </div>
                        <div className='skill' ><p>JAVA</p><hr style={{width: "65%"}}/> </div>
                        <div className='skill' ><p>Git</p><hr style={{width: "80%"}}/> </div>
                        <div className='skill' ><p>Node</p><hr style={{width: "65%"}}/> </div>
                        <div className='skill' ><p>JavaScript</p><hr style={{width: "75%"}}/> </div>
                    </div>
                </div>
                </div>


        </div>

    )
}

export default AboutMe;