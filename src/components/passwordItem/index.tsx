import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  data: string;
  removePassword: () => void;
}

export function PasswordItem({ data, removePassword }: Props) {
  return (
    <Pressable onPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
      <Icon name="trash" size={18} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
});
