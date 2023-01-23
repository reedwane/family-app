import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Member = ({ item, deleteHander, index }) => {
  return (
    <TouchableOpacity>
      <View style={styles.member}>
        <MaterialCommunityIcons
          name="delete-outline"
          size={24}
          color="#333"
          onPress={() => deleteHander(item.id)}
        />
        <Text>{item.name}</Text>
      </View>
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
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});

export default Member;
