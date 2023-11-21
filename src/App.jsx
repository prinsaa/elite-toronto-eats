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
          image="./pizza.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Hakka Legend"
          type="Chinese"
          link="https://www.hakkalegend.com/"
          image="./hakka.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="LaMochi Donuts & Sweets"
          type="Japanese "
          link="https://lamochisweets.com/"
          image="./mochi.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Chungchun Rice Dog"
          type="Korean"
          link="https://chungchunricedog.ca/"
          image="./hotdog.jpeg"
          cost="$ | 🌿"
        />
        <EatPlace
          name="Arctic Bites"
          type="Thai"
          link="https://arcticbites.com/"
          image="./rolls.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="The Old Spaghetti Factory"
          type="Italian"
          link="https://oldspaghettifactory.ca/"
          image="./old.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="iHalo Krunch"
          type="Asian"
          link="https://www.ihalokrunch.com/"
          image="./purple.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Paranthe Wali Gali"
          type="Indian"
          link="https://www.paranthewaligali.net/"
          image="./para.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Burrito Boyz"
          type="Mexican"
          link="https://www.burritoboyz.ca/"
          image="./burrito.jpg"
          cost="$ | 🌿"
        />
        <EatPlace
          name="Neo Coffee Bar"
          type="Japanese"
          link="https://www.neocoffeebar.com/"
          image="./neo1.jpg"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Gong Cha"
          type="Chinese"
          link="https://gong-cha.ca/"
          image="./gong.jpg"
          cost="$ | 🌿"
        />
        <EatPlace
          name="Guru Lukshmi"
          type="South Indian"
          link="http://www.gurulukshmi.com/"
          image="./dosa.gif"
          cost="$$ | 🌿"
        />
        <EatPlace
          name="Demetres"
          type="Belgian"
          link="https://demetres.com/"
          image="./deme.jpg"
          cost="$ | 🌿"
        />
      </div>
      <h5>$-$$$: Affordability Scale</h5>
      <h5>🌿: Vegetarian Options Available</h5>
    </div>
  );
};

export default App;
