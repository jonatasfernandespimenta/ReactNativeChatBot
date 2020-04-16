import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Edit from '../Components/Edit';
import Commands from '../Components/Commands';

const Tab = createMaterialTopTabNavigator();

export default function ConfigRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Comandos" component={Commands}/>
      <Tab.Screen name="Edit" component={Edit}/>
    </Tab.Navigator>
  );
}