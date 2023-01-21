import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { View, Text, Image, TouchableOpacity } from "react-native";

function PokeList() {
  const { pokemonList } = useContext(PokeContext);

  console.log(pokemonList)

  return (
    <View>
      {/* .map(user => user.age); */}
      {pokemonList?.map(() => (
        <TouchableOpacity key={pokemonList.id} onPress={() =>""}>
          <Image source={{ uri: pokemonList.sprite }} />
          <Text>{pokemonList.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default PokeList;
