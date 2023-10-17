import "../countBar/countBar.scss"

function Countbar({ state, number, solde, balance }) {
    return (
        <div className="countBarDiv">
            <div className="countBarInfo">
                <p className="countInfo">Argent Bank {state + "(x" + number + ")"}</p>
                <p className="count">${solde}</p>
                <p className="countInfo">{balance} Balance</p>
            </div>
            <button className="countBarButton">View transaction</button>
        </div>
    )
}

export default Countbar