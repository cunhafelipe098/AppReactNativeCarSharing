import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

const Routes = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: "#535252"}, headerTintColor: "#FFF"}} >
        <Stack.Screen 
        name="Main" 
        component={Main} 
        options={{
          title: 'Usuários',
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
