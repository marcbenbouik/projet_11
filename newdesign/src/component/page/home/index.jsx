import Bubble from "../../bubble/Bubble"
import chat from "../../../img/icon-chat.png"
import money from "../../../img/icon-money.png"
import security from "../../../img/icon-security.png"
import "../home/home.scss"
import Banner from "../../banner/Banner"
import Header from "../../header/Header"

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <section>
                <Bubble bubblePic={chat} bubbleContent={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} bubbleTitle={"You are our #1 priority"} />
                <Bubble bubblePic={money} bubbleContent={"The more you save with us, the higher your interest rate will be!"} bubbleTitle={"More savings means higher rates"} />
                <Bubble bubblePic={security} bubbleContent={"We use top of the line encryption to make sure your data and money is always safe."} bubbleTitle={"Security you can trust"} />
            </section>
        </div>
    )
}
export default Home