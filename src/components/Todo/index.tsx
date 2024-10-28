import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <FontAwesome6
          name="trash-can"
          size={18}
          color="#96969A"
          />
        </TouchableOpacity>
    </View>
  )
}