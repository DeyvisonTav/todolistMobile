import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { Header } from "../Components/Header";
import { Tasks } from "../Components/Tasks";
import { styles } from "./styles";

export function Home() {
  const [taskArray, setTaskArray] = useState<string[]>([]);
  const [tasks, setTasks] = useState("");
  const [cont, setCont] = useState<number>(0);

  function handleTaskAdd() {
    if (taskArray.includes(tasks)) {
      return Alert.alert(
        "Tarefa existe",
        "Já existe uma tarefa com essa descrição!"
      );
    }
    if (tasks === "") {
      return Alert.alert(
        "Erro",
        "Você precisa digitar alguma coisa para poder criar uma tarefa!"
      );
    }
    setTaskArray((prevState) => [...prevState, tasks]);
    setTasks("");
  }

  function handleTaskRemove(task: string) {
    Alert.alert("Remover", `Remover a Tarefa: ${task}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTaskArray((prevState) =>
            prevState.filter((Tasks) => Tasks !== task)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function addCont() {
    setCont(cont + 1);
  }

  function removeCont() {
    setCont(cont - 1);
  }

  useEffect(() => {
    if (taskArray.length === 0) {
      setCont(0);
    }
  }, [taskArray]);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTasks}
          value={tasks}
        />
        <TouchableOpacity onPress={handleTaskAdd} style={styles.button}>
          <Text style={styles.imgButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.containerList}>
          <View style={styles.containerTasksPub}>
            <Text style={styles.containerListTextCreate}>Criadas:</Text>
            <Text style={styles.numbList}>{taskArray.length}</Text>
          </View>

          <View style={styles.containerTasksPub}>
            <Text style={styles.containerListTextFinish}>Concluídas:</Text>
            <Text style={styles.numbList}>{cont}</Text>
          </View>
        </View>

        <FlatList
          data={taskArray}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Tasks
              key={item}
              tasks={item}
              onRemove={() => handleTaskRemove(item)}
              onAddCont={() => addCont()}
              onRemoveCont={() => removeCont()}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.containerEmpyList}>
              <Image
                style={styles.clipBoardImg}
                source={require("../../assets/Clipboard.png")}
              />
              <Text style={styles.listEmptyText1}>
                Você ainda não tem tarefas cadastradas.
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
