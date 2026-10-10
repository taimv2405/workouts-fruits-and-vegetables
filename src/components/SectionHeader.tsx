import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  iconUrl: string;
};

export default function SectionHeader({ title, iconUrl }: SectionHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
