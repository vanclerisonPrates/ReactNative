import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  //buscar item salvos
  const getItem = async (key: string) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return passwords ? JSON.parse(passwords) : [];
    } catch (error) {
      console.log("Erro ao buscar", error);
      return [];
    }
  };

  //salvar um item no storage
  const saveItem = async (key: string, value: string) => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("Erro ao salvar", error);
      return [];
    }
  };

  // remover algo do storage
  const removeItem = async (key: string, item: string) => {
    try {
      let passwords = await getItem(key);
      let myPasswords = passwords.filter((password: string) => {
        return password !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));

      return myPasswords;
    } catch (error) {
      console.log("Error ao remover", error);
      return [];
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
