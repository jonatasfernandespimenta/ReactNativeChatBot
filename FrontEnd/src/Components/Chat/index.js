import React, {useState, useRef} from 'react';
import { Bubbles } from 'react-native-loader';
import { Linking } from 'expo';

import { botResponse } from '../../services/api';

import {
  FlatList,
} from 'react-native';

import Footer from '../Footer';
import Message from '../Message';

import { 
  Container,
  ChatContainer,
  Loading,
} from './styles';

const Chat = () => {
  const [messages, setMessages] = useState([{ author: 'BOT', message: 'Olá!' }]);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null);

  const sendMsg = async (text) => {

    if(text.toLowerCase().includes('!abra')) {
      const app = text.slice(5).toLowerCase();

      switch (app) {
        case ' instagram':
          Linking.openURL('https://www.instagram.com/?hl=pt-br')
          break;
        
        case ' google':
          Linking.openURL('https://www.google.com/');
          break;

        case ' discord':
          Linking.openURL('https://discordapp.com/');
          break;

        case ' reddit':
          Linking.openURL('https://reddit.com/');
          break;

        case ' youtube':
          Linking.openURL('https://youtube.com/');
          break;

        default:
          break;
      }
      setMessages((oldState) => [...oldState, { author: 'You', message: text }]);
      setMessages((oldState) => [...oldState, { author: 'BOT', message: 'Aplicativo aberto com sucesso 😁' }]);

    } 
    
    else if(text.toLowerCase().includes('!toque')) {
      const song = text.slice(6).toLowerCase();

      Linking.openURL('https://www.youtube.com/results?search_query=' + song);

      setMessages((oldState) => [...oldState, { author: 'You', message: text }]);
      setMessages((oldState) => [...oldState, { author: 'BOT', message: 'Iniciando a música 😁🎧' }]);
    }

    else {
      setLoading(true);
      setMessages((oldState) => [...oldState, { author: 'You', message: text }]);
      try {
        const response = await botResponse(text);
        setMessages((oldState) => [...oldState, { author: 'BOT', message: response.data }]);
        setLoading(false);
      } catch(err) {
        console.log(err);
        setLoading(false);
      }
    }

  };
  
  return (
    <Container>
      <ChatContainer>
        <FlatList 
          ref={scrollRef}
          data={messages}
          renderItem={({ item }) => (
            <Message author={item.author} message={item.message} received={item.author === 'BOT'} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={() => scrollRef.current.scrollToEnd()}
        />
      </ChatContainer>
      {loading && (
          <Loading>
            <Message author="BOT" received>
              <Bubbles size={4} color="#333" />
            </Message>
          </Loading>
        )}
      <Footer onSend={sendMsg}/>
    </Container>
  );
};

export default Chat;
