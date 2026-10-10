// Võ Minh Tài - 23521382
import { FlatList, StyleSheet } from "react-native";

import ItemSeparator from "@/components/ItemSeparator";
import ListSection from "@/components/ListSection";
import SelectableRow from "@/components/SelectableRow";
import { workouts } from "@/data/workouts";
import { type Selection } from "@/hooks/useSelection";
import { spacing } from "@/theme/tokens";

const background = require("@/assets/images/backgrounds/workouts.jpg");

type WorkoutListProps = {
  selection: Selection;
};

export default function WorkoutList({ selection }: WorkoutListProps) {
  const { selected, toggle } = selection;

  return (
    <ListSection title="FlatList - Workouts" background={background}>
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
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: spacing.sm,
  },
});
