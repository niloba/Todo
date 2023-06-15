import React, {useState} from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from "./components/Task";



export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

    {/*Tänased ülesanned */}
    <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Tänased Ülesanned</Text>
    
    <View style={styles.items}>
    {/*Siin tulevad ülesandeid*/ }
    {
      taskItems.map((item, index) => {
       return (
        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
        <Task text = {item} />

        </TouchableOpacity>
       ) 
       
      })
    }
      {/*<Task text={"Ülesanne 1"} />
      <Task text={"Ülesanne 2"}/>*/}
    </View>


      </View>
    {/*Kirjuta ülesanne siia */}
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height": "padding"}
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input} placeholder={"Kirjuta ülesanne"} value={task} onChangeText={text => setTask(text)} />

      <TouchableOpacity onPress={() => handleAddTask()} >
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>

      </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCDEFC',

  },

   tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
   },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'Bold'
    
  },
  items: {
    marginTop: 25,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#F2F4F6",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 2,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#F2F4F6",
    borderRadius: 60,
    justifyContent: "center",
    alignItems:"center",
    borderColor: "#C0C0C0",
    borderWidth: 2,
  },
  addText: {},

});
