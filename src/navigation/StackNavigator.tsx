import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AddUser from '../screens/AddUser';
import EditUser from '../screens/EditUser';
import DetailsUser from '../screens/DetailsUser';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Página Inicial" component={Home} />
        <Stack.Screen name="AddUser" component={AddUser} options={{ title: '' }} />
        <Stack.Screen name="EditUser" component={EditUser}  options={{ title: '' }} />
        <Stack.Screen name="DetailsUser" component={DetailsUser}  options={{ title: 'Detalhes' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
