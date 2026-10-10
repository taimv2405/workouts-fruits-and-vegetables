// Võ Minh Tài - 23521382
import { SectionList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ItemSeparator from "@/components/ItemSeparator";
import ListSection from "@/components/ListSection";
import SectionHeader from "@/components/SectionHeader";
import SelectableRow from "@/components/SelectableRow";
import SelectedSummary from "@/components/SelectedSummary";
import WorkoutList from "@/components/WorkoutList";
import { fruitsVegetables } from "@/data/fruits-vegetables";
import { useSelection } from "@/hooks/useSelection";

const fruitsVegetablesBackground = require("@/assets/images/backgrounds/fruits-vegetables.jpg");

export default function Index() {
  const { selected, toggle } = useSelection();

  return (
    <SafeAreaView style={styles.container}>
      <WorkoutList selected={selected} onToggle={toggle} />
      <ListSection
        title="SectionList - Fruits & Vegetables"
        background={fruitsVegetablesBackground}
      >
        <SectionList
          sections={fruitsVegetables}
          keyExtractor={(item) => item}
          extraData={selected}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={ItemSeparator}
          renderSectionHeader={({ section }) => (
            <SectionHeader title={section.title} iconUrl={section.url} />
          )}
          renderItem={({ item }) => (
            <SelectableRow
              label={item}
              selected={selected.has(item)}
              onToggle={() => toggle(item)}
            />
          )}
        />
      </ListSection>
      <SelectedSummary items={[...selected]} />
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
