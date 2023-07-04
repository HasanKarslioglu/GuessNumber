import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/IntroductionText";

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || 0 >= chosenNumber || 99 < chosenNumber) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number beetween 1 and 99!",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.guesContainer}>
        <Title style={{ color: "white", borderColor: "white" }}>
          Guess My Number!
        </Title>
      </View>
      <Card>
        <InstructionText>Input a number!</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton
              onPress={resetInputHandler}
              textColor="black"
              buttonBackColor="#00ffff"
            >
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonSpaceBeetween} />
          <View style={styles.button}>
            <PrimaryButton
              onPress={confirmInputHandler}
              textColor="black"
              buttonBackColor="#00ffff"
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  guesContainer: {
    alignItems: "center",
  },

  textInput: {
    heigh: 50,
    fontSize: 32,
    width: 40,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    alignSelf: "center",
    color: "white",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSpaceBeetween: {
    flex: 1,
  },
  button: {
    flex: 10,
    paddingHorizontal: 2,
  },
});
