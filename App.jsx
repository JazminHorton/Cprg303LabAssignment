/**
 * My To Do List App Lab Assignments
 *
 * @format
 */
import { SafeAreaView } from 'react-native';
import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';
import {useState} from 'react';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (newTask) => {
    if (!tasks.includes(newTask)) {
      setTasks(prevTasks => [...prevTasks, newTask]);
    } else {
      Alert.alert('Error', 'Task already exists.'); 
    }
  }

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAdd={addTask} />
    </SafeAreaView>
  );
} 

export default App;