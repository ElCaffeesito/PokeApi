import { createContext, useState, useEffect } from "react";

export const PokeContext = createContext();

export function PokeContextProvider(props) {

  const myHeaders = new Headers();

  let pokemonList = [];

  function getAllPokemon() {
    const requestPokemon = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      //mode: "cors",
      //cache: "default",
    };

    /* const allPokemon = await fetch(
      "http://localhost:8000/pokemon/all",
      requestPokemon
    )
      .then((data) => {
        if (data["msg"] == "Success") {
          alert("Data sendend successfully");
          console.log("desde el 200\n" + data)
        } else if (data["msg"] == "Error") {
          console.log("desde el 404\n" + data)
          alert("ERROR 404");
        } else {
          console.log("desde el 402\n" + data)
          alert("ERROR 402 List not found");
        }
      })
      .catch((error) => console.log(error.message));
    return allPokemon; */

    fetch("http://localhost:8000/pokemon/all", requestPokemon).then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
    }).then(data => {
     
      console.log(data)

    }).catch(error => console.log(error));

  }

  return (
      <PokeContext.Provider
        value={{
          pokemonList,
        }}
      >
        {props.children}
      </PokeContext.Provider>
  );
}
