import {StyleSheet, View, Button, TextInput, Modal, Image} from 'react-native';
import {useState} from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function stringIsValid(myString: String): Boolean {
    return Boolean(myString);
  }

  function addGoalHandler() {
    if (enteredGoalText) {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }
  }

  function dismissModal() {
    props.onCancel()
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../components/assets/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={dismissModal} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#311b6b'
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
    marginHorizontal: 8,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    backgroundColor:'#e4d0ff',
    color:'#120438',
    borderRadius: 6,
  },
});

export default GoalInput;
