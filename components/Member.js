import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Member = ({ item, deleteHander, index }) => {
  return (
    <TouchableOpacity onPress={() => deleteHander(item.id)}>
      <Text style={styles.member}>
        {index + 1}: {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  member: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

export default Member;
