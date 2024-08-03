import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './src/screens/ChatScreen';
import ApiIntegration from './src/screens/ApiIntegration';
import Users from './src/components/User';
import Permission from './src/screens/Permissions.js';
import TabScreen from './src/screens/TabScreen/index.js';
import Home from './src/screens/Home/index.js';
import Redux1 from './src/components/Redux.js';


const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='ChatScreen' component={ChatScreen} options={{headerShown:false}}/>
      <Stack.Screen name='ApiIntegration' component={ApiIntegration} options={{headerShown:false}}/>
      <Stack.Screen name='Redux1' component={Redux1} options={{headerShown:false}}/>
      <Stack.Screen name='Permission' component={Permission} options={{headerShown:false}}/>
      <Stack.Screen name='TabScreen' component={TabScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;