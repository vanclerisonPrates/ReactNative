import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

interface Props {
  password: string;
  handleClose: () => void;
}

export function ModalPassword({ password, handleClose }: Props) {
  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);

    await saveItem("@pass", password);
    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>
        <Pressable
          style={styles.innerPassword}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={handleCopyPassword}
          >
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24, 0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    width: "80%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 8,
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: "#392de9",
    borderRadius: 8,
  },
  buttonSaveText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
