// Võ Minh Tài - 23521382
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "@/theme/tokens";

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
    gap: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
  },
  label: {
    ...typography.body,
    flex: 1,
    minWidth: 0,
  },
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    ...typography.button,
    color: colors.onPrimary,
  },
});
