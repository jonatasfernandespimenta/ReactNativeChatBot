# ReactNativeChatBot
A ChatBot with some plus functions.

## Technologies used
For this project I've used Python Flask for BackEnd and React Native for FrontEnd
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="180" alt="React Native"/>

  <img src="https://lh3.googleusercontent.com/proxy/m0IHTUp4yFUYUC6YVRZFR09a4FH01Y_EJTpU2VQKjatB29JX4opnSjt_iBwYirsEokO-LXsqUprmwEUyt5de4GqE1-v-rTplSLX6n5M" width="140" alt="React Native"/>
</p>

## How to run it
#### BackEnd
First you got to setup the BackEnd. For this, download [Python 3.6](https://www.python.org/downloads/release/python-360/)
<br/>
After it, you must download the dependencies by executing the following commands

```console
hello@world:~$ pip install Flask
hello@world:~$ pip install chatterbot
```
Now you just have to run it.
#### FrontEnd
For the frontend you'll have to install [NodeJS](https://nodejs.org/en/)
<br/>
After it, you'll need to install Expo, just execute the following command
```console
hello@world:~$ npm install -g expo-cli
```
Now go to the FrontEnd directory and execute
```console
hello@world:~$ npm i
hello@world:~$ npm start
```
And now all you gotta do is download Expo in your cellphone, scan the given QRCode and enjoy :D

## BackEnd Routes
|       Route         |      Method         |      Description   |
| :-----------------  | :----------------:  | :-----------------|
|  `/post`            |       POST          | Receive the message and responds to it           |
|  `/editmsg`         |       POST          | Receive two parameters (question and answer) and then add it to it's memory                   |
