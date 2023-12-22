import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';


import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();

const myOptions={
  title:"Employee List",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#2337a8"
  }
}

 function App() {
  return (
    <View style={styles.container}>
   {/* <Home/> */}
    {/* <CreateEmployee/> */}
    {/* <Profile/> */}

    <Stack.Navigator>
      <Stack.Screen 
      name="Home"
      component={Home}
      options={myOptions}
      />
      <Stack.Screen 
      name="CreateEmployee" 
      component={CreateEmployee}
      options={{...myOptions,title:"Create New Employee"}}
      />
      <Stack.Screen
      name="Profile"
      component={Profile}
      options={{...myOptions,title:"My Profile"}}
      />
    </Stack.Navigator>
    </View>
  );
}

export default()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e4e1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
