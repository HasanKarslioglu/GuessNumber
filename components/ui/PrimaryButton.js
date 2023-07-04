import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress, textColor, buttonBackColor }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                styles.pressed,
                { backgroundColor: buttonBackColor },
              ]
            : [
                styles.buttonInnerContainer,
                { backgroundColor: buttonBackColor },
              ]
        }
        android_ripple={{ color: "#02ffc0ff" }}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 16,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#ff0000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
