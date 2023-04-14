import React from "react";
import "./Cards.css";
import CardsItem from "./CardsItem";

function Cards() {
  return (
    <div className="cards">
      <h1>C'EST PARTI !!!!!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardsItem
              src="https://media.tenor.com/6zmET4cVIogAAAAd/valorant.gif"
              text="Un boost dans les hauts ranks de Valorant!"
              label="BOOST SAC"
              path="/services"
            />
            <CardsItem
              src="https://gifdb.com/images/file/valorant-neon-pixel-art-kr46zh28jy6enpm9.gif"
              text="Regardez mes disponibilitées !"
              label="Pause clope"
              path="/services"
            />
          </ul>
          <ul className="cards__items"></ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
