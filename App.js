import { StyleSheet } from "react-native";
import PokeList from "./components/PokeList";
import { PokeContextProvider } from "./context/PokeContext";

export default function App() {
  return (
      <PokeContextProvider>
        <PokeList />
      </PokeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
