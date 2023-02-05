import Logo from "../Logo"
import Menu from '../Menu'
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
`


function Header() {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  )
}

export default Header;