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
                    
                    <div>
                        <h3>Address</h3>
                        <span>4754 North South Street</span>
                        <span>Chicago, Illinois</span>
                        <span>USA</span>
                        <span>101110</span>
                    </div>
                    
                    <div>
                        <h3>Phone Number</h3>
                        <span>555-555-5555</span>
                    </div>
                    
                    <div>
                        <h3>Email</h3>
                        <span>email@email.com</span>
                    </div>
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