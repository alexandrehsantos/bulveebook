import HeaderIcons from "../HeaderIcons";
import Logo from "../Logo"
import Menu from '../Menu'
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #FFF;
  display: flex;
  padding-right: 25px;
  justify-content: center;
`



function Header() {
  return (
    <Wrapper>
      <Logo />
      <Menu />
      <HeaderIcons />
    </Wrapper>
  )
}

export default Header;