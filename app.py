from flask import Flask, render_template, request, jsonify
from chatgpt import get_response, init_chatbot

init_chatbot()
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_message = request.form['user_message']
    bot_response = get_response(user_message)  # This function will return the chatbot's response
    return jsonify({'message': bot_response})

if __name__ == "__main__":
    app.run(debug=True)
