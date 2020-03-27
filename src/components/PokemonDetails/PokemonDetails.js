import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./PokemonDetails.scss";

function PokemonDetails({ pokemon }) {
  const {
    height,
    img,
    name,
    next_evolution,
    num,
    prev_evolution,
    type,
    weaknesses,
    weight
  } = pokemon;
  return (
    <article className="details">
      <section className="details--info">
        <h1 className="details--info--name">{name}</h1>
        <img className="details--info--img" alt="" src={img} />
        <small className="details--info--small">{num}</small>
        <Link className="details--info--link" to={`/`}>
          Back
        </Link>
      </section>
      <section className="details--stats">
        <p className="details--stats--text">
          type: {!!type && type.join(", ").toLowerCase()}
        </p>
        <p className="details--stats--text">
          weaknesses: {weaknesses && weaknesses.join(", ").toLowerCase()}
        </p>
        <p className="details--stats--text">height: {height}</p>
        <p className="details--stats--text">weight: {weight}</p>
        <ul className="details--stats--list">
          {!!prev_evolution &&
            prev_evolution.map(({ name }, i) => {
              return (
                <li className="details--stats--list--li" key={i}>
                  <Link
                    className="details--link"
                    to={`/pokemon/${name.toLowerCase()}`}
                  >
                    previous evolution: {name.toLowerCase()}
                  </Link>
                </li>
              );
            })}
        </ul>
        <ul className="details--stats--list">
          {!!next_evolution &&
            next_evolution.map(({ name }, i) => {
              return (
                <li className="details--stats--list--li" key={i}>
                  <Link
                    className="details--link"
                    to={`/pokemon/${name.toLowerCase()}`}
                  >
                    next evolution: {name.toLowerCase()}
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
    </article>
  );
}

export default withRouter(PokemonDetails);
