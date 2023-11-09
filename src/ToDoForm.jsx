import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  
});

function ToDoForm({ onAdd }) {
  const [taskText, setTaskText] = React.useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      Alert.alert('Error', 'Please enter a task.');
      return;
    }

    onAdd(taskText);
    setTaskText(''); 
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}
  
export default ToDoForm;