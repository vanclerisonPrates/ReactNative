import { Button } from "react-native";

interface Props {
  navigation: any;
}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};
