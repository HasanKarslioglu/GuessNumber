import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    borderRadius: 14,
    padding: 16,
    marginTop: 36,
    backgroundColor: "#691717",
    elevation: 10,
    alignItems: "center",
  },
});
