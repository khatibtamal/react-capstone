import navLogo from '../images/header_logo.jpg';

function Nav() {
    return (
        <nav className="baseRowContainer navContainer">
            <div className="columnFiller"></div>
            <ul className='noListStyle navBarContainer'>
                <li>
                    <img src={navLogo} alt="Header Logo" height={80} width={240}/>
                </li>
                <li>
                    <ul className='noListStyle navBarNavItemsContainer'>
                        <li>
                            <a href="#"><span className='navBarNavItem'>HOME</span></a>
                        </li>
                        <li>
                            <a href="#"><span className='navBarNavItem'>ABOUT</span></a>
                        </li>
                        <li>
                            <a href="#"><span className='navBarNavItem'>MENU</span></a>
                        </li>
                        <li>
                            <a href="#"><span className='navBarNavItem'>RESERVATIONS</span></a>
                        </li>
                        <li>
                            <a href="#"><span className='navBarNavItem'>ORDER ONLINE</span></a>
                        </li>
                        <li>
                            <a href="#"><span className='navBarNavItem'>LOGIN</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="columnFiller"></div>
        </nav>
    );
  }
  
  export default Nav;