/* IMAGES */
import shopImage from "../gk-glove-banner.jpeg";
/* STYLED-COMPONENET */
import { Title, Description, ShopImage } from "../styles";

function Home() {
    return (
        <div>
            <Title>GK Gloves Station</Title>
            <Description className="descrption">
                Welcome to the official goalkeeper online shop. We know you love soccer,
                you are a goalkeeper at heart, you excercise hard, you are an important
                part of your team.
            </Description>
            <ShopImage id="shopImage" src={shopImage} alt="GoalKeeper Station" />
        </div>
    );
}

export default Home;
