import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </View>
      <View style={{ padding: 24 }}>
        <PrimaryButton
          onPress={onStartNewGame}
          textColor="black"
          buttonBackColor="#00ffff"
        >
          Start New Game
        </PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderRadius: 150,
    borderColor: "black",
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 18,
    color: "white",
    fontFamily: "open-sans",
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "white",
  },
});
