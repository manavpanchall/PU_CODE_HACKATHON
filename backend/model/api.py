from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__) # Initialize the Flask app
model = pickle.load(open('my_model.pkl', 'rb')) # Load the trained model

@app.route('/') # Homepage
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Retrieve values from the request
    data = request.json
    # Convert the data to the format expected by the model
    final_features = [np.array(data)]
    prediction = model.predict(final_features) # Make a prediction
    # Return the prediction as JSON
    return jsonify({'prediction': prediction.tolist()})

if __name__ == "__main__":
    app.run(debug=True)

