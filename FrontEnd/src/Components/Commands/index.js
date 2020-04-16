import React from 'react';
import { View } from 'react-native';

import { ListItem } from 'react-native-elements'


export default function Commands() {
  const list = [
    {
      name: '!Toque <nome da musica>',
      subtitle: 'Toca a musica que você pediu'
    },
    {
      name: '!Abra <nome do aplcativo>',
      subtitle: 'Abre o aplicativo que você pediu (Obs: Funciona com Google, Instagram, Discord, Reddit e YouTube)'
    },
  ]
  return (
    <View>
    {
    list.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
    }
  </View>

  );
}
