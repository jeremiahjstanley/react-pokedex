import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ControlledForm from "../ControlledForm";
import PokemonCard from "../PokemonCard";

import "./PokemonContainer.scss";

function PokemonContainer({ pokemon = [] }) {
  const [filteredPokemon, filterPokemon] = useState(pokemon);

  const weaknesses = [
    ...new Set(pokemon.map(({ weaknesses }) => weaknesses).flat())
  ].map(weakness => {
    return { key: weakness, value: weakness, text: weakness };
  });

  const types = [...new Set(pokemon.map(({ type }) => type).flat())].map(
    type => {
      return { key: type, value: type, text: type };
    }
  );
  return (
    <article className="pokemon-container">
      <ControlledForm
        weaknesses={weaknesses}
        type={types}
        filterPokemon={filterPokemon}
        pokemon={filteredPokemon}
      />
      <ul className="pokemon-container--cards">
        {!!filteredPokemon &&
          filteredPokemon.map((pokemonCard, i) => (
            <PokemonCard pokemon={pokemonCard} key={i} />
          ))}
      </ul>
    </article>
  );
}

export default withRouter(PokemonContainer);
