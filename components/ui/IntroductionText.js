import { StyleSheet, Text } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 16,
    padding: 8,
  },
});
