import { createContext, useState, useEffect } from "react";
import { View } from "react-native-web";
import { poke as data } from "../data/poke";

export const PokeContext = createContext();

export function PokeContextProvider(props) {

  const myHeaders = new Headers();

  let pokemonList = [];

  async function getAllPokemon() {
    const requestPokemon = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };

    const allPokemon = await fetch(
      "http://localhost:8000/pokemon/all",
      requestPokemon
    )
      .then((data) => {
        if (data["msg"] == "Success") {
          alert("Data sendend successfully");
        } else if (data["msg"] == "Error") {
          alert("ERROR 404");
        } else {
          alert("ERROR 402 Pokemon not found");
        }
      })
      .catch((error) => console.log(error.message));
    return allPokemon;
  }

  pokemonList.push(getAllPokemon());


  return (
    <View>
      <PokeContext.Provider
        value={{
          pokemonList,
          data,
        }}
      >
        {props.children}
      </PokeContext.Provider>
    </View>
  );
}
