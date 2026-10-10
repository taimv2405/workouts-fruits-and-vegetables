import { Pressable, Text, View } from "react-native";

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
  return (
    <View>
      <Text>{label}</Text>
      <Pressable onPress={onToggle}>
        <Text>{selected ? "DESELECT" : "SELECT"}</Text>
      </Pressable>
    </View>
  );
}
