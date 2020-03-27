import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown, Input, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { fetchPokemon } from "../../services/requests";
import "./ControlledForm.scss";

function ControlledForm({
  type = [],
  weaknesses = [],
  pokemon = [],
  filterPokemon
}) {
  useEffect(() => {
    register({ name: "name" });
    register({ name: "type" });
    register({ name: "weakness" });
  });

  const {
    errors,
    handleSubmit,
    register,
    setValue,
    triggerValidation
  } = useForm();

  const resetForm = async e => {
    e.preventDefault();
    const { pokemon } = await fetchPokemon();
    filterPokemon(pokemon);
    document.querySelector(".pokemon-form").reset();
    document.querySelectorAll(".clear").forEach(button => button.click());
  };

  const onSubmit = ({ name, type, weakness }) => {
    const filteredPokemon = pokemon.reduce((filteredPokemon, pokemon) => {
      let validResult = true;
      if (!!name && !pokemon.name.match(new RegExp(name, "gi"))) {
        validResult = false;
      }
      if (!!type && !pokemon.type.join("").includes(type.join(""))) {
        validResult = false;
      }
      if (
        !!weakness &&
        !pokemon.weaknesses.join("").includes(weakness.join(""))
      ) {
        validResult = false;
      }
      if (validResult) {
        filteredPokemon.push(pokemon);
      }
      return filteredPokemon;
    }, []);
    filterPokemon(filteredPokemon);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pokemon-form">
      <Input
        className="pokemon-form--input"
        error={errors.firstName ? true : false}
        fluid
        icon
        name="name"
        placeholder="Pokemon name"
        onChange={async (e, { name, value }) => {
          setValue(name, value);
          await triggerValidation({ name });
        }}
      />
      <Dropdown
        className="pokemon-form--input"
        clearable
        error={errors.type ? true : false}
        fluid
        multiple
        name="type"
        options={type}
        placeholder="type"
        search
        selection
        onChange={async (e, { name, value }) => {
          setValue(name, value);
          await triggerValidation({ name });
        }}
      />
      <Dropdown
        className="pokemon-form--input"
        clearable
        error={errors.weakness ? true : false}
        fluid
        multiple
        name="weakness"
        options={weaknesses}
        placeholder="weakness"
        search
        selection
        onChange={async (e, { name, value }) => {
          setValue(name, value);
          await triggerValidation({ name });
        }}
      />
      <Button style={{ marginBottom: "1rem" }} color="teal" fluid type="submit">
        Search
      </Button>
      <Button fluid color="black" onClick={e => resetForm(e)}>
        Reset
      </Button>
    </form>
  );
}

export default withRouter(ControlledForm);
