import Countbar from "../../countBar/CountBar"
import Welcome from "../../welcome/Welcome"
import { Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import "../user/user.scss"
import { setUser } from "../../../store"

export async function getProfile(token, dispatch) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    if (response.ok) {
        const data2 = data.body
        dispatch(setUser(data2))
    }
    else {
        alert(data.message)

    };
}
function User() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.token)
    useEffect(() => {
        if (token) {
            getProfile(token, dispatch)
        }
    }, [token])
    if (!token) {
        return <Navigate to={"/signIn"} />;
    }
    else {

        return (
            <>
                <main className="userBackground">
                    <Welcome />
                    <div className="countDiv">
                        <Countbar state={"checking"} number={"8349"} solde={"2,082.79"} balance={"Available"} />
                        <Countbar state={"Savings"} number={"6712"} solde={"10,928.42"} balance={"Available"} />
                        <Countbar state={"Credit Card"} number={"8349"} solde={"184.30"} balance={"Current"} />
                    </div>
                </main>
            </>
        )
    }
}

export default User