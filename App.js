import { StatusBar } from 'react-native';
import Main from './src/Screens/main/index';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Main />
    </>
  );
}
