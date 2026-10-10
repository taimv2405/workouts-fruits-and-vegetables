// Võ Minh Tài - 23521382
import { StyleSheet, Text, View } from "react-native";

type SelectedSummaryProps = {
  items: string[];
};

export default function SelectedSummary({ items }: SelectedSummaryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SELECTED EXERCISES:</Text>
      <Text style={styles.items}>{items.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e5181c",
  },
  items: {
    fontSize: 18,
    textAlign: "center",
  },
});
