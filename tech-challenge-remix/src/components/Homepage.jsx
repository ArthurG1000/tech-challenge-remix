import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="heros">
        <h1 className="bienvenue">Welcome to the Kingdom of Colchis</h1>

        <span>
          <img
            src="src/assets/castle-homepage.jpeg"
            width="800"
            className="castleImage"
          />
        </span>

        <h2 className="sousTitre">
          Hello to you brave knight, welcome to the (virtual) lands of the royal
          family of Colchis.
        </h2>
        <p className="messageAcceuil">
          You will find on this site all the information about this legendary
          dynasty.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
