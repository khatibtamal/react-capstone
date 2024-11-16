import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { CgChevronDown } from "react-icons/cg";

function CustomDropDownMenu(props) {
    let dropDownButtonStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: "15px",
    }

    let dropDownItemStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: 0,
    }

    if (window.innerWidth <= 630) {

    }
    else if (window.innerWidth <= 1024) {

    }
    else {
        dropDownButtonStyles.width = "400px";
        dropDownItemStyles.width = "400px";
        dropDownItemStyles.borderRadius = "0px";
        dropDownItemStyles.mb = "3px";
    }

    return (
        <Menu className="dropDownMenuContainer">
            <MenuButton className="dropDownMenuButton" as={Button}
                rightIcon={<CgChevronDown />}
                leftIcon={<img src={ props.dropDownButtonIcon } style={{marginLeft:"20px"}}/>}
                width={400}
                sx={dropDownButtonStyles}
            >
                { props.menuButtonText }
            </MenuButton>
            <MenuList className="dropDownMenuItemContainer">
                {props.menuItems.map((item) => <MenuItem sx={dropDownItemStyles}>{item}</MenuItem> )}
            </MenuList>
        </Menu>
    );
}

export default CustomDropDownMenu;