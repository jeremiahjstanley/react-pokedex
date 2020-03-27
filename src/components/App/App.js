import React, { useState, useEffect } from "react";
import { withRouter, Route } from "react-router-dom";

import PokemonContainer from "../PokemonContainer";
import PokemonDetails from "../PokemonDetails";

import "./App.scss";
import { fetchPokemon } from "../../services/requests";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { pokemon } = await fetchPokemon();
      setPokemon(pokemon);
    };
    fetchData();
  }, []);

  return (
    <main className="app">
      <img
        className="app--logo"
        src="http://pluspng.com/img-png/pokemon-logo-png-file-international-pokemon-logo-svg-1024.png"
        alt="Pokemon Logo PNG"
      />
      <Route
        exact
        path="/"
        component={() => <PokemonContainer pokemon={pokemon} />}
      />
      <Route
        exact
        path="/pokemon/:name"
        render={({ match }) => {
          const pokemonDetails =
            !!pokemon &&
            pokemon.find(
              ({ name }) => name.toLowerCase() === match.params.name
            );
          return (
            <div style={{ paddingTop: "3rem" }}>
              <PokemonDetails pokemon={pokemonDetails} />
            </div>
          );
        }}
      />
    </main>
  );
}

export default withRouter(App);
