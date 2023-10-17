import "../form/form.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store";

// import { Link } from "react-router-dom";

function Formulaire() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function login(event) {
        event.preventDefault()
        const email = document.getElementById("username").value
        const password = document.getElementById("password").value

        const dataToSend = {
            "email": email,
            "password": password
        }

        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend)
        });
        const data = await response.json()
        if (response.ok) {
            const token = data.body.token
            dispatch(setToken(token))
            dispatch({ type: "connect" })
            navigate("/user")
        }
        else {
            console.log(data)
            alert(data.message)
        }
    }
    return (
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} className="userIcon" />
            <h1>Sign In</h1>
            <form method="post" onSubmit={login}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" name="remember-me" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>
    )
}
export default Formulaire