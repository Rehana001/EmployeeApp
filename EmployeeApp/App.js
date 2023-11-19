import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';

export default function App() {
  return (
    <View style={styles.container}>
   {/* <Home/> */}
    <CreateEmployee/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    backgroundColor: '#e0e0e0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
