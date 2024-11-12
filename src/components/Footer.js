import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import footerLogo from '../images/footer_logo.jpg';

function Footer() {
    return (
        <footer className='outerBaseFlexRowContainer'>
            <div>
                <img src={footerLogo} alt="Footer Logo" height={300} width={200}/>
                <div>
                    <h2>Navigation</h2>
                    <Link to="/" className="nav-item">Home</Link>
                    <HashLink to="/#aboutSection" className="nav-item">About</HashLink>
                    <Link to="/" className="nav-item">Menu</Link>
                    <Link to="/bookings" className="nav-item">Reservations</Link>
                    <HashLink to="/#orderOnlineSection" className="nav-item">Order Online</HashLink>
                    <Link to="/" className="nav-item">Login</Link>
                </div>
                <div>
                    <h2>Contact</h2>
                    <a href="#">Address</a>
                    <a href="#">Phone Number</a>
                    <a href="#">Email</a>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <Link to="https://www.facebook.com" className="nav-item">Facebook</Link>
                    <Link to="https://www.twitter.com" className="nav-item">Twitter</Link>
                    <Link to="https://www.instagram.com" className="nav-item">Instagram</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;