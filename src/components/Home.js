import shopImage from '../GoalKeeper.png';

function Home() {

    return (
        <div>
            <h1 className="text-center text-line">GoalKeeper Station</h1>
            <h4 className="descrption">Welcome to the official goalkeeper online shop. We know you love soccer, you are a goalkeeper at heart, you excercise hard, you are an important part of your team.</h4>
            <img id="shopImage" src={shopImage} alt="GoalKeeper Station"/>
        </div>
    );
  }
  
  export default Home;
  