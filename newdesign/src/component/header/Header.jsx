import logo from "../../img/argentBankLogo.png"
import "../header/header.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';




function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Argent Bank" className="logo" />
            <Link to={"/signIn"} className="headerLink">
                <FontAwesomeIcon icon={faCircleUser} className="userIcon" />
                <p className="signIn">Sign In</p>
            </Link>
        </header>
    )
}

export default Header