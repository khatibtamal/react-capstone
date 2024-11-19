import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useEffect, useRef, useState } from "react";
import { createRoot } from 'react-dom/client';
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

function CustomDropDownMenu(props) {
    const mainButtonRef = useRef();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        //useEffect returns a cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    let dropDownButtonStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: "10px",
        border: 'none',
    }

    let dropDownItemStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: 0,
        border: 'none',
        fontFamily: 'Markazi Text',
        fontWeight: "normal",
        fontSize: "30px",
        height: "60px",
    }

    if (screenWidth <= 800) {
        dropDownButtonStyles.width = "300px";
        dropDownButtonStyles.alignSelf = "center";
        dropDownButtonStyles.mb = "3%";
        dropDownButtonStyles.mt = "3%";

        dropDownItemStyles.width = "300px";
        dropDownItemStyles.alignSelf = "center";
        dropDownItemStyles.fontSize = "21px";
        dropDownItemStyles.height= "32px";
        dropDownItemStyles.mb = "2%";
    }
    else {
        dropDownButtonStyles.width = "400px";
        dropDownItemStyles.width = "400px";
        dropDownItemStyles.mb = "3px";
    }

    const handleMenuMainButtonClick = (e) => {
        createRoot(mainButtonRef.current.children.item(0)).render(<img className="occasion-dropdown-menu-icon" src={ props.dropDownIcon } />);
        mainButtonRef.current.children.item(1).innerText = props.menuButtonText;
        createRoot(mainButtonRef.current.children.item(2)).render(<CgChevronDown />);

        mainButtonRef.current.style.backgroundColor = "#EDEFEE";
        mainButtonRef.current.style.color = 'black';

        props.dropDownMenuCallback(e.target.value);
    }

    const handleMenuItemButtonClick = (e) => {
        createRoot(mainButtonRef.current.children.item(0)).render(<div></div>);
        mainButtonRef.current.children.item(1).innerText = e.target.value;
        createRoot(mainButtonRef.current.children.item(2)).render(<CgChevronUp />);

        mainButtonRef.current.style.backgroundColor = "#2E493C";
        mainButtonRef.current.style.color = 'white';

        props.dropDownMenuCallback(e.target.value);
    }

    return (
        <Menu>
            <MenuButton ref={mainButtonRef} as={Button}
                rightIcon={<CgChevronDown />}
                leftIcon={<img className="occasion-dropdown-menu-icon" src={ props.dropDownIcon } />}
                value='none'
                sx={ dropDownButtonStyles }
                onClick={handleMenuMainButtonClick}
            >
                { props.menuButtonText }
            </MenuButton>
            <MenuList className="dropDownMenuItemContainer">
                { props.menuItems.map((item) =>
                    <MenuItem onClick={handleMenuItemButtonClick}
                        sx={dropDownItemStyles}
                        value={item}
                        id={item}>{item}
                    </MenuItem> )
                }
            </MenuList>
        </Menu>
    );
}

export default CustomDropDownMenu;