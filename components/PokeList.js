import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { Text, Image, TouchableOpacity } from "react-native";

function PokeshowList(props) {
  
  const data = props.data;
  let sprite = data.sprite

  return(
    <TouchableOpacity>
      {data.map((data) => (
        <>
          <Image source={{ sprite }} />
          <Text>{data.name}</Text>
        </>
      ))}
    </TouchableOpacity>
  )
}

function PokeList() {
  const { data } = useContext(PokeContext);

  if (data.length === 0) {
    return <Text>Pokemon are missing</Text>;
  }

  return (
    <PokeshowList key={data.id} data={data}/>
  );
}

export default PokeList;
