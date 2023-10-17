import "../circle/circle.scss"

function Circle({ circleContent, circleTitle, circlePic }) {
    return (
        <div className="circleContainer">
            <div className="greenCircle">
                <img src={circlePic} alt="icon in a circle" />
            </div>
            <div className="circleContentDiv">
                <h2>{circleTitle}</h2>
                <p>{circleContent}</p>
            </div>
        </div>
    )
}

export default Circle