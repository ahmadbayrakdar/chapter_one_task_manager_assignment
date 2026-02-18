import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');
  const [showError, setShowError] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const addTask = () => {
    if (taskText.trim().length > 0) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: taskText, completed: false },
      ]);
      setTaskText('');
      setShowError(false);
      Keyboard.dismiss();
    } else {
      setShowError(true);
    }
  };

  const handleTextChange = (text: string) => {
    setTaskText(text);
    if (showError && text.trim().length > 0) {
      setShowError(false);
    }
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const incompleteTasksCount = tasks.filter(task => !task.completed).length;

  const renderTask = ({ item }: { item: Task }) => (
    <View style={[styles.taskCard, isDarkMode && styles.taskCardDark]}>
      <TouchableOpacity 
        style={styles.taskContent} 
        onPress={() => toggleComplete(item.id)}
        activeOpacity={0.7}
      >
        <MaterialIcons 
          name={item.completed ? "check-circle" : "radio-button-unchecked"} 
          size={24} 
          color={item.completed ? "#4CAF50" : (isDarkMode ? "#ADB5BD" : "#757575")} 
        />
        <Text style={[
          styles.taskText, 
          isDarkMode && styles.taskTextDark,
          item.completed && styles.completedTask,
          item.completed && isDarkMode && styles.completedTaskDark
        ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => deleteTask(item.id)}
        style={styles.deleteButton}
      >
        <MaterialIcons name="delete-outline" size={24} color="#FF5252" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      
      {/* Header */}
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Text style={[styles.headerTitle, isDarkMode && styles.headerTitleDark]}>Task Manager</Text>
        <Text style={[styles.headerSubtitle, isDarkMode && styles.headerSubtitleDark]}>
          {incompleteTasksCount} {incompleteTasksCount === 1 ? 'task' : 'tasks'} remaining
        </Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialIcons name="assignment" size={64} color={isDarkMode ? "#343A40" : "#E0E0E0"} />
            <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>No tasks yet. Add one below!</Text>
          </View>
        }
      />

      {/* Input Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        style={[styles.inputWrapper, isDarkMode && styles.inputWrapperDark]}
      >
        {showError && (
          <Text style={styles.errorText}>Please enter a task first</Text>
        )}
        <View style={[
          styles.inputContainer, 
          isDarkMode && styles.inputContainerDark,
          showError && styles.inputContainerError
        ]}>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            placeholder="What needs to be done?"
            placeholderTextColor={isDarkMode ? "#6C757D" : "#ADB5BD"}
            value={taskText}
            onChangeText={handleTextChange}
            onSubmitEditing={addTask}
          />
          <TouchableOpacity 
            style={[styles.addButton, !taskText.trim() && styles.addButtonDisabled]} 
            onPress={addTask}
            activeOpacity={0.7}
          >
            <MaterialIcons name="add" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },
  headerDark: {
    backgroundColor: '#1E1E1E',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  headerTitleDark: {
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  headerSubtitleDark: {
    color: '#ADB5BD',
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  taskCardDark: {
    backgroundColor: '#1E1E1E',
    shadowOpacity: 0.2,
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  taskTextDark: {
    color: '#E9ECEF',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#ADB5BD',
  },
  completedTaskDark: {
    color: '#495057',
  },
  deleteButton: {
    padding: 4,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#9E9E9E',
  },
  emptyTextDark: {
    color: '#6C757D',
  },
  inputWrapper: {
    width: '100%',
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  inputWrapperDark: {
    backgroundColor: '#121212',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
    position: 'relative',
    height: 56,
  },
  inputContainerDark: {
    backgroundColor: '#1E1E1E',
  },
  inputContainerError: {
    borderColor: '#FF5252',
    borderWidth: 1,
  },
  errorText: {
    color: '#FF5252',
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 4,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#1A1A1A',
    paddingHorizontal: 16,
    paddingRight: 60, // Space for the floating button
  },
  inputDark: {
    color: '#FFF',
  },
  addButton: {
    position: 'absolute',
    right: 8,
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#2D62ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#A5B9F4',
  },
});
