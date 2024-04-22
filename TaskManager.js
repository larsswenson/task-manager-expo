import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1, // Create unique id
      title: `Task ${tasks.length + 1}`,
      completed: false,
    };
    setTasks([...tasks, newTask]); // Add new task to array immutably
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update tasks array
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Add Task" onPress={addTask} />
      {tasks.map((task) => (
        <View key={task.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 8 }}>{task.title}</Text>
          <Button
            title={task.completed ? 'Completed' : 'Incomplete'}
            onPress={() => toggleTaskCompletion(task.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default TaskManager;
