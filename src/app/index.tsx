// Võ Minh Tài - 23521382
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FruitsVegetablesList from "@/components/FruitsVegetablesList";
import SelectedSummary from "@/components/SelectedSummary";
import WorkoutList from "@/components/WorkoutList";
import { useSelection } from "@/hooks/useSelection";

export default function Index() {
  const selection = useSelection();

  return (
    <SafeAreaView style={styles.container}>
      <WorkoutList selection={selection} />
      <FruitsVegetablesList selection={selection} />
      <SelectedSummary items={[...selection.selected]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
