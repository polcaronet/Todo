import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import { EvilIcons } from "@expo/vector-icons";
import RocketSvg from "../../assets/rocket.svg"; 
import { styles } from "./styles";

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState<"all" | "completed">("all");

  function handleTaskAdd() {
    if (tasks.some((task) => task.name === taskName)) {
      return Alert.alert("Tarefa existe", "Já existe uma tarefa com esse nome.");
    }

    const newTask = { id: String(Date.now()), name: taskName, completed: false };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskName("");
  }

  function handleTaskRemove(id: string) {
    Alert.alert("Remover", "Deseja remover esta tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  function handleToggleTaskCompletion(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  
  const filteredTasks = tasks
    .filter((task) => (filter === "completed" ? task.completed : true))
    .sort((a, b) => Number(a.completed) - Number(b.completed)); 

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        <RocketSvg size={32} color="#78C2DD" /> to
        <Text style={styles.eventName2}>do</Text>
      </Text>
    
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#bebebedf"
          onChangeText={setTaskName}
          value={taskName}
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "all" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("all")}
        >
          <Text style={styles.filterButtonText1}>Criadas</Text>
          <View style={styles.filterButtonCounter}>
            <Text style={styles.filterButtonTextCounter}>{totalTasks}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "completed" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("completed")}
        >
          <Text style={styles.filterButtonText2}>Concluídas</Text>
          <View style={styles.filterButtonCounter}>
            <Text style={styles.filterButtonTextCounter}>{completedTasks}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Checkbox
              style={styles.checkBox}
              value={item.completed}
              onValueChange={() => handleToggleTaskCompletion(item.id)}
              color={item.completed ? "#8266b4" : undefined}
            />
            <Text
              style={[
                styles.taskName,
                item.completed && styles.taskCompletedText,
              ]}
            >
              {item.name}
            </Text>
            <TouchableOpacity onPress={() => handleTaskRemove(item.id)}>
              <EvilIcons name="trash" size={25} color="#bebebedf" />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não adicionou uma tarefa? Adicione agora na sua lista de prioridades.
          </Text>
        )}
      />
    </View>
  );
}
