import Logo from './../Logo'
import profile from '../../images/profile.svg'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
`
const MenuOptions = styled.ul`
    display: flex;
    list-style: none;
`
const MenuOption = styled.li`
    align-items: center;
    padding: 35px;
    display: flex;
    list-style: none;
    font-size: 35px;
    color: gray;
`

const IconOptions = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`
const IconOption = styled.li`
    align-items: center;
    padding: 35px;
    display: flex;
    list-style: none;
`


const menuOptions = ['Documents', 'GitHub', 'Forum', 'My Collections'];
const icons = [profile];

function Menu() {
    return (
        <Wrapper>
            <MenuOptions>
                {
                    menuOptions.map((option) => (
                        <MenuOption>
                            {option}
                        </MenuOption>
                    ))
                }
            </MenuOptions>

            <IconOptions>
                <IconOption>
                    {
                        icons.map((icon) => (
                            <img src={icon}
                                alt='ico profile'
                            />
                        ))
                    }
                </IconOption>
            </IconOptions>

        </Wrapper>
    )
}
export default Menu;