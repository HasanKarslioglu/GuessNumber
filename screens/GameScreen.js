import { StyleSheet, View, Text, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/IntroductionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, incrementGuessRound }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "Cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRound((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    incrementGuessRound();
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess!</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher Or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton
              style={styles.button}
              onPress={nextGuessHandler.bind(this, "lower")}
              buttonBackColor="#e90000"
            >
              <Ionicons name="md-remove" size={28} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              style={styles.button}
              onPress={nextGuessHandler.bind(this, "greater")}
              buttonBackColor="#e90000"
            >
              <Ionicons name="md-add" size={28} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLogItem
              numberOfRound={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 80,
    padding: 12,
  },
  buttonContainer: {
    marginHor: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 10,
    paddingHorizontal: 2,
  },
  listContainer: {
    marginHorizontal: 15,
    marginVertical: 25,
    flex: 1,
  },
});
