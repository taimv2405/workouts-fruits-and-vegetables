import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SelectableRow from "@/components/SelectableRow";
import { workouts } from "@/data/workouts";

export default function Index() {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  const toggle = (label: string) => {
    setSelected((current) => {
      const next = new Set(current);
      if (!next.delete(label)) {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        extraData={selected}
        renderItem={({ item }) => (
          <SelectableRow
            label={item.type}
            selected={selected.has(item.type)}
            onToggle={() => toggle(item.type)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
