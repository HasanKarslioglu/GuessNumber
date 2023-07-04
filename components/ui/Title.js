import { StyleSheet, Text } from "react-native";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "#eeff00",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#eeff00",
    borderRadius: 12,
    padding: 12,
  },
});
