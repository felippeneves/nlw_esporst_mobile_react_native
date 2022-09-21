import { ImageBackground } from "react-native";

import backgroundImg from "../../assets/background-galaxy.png";

import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      //garante que mesmo se houver um delay o mesmo background será exibido
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
