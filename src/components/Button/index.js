import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

export default function App(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient colors={['#333333', '#222222']} style={styles.buntton}>
        <Text style={styles.text}>{props.name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
