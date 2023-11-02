import React from 'react';
import {
    Pressable,
    View,
    Text,
    ScrollView,
  } from 'react-native';
import { styles } from './App';

function ToDoList({ tasks }) {
    return (
        <ScrollView>
            {tasks.map((task, index) => (
                <Pressable key={index}>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>{task}</Text>
                </View>
                </Pressable>
            ))}
        </ScrollView>
    );    
}

export default ToDoList;
