import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Chat from '../Components/Chat';
import ConfigRoutes from  './configRoutes';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="slide" >
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Confs" component={ConfigRoutes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
