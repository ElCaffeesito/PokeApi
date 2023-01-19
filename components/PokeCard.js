import {
  Text,
  View,
  Image,
} from "react-native";

  

function PokeCards({pokemon}) {
  return (
    <View>
      <Image /> {/* Pokemon Image */}
      <Text>{pokemon.id}</Text> {/* Pokemon pokedex number */}
      <Text>{pokemon.name}</Text> {/* Pokemon name */}
      <Text>{pokemon.type}</Text> {/* Pokemon type */}
      <Text>{pokemon.secondType}</Text> {/* Pokemon second type */}
      <Text>{pokemon.hpSt}</Text> {/* Pokemon hp */}
      <Text>{pokemon.attackSt}</Text> {/* Pokemon attack */}
      <Text>{pokemon.deffenseSt}</Text> {/* Pokemon deffense */}
      <Text>{pokemon.spAttackSt}</Text> {/* Pokemon sp attack */}
      <Text>{pokemon.spDeffenseSt}</Text> {/* Pokemon sp deffense */}
      <Text>{pokemon.speedSt}</Text> {/* Pokemon speed */}
      <Text>{pokemon.totalSt}</Text> {/* Pokemon total */}
      <Text>{pokemon.ability}</Text> {/* Pokemon ability */}
      <Text>{pokemon.secondAbility}</Text> {/* Pokemon second ability */}
      <Text>{pokemon.hiddenAbility}</Text> {/* Pokemon hidden ability */}
      <Text>{pokemon.catchRate}</Text> {/* Pokemon catch rate */}
      <Text>{pokemon.eggGroup}</Text> {/* Pokemon egg group */}
      <Text>{pokemon.secondEggGroup}</Text> {/* Pokemon second egg group */}
      <Text>{pokemon.hatchTime}</Text> {/* Pokemon hatch time */}
      <Text>{pokemon.evYield}</Text> {/* Pokemon ev yield */}
      <Text>{pokemon.secondEvYield}</Text> {/* Pokemon second ev yield */}
      <Text>{pokemon.maleRatio}</Text> {/* Pokemon male ratio */}
      <Text>{pokemon.femRatio}</Text> {/* Pokemon female ratio */}
    </View>
  );
}

export default PokeCards;
