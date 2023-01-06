import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddMember = ({ addMemberHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        value={text}
        placeholder="new member..."
        onChangeText={changeHandler}
        style={styles.input}
      />

      <Button
        onPress={() => addMemberHandler(text)}
        title="Add member"
        color={"coral"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddMember;
