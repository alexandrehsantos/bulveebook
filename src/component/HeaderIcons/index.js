import bag from '../../images/bag.svg'
import profile from '../../images/profile.svg'
import styled from "styled-components";

const icons = [profile, bag];


const IconOptions = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const IconOption = styled.li`
    margin-right: 40px;
    width: 25px;
`

function HeaderIcons() {
    return (
        <IconOptions>
            {
                icons.map((icon) => (
                    <IconOption> <img src={icon} alt='ico profile' /> </IconOption>
                ))
            }
        </IconOptions>
    )
}

export default HeaderIcons;