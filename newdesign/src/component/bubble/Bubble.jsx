import "../bubble/bubble.scss"

function Bubble({ bubbleContent, bubbleTitle, bubblePic }) {
    return (
        <div className="bubbleContainer">
            <div className="greenCircle">
                <img src={bubblePic} alt="" />
            </div>
            <div className="contentDiv">
                <h2>{bubbleTitle}</h2>
                <h3>{bubbleContent}</h3>
            </div>
        </div>
    )
}

export default Bubble