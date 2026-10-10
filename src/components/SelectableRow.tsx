// Võ Minh Tài - 23521382
import { Pressable, StyleSheet, Text, View } from "react-native";

type SelectableRowProps = {
  label: string;
  selected: boolean;
  onToggle: () => void;
};

export default function SelectableRow({
  label,
  selected,
  onToggle,
}: SelectableRowProps) {
  const actionText = selected ? "DESELECT" : "SELECT";

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${actionText.toLowerCase()} ${label}`}
        onPress={onToggle}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>{actionText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: "#ececf0",
  },
  label: {
    flex: 1,
    minWidth: 0,
    fontSize: 18,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "#2196f3",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
});
