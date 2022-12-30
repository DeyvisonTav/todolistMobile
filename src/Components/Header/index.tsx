import { View, Image } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
     <Image style={styles.img} source={require('../../../assets/logo.png')} />
    </View>
  );
}
