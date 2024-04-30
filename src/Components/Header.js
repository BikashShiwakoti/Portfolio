import logo from '../Images/logoo.jpg'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header(){
    return(
        <div  className="navbar">
             <img src = {logo} className="nameLogo" alt="logo"/>
             <ul className='nav'>
                 <li><AnchorLink className='anchor-link'  href='#home'>Home</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#project'>Project</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
             </ul>
             <div className='nav-connect'>Connect</div>
        </div>
    )
}

export default Header;
