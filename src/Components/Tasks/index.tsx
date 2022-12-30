import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

interface taskProps {
  tasks: string;
  onRemove: () => void;
  onAddCont: () => void;
  onRemoveCont: () => void;
}

export function Tasks({ tasks, onRemove, onAddCont, onRemoveCont }: taskProps) {
  const [checked, setChecked] = useState(true);

  function handleContChecked() {
    if (checked) {
      onAddCont();
    } else {
      onRemoveCont();
    }
  }

  function handleCheckedButtonInvert() {
    setChecked(!checked);
    handleContChecked();
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleCheckedButtonInvert}
        >
          <Image
            style={checked ? styles.buttonImg : styles.buttonImgDisable}
            source={require("../../../assets/checkedFalse.png")}
          />
          <Image
            style={checked ? styles.buttonImgDisable : styles.buttonImg}
            source={require("../../../assets/checkedTrue.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={checked ? styles.taskText : styles.taskTextCheked}>
        {tasks}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
