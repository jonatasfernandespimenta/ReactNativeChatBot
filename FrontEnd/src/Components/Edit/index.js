import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';

import { Container } from './styles';

import { editBotMsg } from '../../services/api';

export default function Edit() {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const editMsg = async () => {
    try{
      await editBotMsg(question, answer);
    } catch(e) {
     console.log('Erro ' + e);
    }
    Alert.alert('Enviado', 'Mensagem enviada com sucesso 😁', [
      { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true });
  }

  return (
    <Container>
      <Text>
        Aba para editar/adicionar coisas ao bot, por exemplo se escrever
        "Árvores são legais" em Pergunta e escrever "Eu concordo" em resposta, isso ficará salvo nele.
        {"\n"}{"\n"}
      </Text>
      <Text>Pergunta</Text>
      <Input value={question} onChangeText={(text) => setQuestion(text)} />
      <Text>Resposta</Text>
      <Input value={answer} onChangeText={(text) => setAnswer(text)} />

      <Text>{"\n"}</Text>
      
      <Button
        title="Enviar"
        onPress={editMsg}
      />

    </Container>
  );
}
