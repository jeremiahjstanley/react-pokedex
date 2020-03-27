import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./PokemonCard.scss";

function PokemonCard({ pokemon: { id, img, name, num, type, weaknesses } }) {
  return (
    <Link className="pokemon-card--link" to={`/pokemon/${name.toLowerCase()}`}>
      <li className="pokemon-card">
        <img src={img} alt="" />
        <h3 className="pokemon-card--header">{name}</h3>
        <small className="pokemon-card--small">{num}</small>
        <p className="pokemon-card--text">type: {type.join(", ").toLowerCase()}</p>
        <p className="pokemon-card--text">weaknesses: {weaknesses.join(", ").toLowerCase()}</p>
      </li>
    </Link>
  );
}

export default withRouter(PokemonCard);
