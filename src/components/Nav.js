import navLogo from '../images/header_logo.svg';

function Nav() {
    return (
        <nav className="outerBaseFlexRowContainer">
            <div className="baseFlexRowContainer navBarContainer">
                <img src={navLogo} alt="Header Logo" height={50} width={205}/>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">MENU</a>
                <a href="#">RESERVATIONS</a>
                <a href="#">ORDER ONLINE</a>
                <a href="#">LOGIN</a>
            </div>
        </nav>
    );
}

export default Nav;