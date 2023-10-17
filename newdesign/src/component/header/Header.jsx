import logo from "../../img/argentBankLogo-min.webp"
import "../header/header.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser } from "../../store";




function Header() {
    const isConnected = useSelector((state) => state.isConnected)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    function disconnect() {
        dispatch({ type: 'disconnect' })
        dispatch(setToken(null))
        dispatch(setUser(null))
    }

    return (
        <header className="header">
            <img src={logo} alt="Argent Bank" className="logo" />
            {isConnected ?
                (
                    <div className="headerContain">
                        <div className="headerLink">
                            <FontAwesomeIcon icon={faCircleUser} className="userIcon" />
                            <p className="signIn">{user && user.userName}</p>
                        </div>
                        <Link to={"/"} className="headerLink" onClick={disconnect}>
                            <FontAwesomeIcon icon={faCircleUser} className="userIcon" />
                            <p className="signIn"> Sign Out</p>
                        </Link>
                    </div>
                ) :
                (
                    <div className="headerContain">
                        <Link to={"/signIn"} className="headerLink">
                            <FontAwesomeIcon icon={faCircleUser} className="userIcon" />
                            <p className="signIn">Sign In</p>
                        </Link>
                    </div>
                )}
        </header>
    )
}

export default Header