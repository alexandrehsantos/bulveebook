import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    cursor: pointer;
`
const MenuOptions = styled.ul`
    display: flex;
`
const MenuOption = styled.li`
    display: flex;
    align-items: center;
    padding: 35px;
    font-size: 35px;
    color: gray;
`




const menuOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];


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

     

        </Wrapper>
    )
}
export default Menu;