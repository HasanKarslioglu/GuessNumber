import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({ numberOfRound, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{numberOfRound}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 10,
  },
  itemText: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 16,
  },
});

export default GuessLogItem;
