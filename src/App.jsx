import "./App.css";
import EatPlace from "./component/EatPlace";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <h1>Elite Toronto Eats</h1>
      <div className="food-box">
        <EatPlace
          name="Pizzeria Badiali"
          type="Italian"
          link="https://pizzeriabadiali.com/"
          image="src/assets/pizza.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Hakka Legend"
          type="Chinese"
          link="https://www.hakkalegend.com/"
          image="src/assets/hakka.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="LaMochi Donuts & Sweets"
          type="Japanese "
          link="https://lamochisweets.com/"
          image="src/assets/mochi.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Chungchun Rice Dog"
          type="Korean"
          link="https://chungchunricedog.ca/"
          image="src/assets/hotdog.jpeg"
          cost="$ | 🌿"
        />
        <EatPlace
          name="Arctic Bites"
          type="Thai"
          link="https://arcticbites.com/"
          image="src/assets/rolls.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="The Old Spaghetti Factory"
          type="Italian"
          link="https://oldspaghettifactory.ca/"
          image="src/assets/old.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="iHalo Krunch"
          type="Asian"
          link="https://www.ihalokrunch.com/"
          image="src/assets/purple.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Paranthe Wali Gali"
          type="Indian"
          link="https://www.paranthewaligali.net/"
          image="src/assets/para.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Burrito Boyz"
          type="Mexican"
          link="https://www.burritoboyz.ca/"
          image="src/assets/burrito.jpg"
          cost="$ | 🌿"
        />
        <EatPlace
          name="Neo Coffee Bar"
          type="Japanese"
          link="https://www.neocoffeebar.com/"
          image="src/assets/neo1.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Gong Cha"
          type="Chinese"
          link="https://gong-cha.ca/"
          image="src/assets/gong.jpg"
          cost="$ | 🌿"
        />
        <EatPlace
          name="Guru Lukshmi"
          type="South Indian"
          link="http://www.gurulukshmi.com/"
          image="src/assets/dosa.gif"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Demetres"
          type="Belgian"
          link="https://demetres.com/"
          image="src/assets/deme.jpg"
          cost="$ | 🌿"
        />
      </div>
      <h5>$-$$$: Affordability Scale</h5>
      <h5>🌿: Vegetarian Options Available</h5>
    </div>
  );
};

export default App;
