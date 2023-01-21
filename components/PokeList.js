import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { View, Text, Image, TouchableOpacity } from "react-native";

function PokeList() {
  const { pokemonList } = useContext(PokeContext);

  let sprite = pokemonList.sprite;
  let id = pokemonList.id
  
  console.log(pokemonList)

  if (pokemonList.length === 0) {
    return <h1>Aun no hay pokemon</h1>;
  }

  return (
    <View>
      {pokemonList.map((pokemonList) => (
        <TouchableOpacity key={id} onPress={""}>
          <Image source={{ sprite }} />
          <Text>{pokemonList.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default PokeList;
