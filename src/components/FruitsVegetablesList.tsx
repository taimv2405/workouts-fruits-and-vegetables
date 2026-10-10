// Võ Minh Tài - 23521382
import { SectionList, StyleSheet } from "react-native";

import ItemSeparator from "@/components/ItemSeparator";
import ListSection from "@/components/ListSection";
import SectionHeader from "@/components/SectionHeader";
import SelectableRow from "@/components/SelectableRow";
import { fruitsVegetables } from "@/data/fruits-vegetables";
import { spacing } from "@/theme/tokens";

const background = require("@/assets/images/backgrounds/fruits-vegetables.jpg");

type FruitsVegetablesListProps = {
  selected: ReadonlySet<string>;
  onToggle: (label: string) => void;
};

export default function FruitsVegetablesList({
  selected,
  onToggle,
}: FruitsVegetablesListProps) {
  return (
    <ListSection
      title="SectionList - Fruits & Vegetables"
      background={background}
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
            onToggle={() => onToggle(item)}
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
