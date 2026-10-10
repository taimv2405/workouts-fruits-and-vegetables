// Võ Minh Tài - 23521382
import { FlatList } from "react-native";

import ItemSeparator from "@/components/ItemSeparator";
import ListSection from "@/components/ListSection";
import SelectableRow from "@/components/SelectableRow";
import { workouts } from "@/data/workouts";
import { type Selection } from "@/hooks/useSelection";

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
