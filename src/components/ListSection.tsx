import { Image, type ImageProps } from "expo-image";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type ListSectionProps = {
  title: string;
  background: ImageProps["source"];
  children: ReactNode;
};

export default function ListSection({
  title,
  background,
  children,
}: ListSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.frame}>
        <Image
          source={background}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  title: {
    paddingVertical: 8,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a1adb",
  },
  frame: {
    flex: 1,
    marginHorizontal: 16,
    overflow: "hidden",
  },
});
