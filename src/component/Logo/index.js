import './style.css'
import logo from '../../images/Logo.png'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo}
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>Shame</strong>Server</p>
        </div>
    )
}
export default Logo;