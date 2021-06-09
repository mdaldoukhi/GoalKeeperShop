import shopImage from '../GoalKeeper.png';
import { Title, Description, ShopImage } from '../styles';

function Home() {

    return (
        <div>
            <Title>GoalKeeper Station</Title>
            <Description className="descrption">Welcome to the official goalkeeper online shop. We know you love soccer, you are a goalkeeper at heart, you excercise hard, you are an important part of your team.</Description>
            <ShopImage id="shopImage" src={shopImage} alt="GoalKeeper Station"/>
        </div>
    );
  }
  
  export default Home;
  