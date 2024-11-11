import sys
import json
from tensorflow.keras.models import load_model
import numpy as np

# Cargar el modelo
model = load_model("CNNB169/CNNTTB169.h5")

# Obtiene los datos de entrada
input_data = json.loads(sys.argv[1])
input_array = np.array(input_data).reshape(1, -1)   # Convertir a numpy array

# Realizar la predicción
prediction = model.predict(input_array, verbose=0)

# Imprime el resultado en formato JSON
print(json.dumps({'prediction': prediction.tolist()}))