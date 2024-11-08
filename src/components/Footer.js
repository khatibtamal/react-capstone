import footerLogo from '../images/footer_logo.jpg';

function Footer() {
    return (
        <footer className='baseRowContainer baseFooterContainer'>
            <div className="columnFiller"></div>
            <ul className='noListStyle footerContainer'>
                <li>
                    <img src={footerLogo} alt="Footer Logo" height={300} width={200}/>
                </li>
                <li>
                    <ul className='noListStyle footerNavItemsContainer'>
                        <li>
                            Navigation
                        </li>
                        <li>
                            <a href="#"><span>Home</span></a>
                        </li>
                        <li>
                            <a href="#"><span>About</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Menu</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Reservations</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Order Online</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Login</span></a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='noListStyle footerNavItemsContainer'>
                        <li>
                            Contact
                        </li>
                        <li>
                            <a href="#"><span>Address</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Phone Number</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Email</span></a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='noListStyle footerNavItemsContainer'>
                        <li>
                            Social Media
                        </li>
                        <li>
                            <a href="#"><span>Facebook</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Twitter</span></a>
                        </li>
                        <li>
                            <a href="#"><span>Instagram</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="columnFiller"></div>
        </footer>
    );
  }
  
  export default Footer;