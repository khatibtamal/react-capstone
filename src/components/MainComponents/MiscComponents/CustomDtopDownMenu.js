import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useRef } from "react";
import { createRoot } from 'react-dom/client';
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

function CustomDropDownMenu(props) {
    const mainButtonRef = useRef();

    let dropDownButtonStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: "15px",
        border: 'none',
    }

    let dropDownItemStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: 0,
        border: 'none',
    }

    if (window.innerWidth <= 630) {

    }
    else if (window.innerWidth <= 1024) {

    }
    else {
        dropDownButtonStyles.width = "400px";
        dropDownItemStyles.width = "400px";
        dropDownItemStyles.mb = "3px";
    }

    const handleMenuMainButtonClick = (e) => {
        createRoot(mainButtonRef.current.children.item(0)).render(<img src={ props.dropDownIcon } style={{marginLeft:"20px"}}/>);
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
        <Menu className="dropDownMenuContainer">
            {(isOpen) => {

                return <>
                    <MenuButton ref={mainButtonRef} className="dropDownMenuButton" as={Button}
                        rightIcon={<CgChevronDown />}
                        leftIcon={<img src={ props.dropDownIcon } style={{marginLeft:"20px"}}/>}
                        width={400}
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
                </>
            }}
        </Menu>
    );
}

export default CustomDropDownMenu;