import './Project.css'
import game from '../Images/GameApp.png'
import map from '../Images/Map.png'
import newsapp from '../Images/NewsApp.png'
import snake from '../Images/Snake.png'
import camerapp from '../Images/WeatherApp.png'


function Project() {
    return (
        <div  id='project' className='projects'>
            <div className='projectitle'>
                <h1>My Projects</h1>
                <div className='projectimg'>
                    <a href='https://github.com/BikashShiwakoti/Game'> <img src={game} alt='game' /> </a>
                    <a href='https://github.com/BikashShiwakoti/MapApp'><img src={map} alt='map' /> </a>
                    <a href='https://github.com/BikashShiwakoti/Weather'><img src={newsapp} alt='newsapp' /></a> 
                    <a href='https://github.com/BikashShiwakoti/SnakeGame'><img src={snake} alt='snake' /></a>
                    <a href='https://github.com/BikashShiwakoti/CameraApp'> <img src={camerapp} alt='camerapp' /> </a>
                </div>
            </div>
        </div>
    )
}


export default Project;