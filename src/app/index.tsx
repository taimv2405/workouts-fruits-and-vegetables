// Võ Minh Tài - 23521382
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FruitsVegetablesList from "@/components/FruitsVegetablesList";
import SelectedSummary from "@/components/SelectedSummary";
import WorkoutList from "@/components/WorkoutList";
import { useSelection } from "@/hooks/useSelection";

export default function Index() {
  const { selected, toggle } = useSelection();

  return (
    <SafeAreaView style={styles.container}>
      <WorkoutList selected={selected} onToggle={toggle} />
      <FruitsVegetablesList selected={selected} onToggle={toggle} />
      <SelectedSummary items={[...selected]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
