// Võ Minh Tài - 23521382
import { SectionList } from "react-native";

import ItemSeparator from "@/components/ItemSeparator";
import ListSection from "@/components/ListSection";
import SectionHeader from "@/components/SectionHeader";
import SelectableRow from "@/components/SelectableRow";
import { fruitsVegetables } from "@/data/fruits-vegetables";
import { type Selection } from "@/hooks/useSelection";

const background = require("@/assets/images/backgrounds/fruits-vegetables.jpg");

type FruitsVegetablesListProps = {
  selection: Selection;
};

export default function FruitsVegetablesList({
  selection,
}: FruitsVegetablesListProps) {
  const { selected, toggle } = selection;

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
  );
}
