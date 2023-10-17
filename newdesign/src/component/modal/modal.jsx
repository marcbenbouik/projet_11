import "../modal/modal.scss"
import { getProfile } from "../page/user"
import { useDispatch, useSelector } from "react-redux"
function Modal({ openClose, setOpenClose }) {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.token)
    async function changeUserName(event) {
        event.preventDefault()
        const pseudo = document.getElementById("pseudo").value;

        const dataToSend = {
            userName: pseudo,
        };

        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${token}`, // Ajoutez le token Bearer dans l'en-tête
                'Content-Type': 'application/json', // Assurez-vous d'ajuster le type de contenu en fonction de vos besoins (JSON, FormData, etc.)
            },
            body: JSON.stringify(dataToSend),
        })
        const data = await response.json()
        if (response.ok) {
            getProfile(token, dispatch)
            setOpenClose(false)
        }
        else {
            console.log(data);
            alert("error")

        };
    }
    return (
        <div className="modalBackground" role="dialog" aria-modal={openClose}>
            <form method="post" className="modalForm" onSubmit={changeUserName}>
                <label htmlFor="pseudo">Nouveau Pseudo</label>
                <input type="text" name="pseudo" id="pseudo" className="modalInput" />
                <button type="submit" className="modalButton">Valider</button>
            </form>
        </div>
    )
}

export default Modal