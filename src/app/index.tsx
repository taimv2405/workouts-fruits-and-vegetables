import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ItemSeparator from "@/components/ItemSeparator";
import ListSection from "@/components/ListSection";
import SelectableRow from "@/components/SelectableRow";
import { workouts } from "@/data/workouts";

const workoutsBackground = require("@/assets/images/backgrounds/workouts.jpg");

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
      <ListSection title="FlatList - Workouts" background={workoutsBackground}>
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.id}
          extraData={selected}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <SelectableRow
              label={item.type}
              selected={selected.has(item.type)}
              onToggle={() => toggle(item.type)}
            />
          )}
        />
      </ListSection>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 8,
  },
});
