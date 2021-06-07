import './App.css';
import shopImage from './GoalKeeper.png';
import gloves from './gloves'
function App() {

  //Gitting the data from gloves.js
  const glovesList = gloves.map((gloves) => (
    <div key={gloves.id}>
      <img className="image-product" src={gloves.image} />
      <p className="product-name">{gloves.name}</p>
      <p className="product-price">Price: <span>{gloves.price}</span> KD</p>
    </div>
  ));
  
  return (
    <div>
      <div>
        <h1 className="text-center text-line">GoalKeeper Station</h1>
        <h4 className="descrption">Welcome to the official goalkeeper online shop. We know you love soccer, you are a goalkeeper at heart, you excercise hard, you are an important part of your team.</h4>
        <img id="shopImage" src={shopImage} />
      </div>
      <div>
        <h1 className="title">Gloves Product</h1>
        <div className="List">
          {/* Call the data from Gloves  */}
          {glovesList}
        </div>
      </div>
    </div>
  );
}

export default App;
