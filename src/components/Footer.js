import footerLogo from '../images/footer_logo.jpg';

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <img src={footerLogo} alt="Footer Logo" />
                </li>
                <li>
                    Navigation
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Social Media
                </li>
            </ul>
        </footer>
    );
  }
  
  export default Footer;