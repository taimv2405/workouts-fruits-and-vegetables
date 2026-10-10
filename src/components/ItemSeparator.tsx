// Võ Minh Tài - 23521382
import { StyleSheet, View } from "react-native";

import { spacing } from "@/theme/tokens";

export default function ItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: spacing.md,
  },
});
