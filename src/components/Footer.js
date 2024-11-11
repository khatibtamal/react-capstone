import footerLogo from '../images/footer_logo.jpg';

function Footer() {
    return (
        <footer className='outerBaseFlexRowContainer'>
            <div>
                <img src={footerLogo} alt="Footer Logo" height={300} width={200}/>
                <div>
                    <h2>Navigation</h2>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Reservations</a>
                    <a href="#">Order Online</a>
                    <a href="#">Login</a>
                </div>
                <div>
                    <h2>Contact</h2>
                    <a href="#">Address</a>
                    <a href="#">Phone Number</a>
                    <a href="#">Email</a>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;