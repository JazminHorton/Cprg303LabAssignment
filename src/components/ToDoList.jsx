import React from 'react';
import {Pressable, View, Text, ScrollView, StyleSheet} from 'react-native';

function ToDoList({tasks = []}) {
  const [completedTasks, setCompletedTasks] = React.useState([]);

  const toggleTask = index => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(
        completedTasks.filter(taskIndex => taskIndex !== index),
      );
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };
  return (
    <>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index} onPress={() => toggleTask(index)}>
            <View
              style={[
                styles.task,
                completedTasks.includes(index) && styles.completed,
              ]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;