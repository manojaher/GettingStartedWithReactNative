import {Pressable, StyleSheet, Text, View} from 'react-native';

type GoalItemObject = {
  obj: {goal: string; id: string};
  onDeleteItem: (id: string) => void;
};

const GoalItem = (props: GoalItemObject) => {
  return (
      <View style={styles.goalItems}>
        <Pressable
          android_ripple={{color: '#390571'}}
          style={pressData => pressData.pressed && styles.pressedItem}
          onPress={() => props.onDeleteItem(props.obj.id)}>
          <Text style={styles.goalText}>{props.obj.goal}</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  goalItems: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
    color: 'white',
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;
