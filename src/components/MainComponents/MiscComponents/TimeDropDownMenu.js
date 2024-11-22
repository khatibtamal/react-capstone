import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useEffect, useRef, useState } from "react";
import { createRoot } from 'react-dom/client';
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { convertDateObjectToSimpleDateString, convertTo12Hour } from "../../../utils/utility.js";

function TimeDropDownMenu(props) {
    const mainButtonRef = useRef();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleMenuMainButtonClick = (e) => {
        createRoot(mainButtonRef.current.children.item(0)).render(<img className="time-dropdown-menu-icon" src={ props.dropDownIcon }/>);
        mainButtonRef.current.children.item(1).innerText = props.menuButtonText;
        createRoot(mainButtonRef.current.children.item(2)).render(<CgChevronDown />);

        mainButtonRef.current.style.backgroundColor = "#EDEFEE";
        mainButtonRef.current.style.color = 'black';

        props.dropDownMenuCallback(e.target.value);
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('dateChanged', handleMenuMainButtonClick);

        //useEffect returns a cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('dateChanged', handleMenuMainButtonClick);
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

    let menuItemsContainerHeight = 200;
    let menuItemsContainerWidth = 300;

    if (screenWidth <= 800) {
        dropDownButtonStyles.width = "300px";
        dropDownButtonStyles.alignSelf = "center";

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

    const handleMenuItemButtonClick = (e) => {
        createRoot(mainButtonRef.current.children.item(0)).render(<div></div>);
        mainButtonRef.current.children.item(1).innerText = convertTo12Hour(e.target.value);
        createRoot(mainButtonRef.current.children.item(2)).render(<CgChevronUp />);

        mainButtonRef.current.style.backgroundColor = "#2E493C";
        mainButtonRef.current.style.color = 'white';

        props.dropDownMenuCallback(e.target.value);
    }

    return (
        <Menu>
            <MenuButton ref={mainButtonRef} as={Button}
                rightIcon={<CgChevronDown />}
                leftIcon={<img className="time-dropdown-menu-icon" src={ props.dropDownIcon } />}
                value='none'
                sx={ dropDownButtonStyles }
                onClick={handleMenuMainButtonClick}
            >
                { props.menuButtonText }
            </MenuButton>
            <MenuList className="dropDownMenuItemContainer"
                zIndex='999999' height={menuItemsContainerHeight}
                width={menuItemsContainerWidth}
                overflowY='scroll'
                backgroundColor={'rgba(255,255,255,1)'}
            >
                { props.selectedDate && props.availableTimesState.get(convertDateObjectToSimpleDateString(props.selectedDate)).map((item) =>
                    <MenuItem onClick={handleMenuItemButtonClick}
                        sx={dropDownItemStyles}
                        value={item}
                        key={item}
                        id={item}>{convertTo12Hour(item)}
                    </MenuItem> )
                }
            </MenuList>
        </Menu>
    );
}

export default TimeDropDownMenu;