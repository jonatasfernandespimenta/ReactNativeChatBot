import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.86.5:5000',
});

export const botResponse = async (text) => {
    return await api.post('/post', { userText: text });
};

export const editBotMsg = async (question, answer) => {
    return await api.post('/editmsg', { question: question, answer: answer});
};
