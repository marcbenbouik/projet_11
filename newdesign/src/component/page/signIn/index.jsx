import Formulaire from "../../form/Form"
import Header from "../../header/Header"
import "../signIn/signIn.scss"


function SignIn() {
    return (
        <>
            <Header />
            <main className="background">
                <Formulaire />
            </main>
        </>
    )
}
export default SignIn