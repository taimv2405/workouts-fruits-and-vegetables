// Võ Minh Tài - 23521382
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "@/theme/tokens";

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
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  title: {
    ...typography.bodyBold,
    textAlign: "center",
    color: colors.accent,
  },
  items: {
    ...typography.body,
    textAlign: "center",
    color: colors.text,
  },
});
