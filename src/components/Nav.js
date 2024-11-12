import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import navLogo from '../images/header_logo.svg';

function Nav() {
    return (
        
        <nav className="outerBaseFlexRowContainer">
            <div className="navBarContainer">
                <img src={navLogo} alt="Header Logo" height={50} width={205}/>
                <Link to="/" className="nav-item">HOME</Link>
                <HashLink to="/#aboutSection" className="nav-item">ABOUT</HashLink>
                <Link to="/" className="nav-item">MENU</Link>
                <Link to="/bookings" className="nav-item">RESERVATIONS</Link>
                <HashLink to="/#orderOnlineSection" className="nav-item">ORDER ONLINE</HashLink>
                <Link to="/" className="nav-item">LOGIN</Link>
            </div>
        </nav>
    );
}

export default Nav;