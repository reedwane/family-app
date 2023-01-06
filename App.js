import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import AddMember from "./components/AddMember";
import Header from "./components/Header";
import Member from "./components/Member";

export default function App() {
  const [family, setFamily] = useState([
    { name: "Ali", id: "1" },
    { name: "Latifah", id: "2" },
    { name: "anonymous1", id: "3" },
    { name: "anonymous", id: "4" },
  ]);

  const removeMemberHandler = (key) => {
    setFamily((prev) => prev.filter((member) => member.id !== key));
  };

  const AddMemberHandler = (name) => {
    if (name.length > 3) {
      setFamily((prev) => [...prev, { name, id: `${prev.length + 1}` }]);
    } else {
      Alert.alert("OOPS!", "Name must be more than 3 characters", [
        { text: "Got it", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddMember addMemberHandler={AddMemberHandler} />

        <View style={styles.list}>
          <FlatList
            data={family}
            keyExtractor={(member) => member.id}
            renderItem={({ item, index }) => (
              <Member
                item={item}
                index={index}
                deleteHander={removeMemberHandler}
              />
            )}
            ListFooterComponent={<Text>we are now {family.length}</Text>}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
