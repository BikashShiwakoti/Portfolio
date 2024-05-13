import profile from '../Images/Myimage.JPG'
import './AboutMe.css'
function AboutMe() {

    return (
        <div  id='about' className='aboutBikash'>
        <h1>About Me</h1>
            <div className='grid grid-cols-2 grid-flow-row-dense gap-10 '>
                <div className='profilepic flex justify-start'>
                    <img  src={profile} alt='Bikash'  />
                </div>
                <div className='descrp'>
                    <p>
                        Hello! I'm Bikash Shiwakoti, a recent graduate in Software Engineering with a passion for creating innovative solutions and building impactful software applications.
                        Throughout my academic journey,
                        I've acquired a strong foundation in computer science principles and gained practical experience through various projects
                    </p>
                    <div className='skills flex justify-start'>
                        <div className='skill' ><p className="w-10">HTML&CSS</p><hr style={{width: "80%"}}/> </div>
                        <div className='skill' ><p className="w-10">ReactJS</p><hr style={{width: "85%"}}/> </div>
                        <div className='skill' ><p className="w-10">JAVA</p><hr style={{width: "65%"}}/> </div>
                        <div className='skill' ><p className="w-10">Git</p><hr style={{width: "80%"}}/> </div>
                        <div className='skill' ><p className="w-10">Node</p><hr style={{width: "65%"}}/> </div>
                        <div className='skill' ><p className="w-10">JavaScript</p><hr style={{width: "75%"}}/> </div>
                    </div>
                </div>
                </div>


        </div>

    )
}

export default AboutMe;