import logo from '../../images/logoCapitalizado.png'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    font-size: 45px;
    color: black;
    align-items: center;
`

const LogoImg = styled.div`
    display: flex;
`

function Logo() {
    return (
        <Wrapper>
            <LogoImg>
                <img src={logo}
                    alt='logo'
                ></img>
            </LogoImg>
            <p><strong>Bulvee</strong>Books</p>
        </Wrapper>
    )
}
export default Logo;