/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  useColorScheme,
  View,
  StatusBar,
} from 'react-native';

import {useState} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  interface CourseGoalInterface {
    goal: string;
    id: string;
  }

  const [modalIsVisible, setModalIsVisible] = useState<Boolean>(false);
  const [courseGoals, setCourseGoals] = useState<CourseGoalInterface[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals([
      ...courseGoals,
      {goal: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id: string) {
    const filteredItem = courseGoals.filter(
      (goal: CourseGoalInterface) => goal.id !== id,
    );
    setCourseGoals(filteredItem);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}></Button>
      {modalIsVisible && (
        <GoalInput
          onCancel={endAddGoalHandler}
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={item => {
            return (
              <GoalItem obj={item.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBlockColor: '#cccccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    marginTop: 8,
    flex: 8,
  },

  goalItems: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
    color: 'white',
  },

  goalText: {
    color: 'white',
  },
});

export default App;
