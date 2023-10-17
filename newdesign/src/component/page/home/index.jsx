import chat from "../../../img/icon-chat-min.webp"
import money from "../../../img/icon-money-min.webp"
import security from "../../../img/icon-security-min.webp"
import "../home/home.scss"
import Banner from "../../banner/Banner"
import Circle from "../../circle/Circle"

function Home() {
    return (
        <div className="homeDiv">
            <Banner />
            <section className="circleSection">
                <Circle circlePic={chat} circleContent={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} circleTitle={"You are our #1 priority"} />
                <Circle circlePic={money} circleContent={"The more you save with us, the higher your interest rate will be!"} circleTitle={"More savings means higher rates"} />
                <Circle circlePic={security} circleContent={"We use top of the line encryption to make sure your data and money is always safe."} circleTitle={"Security you can trust"} />
            </section>
        </div>
    )
}
export default Home