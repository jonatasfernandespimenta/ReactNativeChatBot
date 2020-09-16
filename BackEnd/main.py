from flask import Flask, request as req
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer, ListTrainer

app = Flask(__name__)

chatbot = ChatBot("Chatterbot", storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(chatbot)
#trainer2 = ListTrainer(chatbot)

convA = ['Oi', 'Olá, tudo bem?']

trainer.train("chatterbot.corpus.portuguese")
#trainer2.train(convA)


@app.route('/', methods=['GET'])
def test():
    return str('test')


@app.route('/post', methods=['POST'])
def get_bot_response():
    user_text = req.json['userText']
    bot_text = chatbot.get_response(str(user_text))
    return str(bot_text)


@app.route('/editmsg', methods=['POST'])
def edit_bot_msg():
    print(req.json)
    question = req.json['question']
    answer = req.json['answer']

    convA.append(question)
    convA.append(answer)

    trainer2.train(convA)

    return str('Done')


if __name__ == "__main__":
    app.run(host='0.0.0.0')

