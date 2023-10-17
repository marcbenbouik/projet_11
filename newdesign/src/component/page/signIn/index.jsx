import { Navigate } from "react-router-dom"
import { setToken, setUser } from "../../../store"
import Formulaire from "../../form/Formulaire"

import "../signIn/signIn.scss"
import { useDispatch, useSelector } from "react-redux"


function SignIn() {
    const stayConnect = useSelector((state) => state.stay)
    const dispatch = useDispatch()
    if (stayConnect) {
        return <Navigate to={"/user"} />;
    } else {
        dispatch({ type: 'disconnect' });
        dispatch(setToken(null));
        dispatch(setUser(null));
        dispatch({ type: 'disconnect' })
        dispatch(setToken(null))
        dispatch(setUser(null))
        return (
            <>

                <main className="signInBackground">
                    <Formulaire />
                </main>
            </>
        )
    }
}
export default SignIn