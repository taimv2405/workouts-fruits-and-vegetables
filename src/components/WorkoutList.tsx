// Võ Minh Tài - 23521382
import { FlatList, StyleSheet } from "react-native";

import ItemSeparator from "@/components/ItemSeparator";
import ListSection from "@/components/ListSection";
import SelectableRow from "@/components/SelectableRow";
import { workouts } from "@/data/workouts";
import { spacing } from "@/theme/tokens";

const background = require("@/assets/images/backgrounds/workouts.jpg");

type WorkoutListProps = {
  selected: ReadonlySet<string>;
  onToggle: (label: string) => void;
};

export default function WorkoutList({ selected, onToggle }: WorkoutListProps) {
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
            onToggle={() => onToggle(item.type)}
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
