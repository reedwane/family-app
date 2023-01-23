import { StyleSheet, Text, View } from "react-native";

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    backgroundColor: "#ddd234",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: { flex: 2, backgroundColor: "orange", padding: 10 },
  boxThree: { flex: 1, backgroundColor: "purple", padding: 10 },
  boxFour: { flex: 3, backgroundColor: "gold", padding: 10 },
});

export default SandBox;
