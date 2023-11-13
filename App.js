import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(modalIsVisible => !modalIsVisible);
  };

  function addGoalHandler(enteredGoalText) {
      console.log(`🚀 ~ Entered goal is '${enteredGoalText}'`);
      setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
      ]);
  };

  function deleteGoalHandler(id) {
      console.log('🚀 ~ Deleting... ❌');
      setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter( goal => goal.id !== id);
      });
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add new goal' color='#5e0acc' onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={startAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
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
  },
  goalsContainer: {
    flex: 5,
    marginTop: 8
  },
});
