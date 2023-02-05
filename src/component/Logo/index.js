import logo from '../../images/Logo.png'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    font-size: 35px;
    color: gray;
    align-items: center;
`

const LogoImg = styled.div`
    display: flex;
    max-width: 125px;
    max-height: 125px;
    margin-right: 180px;
`


function Logo() {
    return (
        <Wrapper>
            <LogoImg>
                <img src={logo}
                    alt='logo'
                ></img>
            </LogoImg>
            <p><strong>Shame</strong>Server</p>
        </Wrapper>
    )
}
export default Logo;