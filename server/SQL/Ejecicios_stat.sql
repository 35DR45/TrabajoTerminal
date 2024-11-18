USE mydb;
delete from Leccion where Materia=1 and Tipo=1;
INSERT INTO Leccion VALUES(1111,"1.1.1E Ejercicios de medidas de tendencia central para datos agrupados y no agrupados", 1, 1,
'[
    {
        "Enunciado": "Encuentra la media de los siguientes números: 3,4,5,7,25,5,7",
        "R_Correcta": "8",
        "R_Falsas": ["10", "15", "25"],
        "R_Truco": "7"  
    },
    {
        "Enunciado": "Encuentra la moda de los siguientes números: 3,4,5,6,25,5,7",
        "R_Correcta": "5",
        "R_Falsas": ["4", "6", "25"],
        "R_Truco": "7"  
    },
    {
        "Enunciado": "Cuales son las medidas de tendencia central más usadas",
        "R_Correcta": "media, moda y mediana",
        "R_Falsas": [
            "mediana geométrica, varianza, desviación estándar",
            "Varianza, percentil 50, distancia euclidiana",
            "rango intercuartílico, moda cuadrática, mediana"
        ],
        "R_Truco": "media, varianza y mediana"
    },
    {
        "Enunciado": "Encuentra la mediana de los siguientes números: 3,4,5,6,7,25,30",
        "R_Correcta": "6",
        "R_Falsas": ["4", "5", "25"],
        "R_Truco": "7"
    },
    {
        "Enunciado": "Encuentra la media y moda de los siguientes números: 2, 3, 4, 4, 5, 6",
        "R_Correcta": "media = 4, moda = 4",
        "R_Falsas": [
            "media = 4, moda = 3",
            "media = 3.5, moda = 4",
            "media = 3, moda = 3"
        ],
        "R_Truco": "media = 4.5, moda = 4"
    }
]');
INSERT INTO Leccion VALUES(1121,"1.1.2E Ejercicios de medidas de dispersión para datos agrupados y no agrupados", 1, 1,
'[
    {
        "Enunciado": "Son algunas medidas de dispersión",
        "R_Correcta": "Rango, Varianza y desviación estándar",
        "R_Falsas": ["media, moda y mediana", "Cuartiles y percentiles", "Frecuencia y media geométrica"],
        "R_Truco": "Rango, mediana y desviación estándar"
    },
    {
        "Enunciado": "Calcula el rango de los siguientes números: 3,4,5,6,25,5,7",
        "R_Correcta": "22",
        "R_Falsas": ["20", "18", "25"],
        "R_Truco": "21" 
    },
    {
        "Enunciado": "La varianza es:",
        "R_Correcta": "La variabilidad de un conjunto de datos relacionados o no.",
        "R_Falsas": [
            "El promedio de todos los valores en un conjunto de datos",
            "La diferencia entre el valor máximo y el mínimo en un conjunto de datos",
            "La suma de todos los valores en un conjunto"
        ],
        "R_Truco": "La dispersión de los datos alrededor del valor máximo"
    },
    {
        "Enunciado": "¿Qué significa la desviación estándar en un conjunto de datos?",
        "R_Correcta": "La desviación estándar mide cuánto se dispersan los datos respecto a la media.",
        "R_Falsas": [
            "La desviación estándar es la suma de todos los valores en un conjunto.",
            "La desviación estándar indica el valor máximo en un conjunto de datos.",
            "La desviación estándar es igual a la media de los datos."
        ],
        "R_Truco": "La desviación estándar mide la dispersión respecto a la moda"
    },
    {
        "Enunciado": "Calcula la varianza del siguiente conjunto de datos: 4, 6, 8.",
        "R_Correcta": "4",
        "R_Falsas": ["2", "6", "8"],
        "R_Truco": "4.5" 
    }
]');
INSERT INTO Leccion VALUES(1131,"1.1.3E Ejercicios de Cuartiles y percentiles", 1, 1,
'[
    {
        "Enunciado": "¿Qué son los cuartiles en un conjunto de datos y qué representan?",
        "R_Correcta": "Los cuartiles dividen un conjunto de datos en cuatro partes iguales, donde Q1 es el 25% de los datos, Q2 es la mediana (50%) y Q3 es el 75%.",
        "R_Falsas": [
            "Los cuartiles son las medias de los valores máximos y mínimos.",
            "Los cuartiles son siempre los valores más cercanos al promedio.",
            "Los cuartiles solo se aplican a conjuntos de datos con un número par de elementos."
        ],
        "R_Truco": "Los cuartiles dividen los datos en tres partes iguales"
    },
    {
        "Enunciado": "Encuentra el primer cuartil (Q1) del siguiente conjunto de datos: 2, 4, 6, 8, 10.",
        "R_Correcta": "4",
        "R_Falsas": ["2", "6", "8"],
        "R_Truco": "5"
    },
    {
        "Enunciado": "Encuentra el tercer cuartil (Q3) del siguiente conjunto de datos: 3, 5, 7, 9.",
        "R_Correcta": "8",
        "R_Falsas": ["7", "9", "5"],
        "R_Truco": "6"
    },
    {
        "Enunciado": "¿Cuál es el percentil 25 (P25) del siguiente conjunto de datos: 1, 3, 7, 8, 10, 12?",
        "R_Correcta": "5",
        "R_Falsas": ["3", "7", "1"],
        "R_Truco": "4"
    },
    {
        "Enunciado": "Encuentra los cuartiles Q1 y Q3 del siguiente conjunto de datos: 3, 6, 9, 12, 15, 18, 21.",
        "R_Correcta": "Q1: 9, Q3: 18",
        "R_Falsas": ["Q1: 6, Q3: 15", "Q1: 3, Q3: 21", "Q1: 12, Q3: 15"],
        "R_Truco": "Q1: 9, Q3: 15"
    }
]');
INSERT INTO Leccion VALUES(1141,"1.1.4E Ejercicios de Diagramas de Caja, Histograma, graficas de dispersión simple y grafica qq", 1, 1,
'[
    {
        "Enunciado": "¿Qué información proporciona un diagrama de caja sobre un conjunto de datos?",
        "R_Correcta": "Un diagrama de caja muestra la mediana, los cuartiles y los valores atípicos del conjunto de datos.",
        "R_Falsas": [
            "Un diagrama de caja solo muestra el valor máximo y mínimo.",
            "Un diagrama de caja es un tipo de gráfico circular.",
            "Un diagrama de caja representa la frecuencia de los datos."
        ],
        "R_Truco": "Un diagrama de caja muestra la media y los cuartiles de los datos"
    },
    {
        "Enunciado": "¿Qué representa un histograma en un conjunto de datos?",
        "R_Correcta": "Un histograma muestra la distribución de frecuencias de los datos en intervalos o bins.",
        "R_Falsas": [
            "Un histograma muestra solo el promedio de los datos.",
            "Un histograma representa datos categóricos en formato de barras.",
            "Un histograma indica únicamente los valores máximos y mínimos."
        ],
        "R_Truco": "Un histograma muestra la mediana de los datos en intervalos"
    },
    {
        "Enunciado": "¿Qué se puede inferir de un gráfico de dispersión?",
        "R_Correcta": "Un gráfico de dispersión muestra la relación entre dos variables y puede indicar correlación.",
        "R_Falsas": [
            "Un gráfico de dispersión solo muestra la media de los datos.",
            "Un gráfico de dispersión es útil solo para datos categóricos.",
            "Un gráfico de dispersión representa la variabilidad de una sola variable."
        ],
        "R_Truco": "Un gráfico de dispersión muestra la media de dos variables"
    },
    {
        "Enunciado": "¿Cuál es el propósito principal de un gráfico QQ?",
        "R_Correcta": "Un gráfico QQ se utiliza para comparar la distribución de un conjunto de datos con una distribución teórica, como la normal.",
        "R_Falsas": [
            "Un gráfico QQ muestra solo los valores atípicos.",
            "Un gráfico QQ es un tipo de histograma.",
            "Un gráfico QQ indica la media y la varianza de los datos."
        ],
        "R_Truco": "Un gráfico QQ se usa para comparar la dispersión entre dos conjuntos de datos"
    },
    {
        "Enunciado": "¿Cuál es la principal diferencia entre un diagrama de caja y un histograma?",
        "R_Correcta": "Un diagrama de caja resume estadísticas descriptivas como la mediana y cuartiles, mientras que un histograma muestra la distribución de frecuencias de los datos.",
        "R_Falsas": [
            "Un diagrama de caja muestra la distribución de frecuencias, y un histograma muestra cuartiles.",
            "Ambos gráficos representan los mismos datos pero de diferentes maneras.",
            "Un diagrama de caja solo puede usarse con datos categóricos, mientras que un histograma es para datos numéricos."
        ],
        "R_Truco": "Un diagrama de caja muestra los valores atípicos y un histograma muestra la media"
    }
]');
 INSERT INTO Leccion VALUES(1211,"1.2.1E Ejercicios de Prueba de bondad de ajuste", 1, 1,
 '[
    {
        "Enunciado": "¿Qué es una prueba de bondad de ajuste?",
        "R_Correcta": "Es una prueba estadística que evalúa si un conjunto de datos se ajusta a una distribución teórica específica.",
        "R_Falsas": [
            "Es una prueba que determina el promedio de un conjunto de datos.",
            "Es una técnica utilizada únicamente para datos categóricos.",
            "Es un método que compara dos muestras de datos."
        ],
        "R_Truco": "Es una prueba que mide la variabilidad dentro de un conjunto de datos"
    },
    {
        "Enunciado": "¿Cuál es el objetivo principal de la prueba de Chi-cuadrado para la bondad de ajuste?",
        "R_Correcta": "Evaluar si la frecuencia observada en los datos se ajusta a las frecuencias esperadas bajo una hipótesis nula.",
        "R_Falsas": [
            "Determinar la media de un conjunto de datos.",
            "Comparar la varianza de dos conjuntos de datos.",
            "Establecer correlación entre dos variables."
        ],
        "R_Truco": "Comparar las frecuencias observadas con la media de los datos"
    },
    {
        "Enunciado": "¿Qué hipótesis se establece en una prueba de bondad de ajuste?",
        "R_Correcta": "La hipótesis nula (H0) establece que los datos se ajustan a la distribución teórica propuesta.",
        "R_Falsas": [
            "La hipótesis nula establece que todos los datos son iguales.",
            "La hipótesis alternativa establece que los datos se ajustan a la distribución teórica.",
            "La hipótesis nula se utiliza solo para datos categóricos."
        ],
        "R_Truco": "La hipótesis nula establece que las frecuencias observadas y esperadas son exactamente iguales"
    },
    {
        "Enunciado": "¿Qué se debe hacer si el valor p resultante de una prueba de bondad de ajuste es menor que el nivel de significancia?",
        "R_Correcta": "Se rechaza la hipótesis nula, indicando que los datos no se ajustan a la distribución teórica.",
        "R_Falsas": [
            "Se acepta la hipótesis nula.",
            "Se realiza una nueva prueba sin cambios.",
            "Se concluye que los datos son idénticos."
        ],
        "R_Truco": "Se ajusta el nivel de significancia para que coincida con el valor p"
    },
    {
        "Enunciado": "Un conjunto de datos tiene las siguientes frecuencias observadas: 10, 20, 15, 5. Si las frecuencias esperadas son 12, 18, 15, 5, calcula el valor de Chi-cuadrado.",
        "R_Correcta": "0.55",
        "R_Falsas": ["1.33", "2.25", "0.75"],
        "R_Truco": "1.00"
    }
]');
INSERT INTO Leccion VALUES(1221,"1.2.2E Ejercicios de Prueba de hipótesis (errores tipo 1 y 2)", 1, 1,
'[
    {
        "Enunciado": "¿Qué es la hipótesis nula (H0) en estadística?",
        "R_Correcta": "Es una suposición inicial que establece que no hay efecto o diferencia significativa en los datos.",
        "R_Falsas": [
            "Es una suposición que siempre se acepta como verdadera.",
            "Es la única hipótesis que se puede probar en un estudio.",
            "Es la hipótesis que se utiliza para establecer una correlación."
        ],
        "R_Truco": "Es una suposición que establece que siempre hay una diferencia significativa en los datos"
    },
    {
        "Enunciado": "¿Qué se entiende por estadístico de contraste (TS)?",
        "R_Correcta": "Es un valor calculado a partir de los datos de la muestra que se utiliza para decidir si rechazar la hipótesis nula.",
        "R_Falsas": [
            "Es el promedio de todos los datos de la muestra.",
            "Es la mediana de los datos de la población.",
            "Es un valor fijo que no cambia con diferentes muestras."
        ],
        "R_Truco": "Es un valor que indica el promedio de los datos muestrales"
    },
    {
        "Enunciado": "¿Qué es la región crítica (C) en una prueba de hipótesis?",
        "R_Correcta": "Es el conjunto de valores para los cuales se rechaza la hipótesis nula.",
        "R_Falsas": [
            "Es la zona donde se aceptan todas las hipótesis.",
            "Es el rango de valores que no se utilizan en el análisis.",
            "Es el mismo que el nivel de significancia α."
        ],
        "R_Truco": "Es el conjunto de valores para los cuales se acepta la hipótesis alternativa"
    },
    {
        "Enunciado": "¿Qué indica un valor p menor que el nivel de significancia α?",
        "R_Correcta": "Indica que hay suficiente evidencia para rechazar la hipótesis nula.",
        "R_Falsas": [
            "Indica que la hipótesis nula debe ser aceptada.",
            "Significa que los datos son siempre normales.",
            "Indica que no hay relación entre las variables."
        ],
        "R_Truco": "Indica que no hay suficiente evidencia para rechazar la hipótesis nula"
    },
    {
        "Enunciado": "¿Cuál es un ejemplo de error de tipo 1?",
        "R_Correcta": "Rechazar la hipótesis nula cuando en realidad es cierta.",
        "R_Falsas": [
            "No rechazar la hipótesis nula cuando es falsa.",
            "Aceptar una hipótesis alternativa sin evidencia.",
            "Confundir dos poblaciones en el análisis."
        ],
        "R_Truco": "No rechazar la hipótesis nula cuando en realidad es cierta"
    }
]');
INSERT INTO Leccion VALUES(1231,"1.2.3E Ejercicios de estimadores", 1, 1, 
'[
    {
        "Enunciado": "¿Qué representa el símbolo ĉ en estadística?",
        "R_Correcta": "El símbolo ĉ representa un estimador puntual de un parámetro poblacional.",
        "R_Falsas": [
            "El símbolo ĉ representa el error estándar de la media.",
            "El símbolo ĉ se usa para denotar la mediana de los datos.",
            "El símbolo ĉ es un valor absoluto en un conjunto de datos."
        ],
        "R_Truco": "El símbolo ĉ representa el tamaño de la muestra"
    },
    {
        "Enunciado": "¿Cuál es la diferencia entre un estimador puntual y un intervalo de confianza?",
        "R_Correcta": "Un estimador puntual proporciona un solo valor para un parámetro, mientras que un intervalo de confianza proporciona un rango de valores dentro del cual se espera que se encuentre el parámetro.",
        "R_Falsas": [
            "Un estimador puntual siempre es más preciso que un intervalo de confianza.",
            "Un intervalo de confianza no puede ser utilizado para estimar parámetros poblacionales.",
            "Ambos proporcionan la misma información sobre la población."
        ],
        "R_Truco": "Un intervalo de confianza siempre proporciona un valor único, mientras que el estimador puntual da un rango"
    },
    {
        "Enunciado": "¿Por qué es importante la estimación puntual en estadísticas?",
        "R_Correcta": "Es importante porque proporciona una estimación clara y concisa del valor de un parámetro poblacional.",
        "R_Falsas": [
            "No es importante, ya que solo complica el análisis.",
            "Solo se utiliza en muestras grandes.",
            "Se usa únicamente para datos categóricos."
        ],
        "R_Truco": "Es importante porque permite conocer la mediana de la población"
    },
    {
        "Enunciado": "Si el estimador puntual de la media de una muestra es ĉ = 50, ¿qué significa esto?",
        "R_Correcta": "Significa que se estima que la media del parámetro poblacional es 50.",
        "R_Falsas": [
            "Significa que la media de todos los datos es 50.",
            "Significa que la media es 50 con un error del 10%.",
            "Indica que el 50% de los datos son menores que 50."
        ],
        "R_Truco": "Significa que el valor mediano de los datos es 50"
    },
    {
        "Enunciado": "Si se dice que ĉ = 30 es un estimador puntual, ¿cuál es su posible implicación en la investigación?",
        "R_Correcta": "Indica que se estima que el parámetro poblacional es aproximadamente 30.",
        "R_Falsas": [
            "Indica que el 30% de la muestra tiene un valor de 30.",
            "Significa que 30 es el valor máximo en la población.",
            "Indica que todos los datos son iguales a 30."
        ],
        "R_Truco": "Indica que el promedio de la muestra es 30"
    }
]');
INSERT INTO Leccion VALUES(1241,"1.2.4E Ejercicios de Análisis de la varianza ANOVA", 1, 1, 
'[
    {
        "Enunciado": "¿Qué es ANOVA en estadística?",
        "R_Correcta": "ANOVA es un método para inferir sobre parámetros relacionados a las medias poblacionales.",
        "R_Falsas": [
            "ANOVA es una prueba que solo se utiliza para datos categóricos.",
            "ANOVA calcula la mediana de un conjunto de datos.",
            "ANOVA es un método que solo compara dos grupos."
        ],
        "R_Truco": "ANOVA es un método para comparar la media y la mediana de diferentes grupos"
    },
    {
        "Enunciado": "En un análisis de varianza unifactorial, ¿qué estimadores se consideran?",
        "R_Correcta": "Se considera la varianza poblacional y un segundo estimador que es válido cuando la hipótesis nula es cierta.",
        "R_Falsas": [
            "Solo se considera la media muestral.",
            "Se utilizan dos estimadores diferentes para cada grupo.",
            "El segundo estimador no es necesario en ANOVA."
        ],
        "R_Truco": "Se considera únicamente la media poblacional como estimador"
    },
    {
        "Enunciado": "¿Qué distribución sigue el estadístico de contraste (TS) en ANOVA unifactorial?",
        "R_Correcta": "TS sigue la distribución F con m-1 grados de libertad en el numerador y m(n-1) grados de libertad en el denominador.",
        "R_Falsas": [
            "TS sigue una distribución normal.",
            "TS sigue una distribución t de Student.",
            "TS es siempre un valor constante."
        ],
        "R_Truco": "TS sigue una distribución normal con grados de libertad"
    },
    {
        "Enunciado": "¿Cuál es el propósito de calcular el estadístico de contraste (TS) en ANOVA?",
        "R_Correcta": "Determinar lo grande que puede ser TS para justificar el rechazo de la hipótesis nula (H0).",
        "R_Falsas": [
            "Calcular el promedio de las medias muestrales.",
            "Establecer la relación entre dos variables.",
            "Determinar la varianza de la población."
        ],
        "R_Truco": "Calcular la mediana de las medias muestrales"
    },
    {
        "Enunciado": "Si en un ANOVA unifactorial se obtiene un valor de TS muy alto, ¿qué implica esto en relación con la hipótesis nula?",
        "R_Correcta": "Implica que hay evidencia suficiente para rechazar la hipótesis nula (H0).",
        "R_Falsas": [
            "Significa que todas las medias son iguales.",
            "Indica que no hay variabilidad entre los grupos.",
            "Significa que la varianza es cero."
        ],
        "R_Truco": "Significa que hay poca evidencia para rechazar la hipótesis nula"
    }
]');
 INSERT INTO Leccion VALUES(1251,"1.2.5E Ejercicios de Prueba Chi cuadrada", 1, 1, 
 '[
    {
        "Enunciado": "¿Qué se busca al ajustar una distribución teórica a una distribución empírica?",
        "R_Correcta": "Se busca determinar si los resultados observados se alinean con lo que se esperaría bajo la distribución teórica.",
        "R_Falsas": [
            "Se busca calcular el promedio de ambos conjuntos de datos.",
            "Se busca establecer una correlación entre dos variables.",
            "Se busca determinar el tamaño de la muestra necesaria."
        ],
        "R_Truco": "Se busca establecer que ambas distribuciones tienen la misma media"
    },
    {
        "Enunciado": "¿Cuál es un método común para evaluar el ajuste de una distribución teórica?",
        "R_Correcta": "La prueba de Chi-cuadrado es un método común para evaluar el ajuste.",
        "R_Falsas": [
            "La regresión lineal se utiliza para evaluar el ajuste de distribuciones.",
            "El análisis de varianza (ANOVA) es el método más adecuado.",
            "La prueba t de Student se usa para este propósito."
        ],
        "R_Truco": "La prueba de correlación es un método común para evaluar el ajuste"
    },
    {
        "Enunciado": "¿Qué significa que una distribución empírica se ajuste bien a una distribución teórica?",
        "R_Correcta": "Significa que las frecuencias observadas se parecen a las frecuencias esperadas de la distribución teórica.",
        "R_Falsas": [
            "Significa que todas las observaciones son iguales.",
            "Significa que la media de la distribución empírica es la misma que la de la teórica.",
            "Significa que no hay variabilidad en los datos."
        ],
        "R_Truco": "Significa que las medianas de ambas distribuciones son idénticas"
    },
    {
        "Enunciado": "¿Qué implica un valor p alto en una prueba de ajuste?",
        "R_Correcta": "Indica que no hay suficiente evidencia para rechazar la hipótesis de que las distribuciones son iguales.",
        "R_Falsas": [
            "Significa que las distribuciones son exactamente iguales.",
            "Implica que se debe aceptar la hipótesis alternativa.",
            "Indica que la muestra es demasiado pequeña."
        ],
        "R_Truco": "Indica que hay suficiente evidencia para aceptar la hipótesis alternativa"
    },
    {
        "Enunciado": "¿Cuál es un resultado posible si se rechaza la hipótesis de ajuste en una prueba de bondad de ajuste?",
        "R_Correcta": "Se concluye que la distribución empírica no se ajusta a la distribución teórica propuesta.",
        "R_Falsas": [
            "Se acepta que ambas distribuciones son idénticas.",
            "Se determina que la varianza es cero.",
            "Se concluye que todas las observaciones son atípicas."
        ],
        "R_Truco": "Se concluye que ambas distribuciones tienen la misma media pero diferente varianza"
    }
]');
 INSERT INTO Leccion VALUES(2111,"2.1.1E Ejercicios de Cálculo de coeficientes de regresión", 1, 1, 
'[
    {
        "Enunciado": "¿Qué representan los coeficientes de regresión en un modelo de regresión lineal?",
        "R_Correcta": "Los coeficientes de regresión representan el cambio esperado en la variable dependiente por cada unidad de cambio en la variable independiente.",
        "R_Falsas": [
            "Los coeficientes de regresión son siempre iguales a uno.",
            "Representan la media de la variable dependiente.",
            "Indican la correlación entre las variables."
        ],
        "R_Truco": "Los coeficientes de regresión representan el cambio porcentual en la variable dependiente"
    },
    {
        "Enunciado": "¿Cuál es la fórmula general de una ecuación de regresión lineal simple?",
        "R_Correcta": "La fórmula es Y = β0 + β1X + ε, donde β0 es la intersección y β1 es el coeficiente de regresión.",
        "R_Falsas": [
            "La fórmula es Y = β1X + ε.",
            "La fórmula no incluye un término de error.",
            "La fórmula solo se aplica a datos categóricos."
        ],
        "R_Truco": "La fórmula es Y = β0 + β1X, sin un término de error"
    },
    {
        "Enunciado": "¿Cómo se interpreta el coeficiente de regresión β1 en un modelo de regresión lineal?",
        "R_Correcta": "β1 indica cuántas unidades cambia Y por cada unidad que cambia X.",
        "R_Falsas": [
            "β1 representa la suma de todos los valores de Y.",
            "β1 es el valor promedio de Y.",
            "β1 indica la relación entre dos variables categóricas."
        ],
        "R_Truco": "β1 representa el porcentaje de cambio en Y por cada unidad de cambio en X"
    },
    {
        "Enunciado": "¿Qué método se utiliza comúnmente para calcular los coeficientes de regresión en un modelo lineal?",
        "R_Correcta": "Se utiliza el método de mínimos cuadrados para calcular los coeficientes de regresión.",
        "R_Falsas": [
            "Se utiliza el método de máxima verosimilitud.",
            "Se utilizan estimaciones aleatorias.",
            "Se utiliza el análisis de varianza (ANOVA)."
        ],
        "R_Truco": "Se utiliza el método de máxima desviación para calcular los coeficientes de regresión"
    },
    {
        "Enunciado": "Si un modelo de regresión lineal tiene un coeficiente de determinación (R²) de 0.85, ¿qué implica esto?",
        "R_Correcta": "Implica que el 85% de la variabilidad de la variable dependiente se explica por la variable independiente.",
        "R_Falsas": [
            "Significa que las variables están perfectamente correlacionadas.",
            "Indica que no hay relación entre las variables.",
            "Significa que el modelo es ineficaz para predecir Y."
        ],
        "R_Truco": "Implica que el 85% de los valores de la variable dependiente son mayores que los de la independiente"
    }
]');
INSERT INTO Leccion VALUES(2121,"2.1.2E Ejercicios de Interpretación de los coeficientes usando la m, v y cv de las muestras", 1, 1, 
'[
    {
        "Enunciado": "¿Cómo se relaciona la media de las muestras con el cálculo de los coeficientes de regresión?",
        "R_Correcta": "La media de las muestras se utiliza para centrar los datos y calcular los coeficientes de regresión, ayudando a interpretar el cambio en Y por unidad de cambio en X.",
        "R_Falsas": [
            "La media no se utiliza en el cálculo de los coeficientes de regresión.",
            "La media siempre es cero en regresión.",
            "La media solo se usa para datos categóricos."
        ],
        "R_Truco": "La media se utiliza para determinar el valor máximo de los coeficientes de regresión"
    },
    {
        "Enunciado": "¿Qué papel juega la varianza en la interpretación de los coeficientes de regresión?",
        "R_Correcta": "La varianza mide la dispersión de los datos, lo que ayuda a entender la estabilidad de la relación entre las variables.",
        "R_Falsas": [
            "La varianza se utiliza para calcular la media de las muestras.",
            "La varianza no afecta la regresión lineal.",
            "La varianza es irrelevante en el análisis de regresión."
        ],
        "R_Truco": "La varianza se usa para estimar el valor de la covarianza entre las variables"
    },
    {
        "Enunciado": "¿Cómo se interpreta la covarianza en el contexto de la regresión?",
        "R_Correcta": "La covarianza indica la dirección de la relación lineal entre dos variables, donde valores positivos indican que ambas variables aumentan juntas.",
        "R_Falsas": [
            "La covarianza siempre es igual a la varianza.",
            "La covarianza se utiliza solo para datos cualitativos.",
            "La covarianza no tiene relación con los coeficientes de regresión."
        ],
        "R_Truco": "La covarianza indica la magnitud de la relación, pero no la dirección"
    },
    {
        "Enunciado": "Si un coeficiente de regresión β1 es positivo, ¿qué se puede inferir sobre la varianza de las muestras?",
        "R_Correcta": "Indica que un aumento en la variable independiente X está asociado con un aumento en la variable dependiente Y, asumiendo que la varianza no es cero.",
        "R_Falsas": [
            "Indica que las dos variables son independientes.",
            "Significa que no hay variabilidad en los datos.",
            "Implica que Y disminuye cuando X aumenta."
        ],
        "R_Truco": "Indica que la varianza de Y es menor que la de X"
    },
    {
        "Enunciado": "¿Cuál es la relación entre la covarianza y la varianza en el contexto de los coeficientes de regresión?",
        "R_Correcta": "La covarianza se utiliza para calcular la correlación y los coeficientes de regresión, y está relacionada con la varianza de ambas variables.",
        "R_Falsas": [
            "La covarianza es siempre mayor que la varianza.",
            "La varianza se calcula a partir de la covarianza.",
            "No hay relación entre covarianza y varianza en regresión."
        ],
        "R_Truco": "La covarianza es el cuadrado de la varianza en el contexto de la regresión"
    }
]');
INSERT INTO Leccion VALUES(2131,"2.1.3E Ejercicios de Interpretación de los términos de error", 1, 1, 
'[
    {
        "Enunciado": "¿Qué se entiende por término de error en un modelo de regresión lineal?",
        "R_Correcta": "El término de error representa la diferencia entre los valores observados y los valores predichos por el modelo.",
        "R_Falsas": [
            "El término de error es la varianza de la variable dependiente.",
            "El término de error es siempre cero.",
            "El término de error mide la media de los datos."
        ],
        "R_Truco": "El término de error es la diferencia entre los valores predichos y la media de los valores observados"
    },
    {
        "Enunciado": "¿Por qué es importante analizar el término de error en una regresión lineal?",
        "R_Correcta": "Es importante porque ayuda a evaluar la precisión del modelo y a identificar la variabilidad no explicada en los datos.",
        "R_Falsas": [
            "No es relevante; solo se considera la pendiente del modelo.",
            "Es importante solo si el modelo es lineal.",
            "Los términos de error son irrelevantes para la validación del modelo."
        ],
        "R_Truco": "Es importante porque define la relación directa entre las variables"
    },
    {
        "Enunciado": "Si el término de error es muy grande en un modelo de regresión, ¿qué implica esto?",
        "R_Correcta": "Implica que el modelo tiene un bajo ajuste y que hay una gran discrepancia entre los valores observados y los predichos.",
        "R_Falsas": [
            "Significa que el modelo es perfecto.",
            "Indica que las variables están correlacionadas perfectamente.",
            "Implica que todos los datos son idénticos."
        ],
        "R_Truco": "Significa que el modelo tiene una alta precisión y ajuste perfecto"
    },
    {
        "Enunciado": "¿Qué puede indicar un patrón en los términos de error de un modelo de regresión lineal?",
        "R_Correcta": "Un patrón puede indicar que el modelo no está capturando adecuadamente la relación entre las variables y sugiere la necesidad de un modelo diferente.",
        "R_Falsas": [
            "Los patrones en los términos de error son siempre aleatorios.",
            "Indica que no hay errores en los datos.",
            "Los patrones son un signo de un modelo bien ajustado."
        ],
        "R_Truco": "Un patrón en los términos de error indica un modelo perfectamente ajustado"
    },
    {
        "Enunciado": "Dada la siguiente información: en un modelo de regresión, los valores observados son [10, 12, 14] y los valores predichos son [9, 13, 15]. Calcula los términos de error.",
        "R_Correcta": "[1, -1, -1]",
        "R_Falsas": [
            "[0, 1, 1]",
            "[2, -1, 0]",
            "[1, 1, -2]"
        ],
        "R_Truco": "[1, 0, -1]"
    }
]');
INSERT INTO Leccion VALUES(2201,"2.2.0E Ejercicios de Regresión no lineal", 1, 1, 
'[
    {
        "Enunciado": "¿Cuál es la principal diferencia entre regresión lineal y regresión no lineal?",
        "R_Correcta": "La regresión no lineal permite que la relación entre la variable independiente y dependiente se ajuste a una curva, no solo a una línea recta.",
        "R_Falsas": [
            "La regresión no lineal siempre produce resultados menos precisos.",
            "La regresión no lineal utiliza solo datos categóricos.",
            "La regresión no lineal no se puede graficar."
        ],
        "R_Truco": "La regresión no lineal solo puede ajustarse a una línea curva específica"
    },
    {
        "Enunciado": "En un modelo de regresión no lineal, si se utiliza una función cuadrática, ¿cuál es la forma general de la ecuación?",
        "R_Correcta": "La forma general es Y = β0 + β1X + β2X² + ε.",
        "R_Falsas": [
            "La forma general es Y = β0 + β1X.",
            "La forma general es Y = β0 + β1X + β2X³.",
            "La forma general es Y = β0 + β1X + β2ln(X)."
        ],
        "R_Truco": "La forma general es Y = β0 + β1X + β2X³ + ε"
    },
    {
        "Enunciado": "Si se tiene un modelo de regresión no lineal en el que Y = 5 + 2X², ¿cuál es el efecto de un aumento de 1 unidad en X sobre Y?",
        "R_Correcta": "Un aumento de 1 unidad en X aumenta Y en 2X, lo que significa que el efecto dependerá del valor actual de X.",
        "R_Falsas": [
            "Un aumento de 1 unidad en X siempre aumenta Y en 2.",
            "Un aumento de 1 unidad en X no afecta a Y.",
            "El efecto es constante, independientemente del valor de X."
        ],
        "R_Truco": "Un aumento de 1 unidad en X aumenta siempre Y en 2, sin depender de X"
    },
    {
        "Enunciado": "¿Qué indica un coeficiente de determinación (R²) bajo en un modelo de regresión no lineal?",
        "R_Correcta": "Indica que el modelo no explica bien la variabilidad de los datos observados.",
        "R_Falsas": [
            "Indica que el modelo es perfecto.",
            "Significa que todas las variables son independientes.",
            "Indica que la relación es lineal."
        ],
        "R_Truco": "Indica que el modelo explica perfectamente la variabilidad de los datos"
    },
    {
        "Enunciado": "Dada la siguiente relación cuadrática: Y = 2 + 3X - X². ¿Qué valor de Y obtendrías para X = 4?",
        "R_Correcta": "Y = 2 + 3(4) - (4)² = 2 + 12 - 16 = -2.",
        "R_Falsas": [
            "Y = 2 + 3(4) + (4)² = 18.",
            "Y = 2 + 3(4) - 4 = 14.",
            "Y = 2 + 3(2) - (2)² = 5."
        ],
        "R_Truco": "Y = 2 + 3(4) - (4)² = 2 + 12 + 16 = 30"
    }
]');
 INSERT INTO Leccion VALUES(2211,"2.2.1E Ejercicios de Transformada log-log y semi-log", 1, 1, 
 '[
    {
        "Enunciado": "¿Qué es una transformación log-log en un modelo de regresión?",
        "R_Correcta": "Es una transformación en la que tanto la variable dependiente como la independiente se transforman aplicando logaritmos, permitiendo modelar relaciones proporcionales.",
        "R_Falsas": [
            "Solo se aplica logaritmo a la variable dependiente.",
            "Se usa para transformar datos categóricos.",
            "Es una transformación que solo se aplica a modelos lineales."
        ],
        "R_Truco": "Solo se aplica logaritmo a la variable independiente"
    },
    {
        "Enunciado": "En un modelo semi-logarítmico, ¿qué variable se transforma usando logaritmos?",
        "R_Correcta": "Se transforma la variable dependiente, mientras que la variable independiente permanece en su forma original.",
        "R_Falsas": [
            "Se transforma la variable independiente.",
            "Ambas variables se transforman usando logaritmos.",
            "No se utiliza logaritmo en absoluto."
        ],
        "R_Truco": "Se transforma solo la variable independiente, mientras que la dependiente queda igual"
    },
    {
        "Enunciado": "Dada la relación Y = 100X^2, ¿cómo se expresaría esta relación en forma log-log?",
        "R_Correcta": "Log(Y) = 2*Log(X) + Log(100).",
        "R_Falsas": [
            "Log(Y) = 2X + 100.",
            "Y = 2Log(X) + 100.",
            "Y = Log(100) + Log(X^2)."
        ],
        "R_Truco": "Log(Y) = Log(100X^2)"
    },
    {
        "Enunciado": "Si en un modelo semi-logarítmico la relación es Y = 5 + 3X, ¿cómo se expresa la variable dependiente Y en forma logarítmica?",
        "R_Correcta": "Log(Y) = Log(5 + 3X).",
        "R_Falsas": [
            "Log(Y) = 5 + 3Log(X).",
            "Y = 5Log(3X).",
            "Log(Y) = 5 + 3X."
        ],
        "R_Truco": "Log(Y) = Log(5) + 3X"
    },
    {
        "Enunciado": "Si al aplicar una transformación log-log a los datos se obtiene un coeficiente de regresión de 1.5, ¿qué implica esto sobre la relación entre las variables?",
        "R_Correcta": "Implica que un aumento del 1% en la variable independiente se asocia con un aumento del 1.5% en la variable dependiente.",
        "R_Falsas": [
            "Implica que la variable dependiente no se ve afectada por la independiente.",
            "Indica una relación negativa entre las variables.",
            "Implica que la relación es constante y no proporcional."
        ],
        "R_Truco": "Implica que un aumento de una unidad en la variable independiente incrementa en 1.5 la dependiente"
    }
]' );
INSERT INTO Leccion VALUES(2221,"2.2.2E Ejercicios de Optimizacion no lineal", 1, 1, 
'[
    {
        "Enunciado": "¿Qué es la optimización no lineal?",
        "R_Correcta": "Es el proceso de encontrar el máximo o mínimo de funciones que no son lineales, donde la relación entre variables no se puede expresar como una línea recta.",
        "R_Falsas": [
            "Es un método que solo se aplica a funciones lineales.",
            "Se refiere únicamente a la optimización de funciones cuadráticas.",
            "Es el proceso de resolver ecuaciones lineales."
        ],
        "R_Truco": "Es un proceso que solo encuentra el máximo de funciones cuadráticas"
    },
    {
        "Enunciado": "En la función f(x, y) = x² + y², ¿cuál es el punto que minimiza la función?",
        "R_Correcta": "(0, 0).",
        "R_Falsas": [
            "(1, 1).",
            "(2, 2).",
            "(0, 1)."
        ],
        "R_Truco": "(1, 0)"
    },
    {
        "Enunciado": "¿Cómo se pueden encontrar los extremos de una función no lineal de varias variables?",
        "R_Correcta": "Se utilizan derivadas parciales y se igualan a cero para encontrar los puntos críticos.",
        "R_Falsas": [
            "Se evalúa la función solo en puntos específicos.",
            "Se calcula la integral de la función.",
            "No se necesita usar derivadas."
        ],
        "R_Truco": "Se utilizan derivadas parciales y se comparan los valores en puntos específicos"
    },
    {
        "Enunciado": "Si se tiene la función g(x) = -x³ + 3x² - 4, ¿cómo determinarías si hay un máximo o un mínimo en un punto crítico encontrado?",
        "R_Correcta": "Se evalúa la segunda derivada en el punto crítico; si es positiva, hay un mínimo; si es negativa, hay un máximo.",
        "R_Falsas": [
            "Se evalúa la función original en puntos cercanos.",
            "Se utiliza el criterio de la primera derivada únicamente.",
            "No se necesita evaluar la segunda derivada."
        ],
        "R_Truco": "Se utiliza la primera derivada; si es positiva, hay un máximo, y si es negativa, hay un mínimo"
    },
    {
        "Enunciado": "Dada la función h(x) = x² - 4x + 4, ¿cuál es el valor mínimo y dónde ocurre?",
        "R_Correcta": "El valor mínimo es 0 y ocurre en x = 2.",
        "R_Falsas": [
            "El valor mínimo es -4 y ocurre en x = 0.",
            "No hay mínimo, solo un máximo.",
            "El valor mínimo es 4 y ocurre en x = 4."
        ],
        "R_Truco": "El valor mínimo es -2 y ocurre en x = 1"
    }
]');
INSERT INTO Leccion VALUES(2231,"2.2.3E Ejercicios de Regresión polinomial", 1, 1, 
'[
    {
        "Enunciado": "¿Qué es la regresión polinomial?",
        "R_Correcta": "Es un tipo de análisis de regresión que utiliza una ecuación polinómica para modelar la relación entre una variable dependiente y una o más variables independientes.",
        "R_Falsas": [
            "Es un análisis que solo se aplica a datos lineales.",
            "Es un método para calcular promedios.",
            "Es una técnica de regresión que no utiliza variables independientes."
        ],
        "R_Truco": "Es una técnica que solo utiliza ecuaciones lineales para modelar relaciones"
    },
    {
        "Enunciado": "Dada la función de regresión polinomial f(x) = 2 + 3x - x², ¿cuál es el valor de f(2)?",
        "R_Correcta": "f(2) = 2 + 3(2) - (2)² = 2 + 6 - 4 = 4.",
        "R_Falsas": [
            "f(2) = 8.",
            "f(2) = 0.",
            "f(2) = 6."
        ],
        "R_Truco": "f(2) = 2 + 3(2) - (2)³ = 2 + 6 - 8 = 0"
    },
    {
        "Enunciado": "En un modelo de regresión polinomial de segundo grado, ¿qué forma tiene la ecuación general?",
        "R_Correcta": "La forma general es Y = a + bX + cX², donde a, b y c son coeficientes.",
        "R_Falsas": [
            "La forma general es Y = a + bX.",
            "La forma general es Y = a + bX + cX³.",
            "La forma general es Y = aX + bX²."
        ],
        "R_Truco": "La forma general es Y = a + bX + cX³"
    },
    {
        "Enunciado": "Si se ajusta un modelo de regresión polinomial y se obtiene un coeficiente de determinación (R²) de 0.85, ¿qué implica esto?",
        "R_Correcta": "Implica que el 85% de la variabilidad de la variable dependiente se explica por la variable independiente.",
        "R_Falsas": [
            "Implica que el modelo es perfecto.",
            "Indica que no hay relación entre las variables.",
            "Implica que el 15% de los datos son irrelevantes."
        ],
        "R_Truco": "Indica que el 85% de las observaciones son valores atípicos"
    },
    {
        "Enunciado": "Dada la siguiente función polinomial: Y = 4 - 2X + X², ¿cuál es el mínimo valor de Y y en qué valor de X ocurre?",
        "R_Correcta": "El mínimo ocurre en X = 1, donde Y = 4 - 2(1) + (1)² = 3.",
        "R_Falsas": [
            "El mínimo ocurre en X = 0, donde Y = 4.",
            "No hay mínimo en esta función.",
            "El mínimo ocurre en X = 2, donde Y = 0."
        ],
        "R_Truco": "El mínimo ocurre en X = 2, donde Y = 2"
    }
]');
INSERT INTO Leccion VALUES(2301,"2.3E Ejercicios de Regresión Lineal Multiple", 1, 1,
'[
    {
        "Enunciado": "¿Qué es la regresión lineal múltiple?",
        "R_Correcta": "Es un método de análisis estadístico que utiliza múltiples variables independientes para predecir el valor de una variable de respuesta.",
        "R_Falsas": [
            "Es un análisis que solo utiliza una variable independiente.",
            "Es una técnica que no se puede graficar.",
            "Es un método exclusivo para datos categóricos."
        ],
        "R_Truco": "Es un método que utiliza solo dos variables independientes para predecir la respuesta"
    },
    {
        "Enunciado": "En un análisis de regresión lineal múltiple, ¿qué se busca al crear diagramas de dispersión por pares?",
        "R_Correcta": "Se busca identificar posibles relaciones entre cada variable independiente y la variable dependiente.",
        "R_Falsas": [
            "Se busca confirmar que todas las variables son independientes.",
            "Se utiliza solo para visualizar datos categóricos.",
            "No se necesitan diagramas para un análisis de regresión."
        ],
        "R_Truco": "Se busca determinar la dependencia entre todas las variables"
    },
    {
        "Enunciado": "Dada la ecuación de un modelo de regresión lineal múltiple: Y = 5 + 2X₁ - 3X₂, ¿qué representa el coeficiente -3?",
        "R_Correcta": "Representa el cambio esperado en Y por cada unidad de aumento en X₂, manteniendo X₁ constante.",
        "R_Falsas": [
            "Indica que X₁ y X₂ son independientes.",
            "Es el valor máximo de Y.",
            "Representa el valor de Y cuando X₁ y X₂ son cero."
        ],
        "R_Truco": "Representa el cambio en Y por cada unidad de aumento en X₁, manteniendo X₂ constante"
    },
    {
        "Enunciado": "En un análisis de regresión lineal múltiple, ¿qué es el coeficiente de determinación (R²)?",
        "R_Correcta": "Es la proporción de la variabilidad total de la variable de respuesta que es explicada por las variables independientes en el modelo.",
        "R_Falsas": [
            "Es el valor máximo de las variables independientes.",
            "Indica la cantidad de datos que se han utilizado en el modelo.",
            "Es la suma de los coeficientes del modelo."
        ],
        "R_Truco": "Es la media de los coeficientes en el modelo"
    },
    {
        "Enunciado": "Dada la siguiente ecuación de regresión múltiple: Y = 10 + 4X₁ + 2X₂, ¿cuál es el valor de Y cuando X₁ = 3 y X₂ = 1?",
        "R_Correcta": "Y = 10 + 4(3) + 2(1) = 10 + 12 + 2 = 24.",
        "R_Falsas": [
            "Y = 10 + 4 + 2 = 14.",
            "Y = 10 + 4(1) + 2(3) = 20.",
            "Y = 10 + 4(2) + 2(2) = 26."
        ],
        "R_Truco": "Y = 10 + 4(3) + 2(2) = 26"
    }
]');
INSERT INTO Leccion VALUES(2311,"2.3.1E Ejercicios de Aproximacion Matricial", 1, 1,
'[
    {
        "Enunciado": "¿Cómo se representa un modelo de regresión lineal múltiple usando notación matricial?",
        "R_Correcta": "Y = Xβ + ε, donde Y es el vector de respuestas, X es la matriz de variables independientes, β es el vector de coeficientes y ε es el vector de errores.",
        "R_Falsas": [
            "Y = βX + ε, donde β es la matriz de respuestas.",
            "Y = X + β + ε, donde ε es el vector de variables independientes.",
            "Y = Xβ, sin errores ni coeficientes."
        ],
        "R_Truco": "Y = βX + ε, donde X es el vector de respuestas y β es la matriz de variables independientes"
    },
    {
        "Enunciado": "Si se tiene la matriz de variables independientes X con dimensiones (n x p) y el vector de coeficientes β con dimensiones (p x 1), ¿cuál es la dimensión del vector de respuestas Y?",
        "R_Correcta": "(n x 1).",
        "R_Falsas": [
            "(p x 1).",
            "(1 x n).",
            "(n x p)."
        ],
        "R_Truco": "(p x p)"
    },
    {
        "Enunciado": "En un modelo de regresión lineal múltiple, ¿cómo se calcula el vector de coeficientes β usando la aproximación matricial?",
        "R_Correcta": "β = (X’X)⁻¹X’Y, donde X’ es la transpuesta de X.",
        "R_Falsas": [
            "β = (XY’)⁻¹X’Y.",
            "β = XY’Y.",
            "β = (X’Y)⁻¹X."
        ],
        "R_Truco": "β = (X’X) X’Y, sin invertir X’X"
    },
    {
        "Enunciado": "Si la matriz X tiene 5 observaciones y 3 variables independientes, ¿cuál es la forma de la matriz X?",
        "R_Correcta": "(5 x 3).",
        "R_Falsas": [
            "(3 x 5).",
            "(5 x 5).",
            "(3 x 3)."
        ],
        "R_Truco": "(3 x 5)"
    },
    {
        "Enunciado": "Si se tiene el vector de respuestas Y = [10, 15, 20, 25, 30] y la matriz de variables independientes X = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]], ¿cuál es el primer paso para calcular los coeficientes β?",
        "R_Correcta": "Calcular la transpuesta de X, X’.",
        "R_Falsas": [
            "Calcular la inversa de Y.",
            "Multiplicar Y por X.",
            "Sumar todos los elementos de X."
        ],
        "R_Truco": "Calcular la inversa de X"
    }
]');
INSERT INTO Leccion VALUES(2321,"2.3.2E Ejercicios de conceptualización de población y valores de expectación", 1, 1,
'[
    {
        "Enunciado": "En el contexto de regresión lineal múltiple, ¿qué representa la población?",
        "R_Correcta": "La población se refiere al conjunto completo de individuos o elementos que se desea estudiar y sobre los cuales se desea hacer inferencias.",
        "R_Falsas": [
            "La población es siempre un grupo pequeño de datos.",
            "La población es el conjunto de resultados de un experimento específico.",
            "La población se refiere solo a los datos de una muestra."
        ],
        "R_Truco": "La población se refiere únicamente a los individuos de la muestra observada"
    },
    {
        "Enunciado": "En un modelo de regresión lineal múltiple, si se define la variable dependiente como el ingreso (Y) y las variables independientes como la educación (X₁) y la experiencia laboral (X₂), ¿qué se espera que indique el valor del pendiente asociado a X₁?",
        "R_Correcta": "Indica el cambio esperado en el ingreso por cada unidad adicional de educación, manteniendo la experiencia laboral constante.",
        "R_Falsas": [
            "Indica el ingreso promedio en la población.",
            "Indica el cambio en la experiencia laboral por cada unidad de educación.",
            "No tiene relación con el ingreso."
        ],
        "R_Truco": "Indica el ingreso promedio por cada unidad de educación sin importar la experiencia laboral"
    },
    {
        "Enunciado": "¿Cómo se interpreta el valor de expectativa en un modelo de regresión lineal múltiple?",
        "R_Correcta": "Es el valor promedio de la variable dependiente, dado un conjunto específico de valores de las variables independientes.",
        "R_Falsas": [
            "Es el valor máximo de la variable dependiente.",
            "Es la suma de todas las variables independientes.",
            "Es un valor fijo que no cambia con las variables independientes."
        ],
        "R_Truco": "Es el valor máximo que puede alcanzar la variable dependiente"
    },
    {
        "Enunciado": "Si en un estudio se determina que la regresión lineal múltiple tiene un valor de expectativa de Y = 30 cuando X₁ = 2 y X₂ = 5, ¿qué implica esto?",
        "R_Correcta": "Implica que, con esas condiciones específicas de X₁ y X₂, se espera que el ingreso promedio (Y) sea 30.",
        "R_Falsas": [
            "Implica que el ingreso es siempre 30, independientemente de X₁ y X₂.",
            "Indica que X₁ y X₂ no influyen en Y.",
            "Significa que 30 es el valor máximo posible de Y."
        ],
        "R_Truco": "Implica que el ingreso es siempre 30 para cualquier valor de X₁ y X₂"
    },
    {
        "Enunciado": "En un modelo de regresión lineal múltiple, si se aumenta el número de variables independientes, ¿qué se espera sobre la precisión de la estimación de la variable dependiente?",
        "R_Correcta": "En general, se espera que la precisión de la estimación aumente, siempre que las nuevas variables sean relevantes.",
        "R_Falsas": [
            "La precisión disminuirá automáticamente.",
            "No hay relación entre el número de variables y la precisión.",
            "Aumentar las variables siempre lleva a un modelo más simple."
        ],
        "R_Truco": "La precisión disminuirá automáticamente sin importar la relevancia de las nuevas variables"
    }
]'
);
INSERT INTO Leccion VALUES(2331,"2.3.3E Ejercicios de Evaluación y Diagnósticos", 1, 1,
'[
    {
        "Enunciado": "¿Cuál es el objetivo principal de la evaluación de un modelo de regresión lineal múltiple?",
        "R_Correcta": "Determinar la validez y precisión del modelo para hacer predicciones sobre la variable dependiente.",
        "R_Falsas": [
            "Obtener un modelo que siempre ajuste perfectamente los datos.",
            "Eliminar todas las variables independientes.",
            "Calcular únicamente la media de la variable dependiente."
        ],
        "R_Truco": "Maximizar el número de variables independientes sin evaluar su relevancia"
    },
    {
        "Enunciado": "¿Qué diagnóstico se realiza para comprobar si los errores del modelo de regresión son independientes?",
        "R_Correcta": "Se utiliza la prueba de Durbin-Watson.",
        "R_Falsas": [
            "Se calcula el coeficiente de determinación (R²).",
            "Se realiza una prueba t para cada coeficiente.",
            "Se observa el diagrama de dispersión de los datos."
        ],
        "R_Truco": "Se utiliza la prueba de correlación de Pearson"
    },
    {
        "Enunciado": "Si al evaluar un modelo de regresión se encuentra que R² = 0.85, ¿qué significa esto en términos de diagnóstico?",
        "R_Correcta": "Significa que el 85% de la variabilidad en la variable dependiente se puede explicar por las variables independientes del modelo.",
        "R_Falsas": [
            "Significa que el modelo tiene un ajuste perfecto.",
            "Indica que el 15% de los datos son irrelevantes.",
            "Es un valor que no se puede utilizar para diagnóstico."
        ],
        "R_Truco": "Significa que el modelo explica la variabilidad de la variable dependiente en un 100%"
    },
    {
        "Enunciado": "¿Qué es la multicolinealidad en el contexto de regresión lineal múltiple y cómo puede diagnosticarse?",
        "R_Correcta": "La multicolinealidad ocurre cuando dos o más variables independientes están altamente correlacionadas, y se puede diagnosticar utilizando el Factor de Inflación de Varianza (VIF).",
        "R_Falsas": [
            "Es la variabilidad en los errores del modelo y se diagnostica mediante la media.",
            "Es la relación entre la variable dependiente y la variable independiente y se evalúa con R².",
            "Es el ajuste perfecto del modelo, evaluado con la prueba de Durbin-Watson."
        ],
        "R_Truco": "Es la relación entre la variable dependiente y una de las independientes, evaluada mediante el VIF"
    },
    {
        "Enunciado": "¿Cuál es el propósito de realizar un análisis de residuos en un modelo de regresión lineal múltiple?",
        "R_Correcta": "Para evaluar la homocedasticidad, la normalidad y la independencia de los errores del modelo.",
        "R_Falsas": [
            "Para ajustar el modelo a los datos más cercanos.",
            "Para calcular el valor máximo de la variable dependiente.",
            "Para eliminar variables independientes del modelo."
        ],
        "R_Truco": "Para verificar que los errores sean siempre cero"
    }
]');
 INSERT INTO Leccion VALUES(2341,"2.3.4E Ejercicios de Selección de Variable", 1, 1,
 '[
    {
        "Enunciado": "¿Qué se entiende por selección de variables en el contexto de la regresión lineal múltiple?",
        "R_Correcta": "Es el proceso de identificar y elegir las variables independientes que mejor explican la variabilidad de la variable dependiente.",
        "R_Falsas": [
            "Es simplemente agregar todas las variables disponibles al modelo.",
            "Es un proceso que se realiza solo al final del análisis.",
            "Es irrelevante en modelos de regresión."
        ],
        "R_Truco": "Es el proceso de eliminar todas las variables menos una en el modelo"
    },
    {
        "Enunciado": "¿Cuál de los siguientes métodos es comúnmente utilizado para la selección de variables en regresión lineal múltiple?",
        "R_Correcta": "Método de eliminación hacia atrás (backward elimination).",
        "R_Falsas": [
            "Método de ajuste cuadrático.",
            "Método de proyección aleatoria.",
            "Método de selección aleatoria."
        ],
        "R_Truco": "Método de selección por media"
    },
    {
        "Enunciado": "¿Qué criterio se utiliza en la selección de variables mediante el método de forward selection?",
        "R_Correcta": "Se agrega una variable independiente al modelo si mejora significativamente el ajuste, típicamente medido por el valor p.",
        "R_Falsas": [
            "Se eliminan las variables sin importar su significancia.",
            "Se seleccionan variables al azar.",
            "Se utilizan solo variables con valores máximos."
        ],
        "R_Truco": "Se eliminan variables una por una, sin considerar su significancia"
    },
    {
        "Enunciado": "¿Qué problema puede surgir si se incluye demasiadas variables en un modelo de regresión lineal múltiple?",
        "R_Correcta": "Se puede aumentar el riesgo de sobreajuste (overfitting), donde el modelo se ajusta demasiado a los datos de entrenamiento y pierde capacidad de generalización.",
        "R_Falsas": [
            "El modelo siempre mejorará en precisión.",
            "No afecta la interpretación de los coeficientes.",
            "El modelo se volverá más simple."
        ],
        "R_Truco": "El modelo siempre mejorará su capacidad de generalización"
    },
    {
        "Enunciado": "¿Qué es el criterio de información de Akaike (AIC) y cómo se relaciona con la selección de variables?",
        "R_Correcta": "Es un criterio utilizado para comparar modelos; penaliza el número de parámetros para evitar el sobreajuste, favoreciendo modelos más simples con buen ajuste.",
        "R_Falsas": [
            "Es un criterio que solo considera el ajuste del modelo sin penalización.",
            "Se utiliza exclusivamente en modelos de regresión lineal simple.",
            "Es irrelevante en la evaluación de la calidad del modelo."
        ],
        "R_Truco": "Es un criterio que se utiliza solo en regresión logística"
    }
]');
 INSERT INTO Leccion VALUES(3111,"3.1.1E Ejercicios de Ley de eventos raros y aproximación a la distribución binomial", 1, 1,
 '[
    {
        "Enunciado": "En una distribución binomial, ¿cuándo se considera que un evento es raro?",
        "R_Correcta": "Cuando N es grande y la probabilidad de ocurrencia es cercana a 0.",
        "R_Falsas": [
            "Cuando N es pequeño y la probabilidad es cercana a 1.",
            "Si la probabilidad de éxito es mayor que la de fracaso.",
            "Cuando los ensayos son menores de 10."
        ],
        "R_Truco": "Cuando N es grande y la probabilidad de ocurrencia es cercana a 1"
    },
    {
        "Enunciado": "¿Cuándo se puede aproximar una distribución binomial a una distribución de Poisson?",
        "R_Correcta": "Cuando el número de ensayos es grande y Np es menor a 5.",
        "R_Falsas": [
            "Cuando el número de ensayos es pequeño y Np es mayor a 10.",
            "Solo cuando la probabilidad de éxito es exactamente 0.5.",
            "Cuando la probabilidad de fracaso es igual a la de éxito."
        ],
        "R_Truco": "Cuando el número de ensayos es grande y Np es mayor a 10"
    },
    {
        "Enunciado": "¿Qué representa λ (lambda) en la aproximación de Poisson para una distribución binomial con eventos raros?",
        "R_Correcta": "Representa el valor de Np.",
        "R_Falsas": [
            "Es el valor de q=1-p.",
            "Es el total de ensayos N.",
            "Representa el inverso de la probabilidad p."
        ],
        "R_Truco": "Representa el valor de N"
    },
    {
        "Enunciado": "Dada una distribución binomial con N=200 y p=0.01, ¿es posible usar la aproximación de Poisson?",
        "R_Correcta": "Sí, porque N es grande y Np < 5.",
        "R_Falsas": [
            "No, porque p no es exactamente 0.",
            "Sí, pero solo si Np es mayor a 10.",
            "No, porque N es menor a 1000."
        ],
        "R_Truco": "No, porque p es muy pequeño"
    },
    {
        "Enunciado": "¿Cuál de los siguientes es un requisito para aplicar la Ley de Eventos Raros en una distribución binomial?",
        "R_Correcta": "Que N sea de al menos 50 elementos y Np menor a cinco.",
        "R_Falsas": [
            "Que N sea menor a 30 ensayos.",
            "Que p sea mayor que q.",
            "Que la probabilidad de fracaso q=1-p sea cercana a 1."
        ],
        "R_Truco": "Que N sea menor a 50 elementos y Np mayor a cinco"
    }
]');
INSERT INTO Leccion VALUES(3201,"3.2E Ejercicios de Proceso de Poisson Homogeneo", 1, 1,
'[
    {
        "Enunciado": "¿Qué caracteriza a un proceso de Poisson homogéneo?",
        "R_Correcta": "Los eventos ocurren de manera independiente y con una tasa constante de ocurrencia.",
        "R_Falsas": [
            "Los eventos dependen de ocurrencias previas.",
            "La tasa de ocurrencia varía con el tiempo.",
            "La probabilidad de ocurrencia en cada intervalo de tiempo es siempre 1."
        ],
        "R_Truco": "Los eventos ocurren con una tasa variable y dependen de ocurrencias previas"
    },
    {
        "Enunciado": "Si λ representa la tasa de ocurrencias por unidad de tiempo, ¿qué representa λΔt en un proceso de Poisson homogéneo?",
        "R_Correcta": "La probabilidad de una ocurrencia en un pequeño intervalo de tiempo.",
        "R_Falsas": [
            "El número total de ocurrencias en un gran intervalo de tiempo.",
            "La probabilidad de ninguna ocurrencia en un gran intervalo de tiempo.",
            "La tasa de cambio de la tasa λ."
        ],
        "R_Truco": "El número total de ocurrencias en un pequeño intervalo de tiempo"
    },
    {
        "Enunciado": "En un proceso de Poisson homogéneo, ¿cuál es la probabilidad de que no haya ocurrencias en un pequeño intervalo de tiempo Δt?",
        "R_Correcta": "1 - λΔt",
        "R_Falsas": [
            "λΔt",
            "λ^2",
            "La probabilidad depende de las ocurrencias anteriores."
        ],
        "R_Truco": "λΔt"
    },
    {
        "Enunciado": "Si la tasa de ocurrencia de un evento es λ=3 ocurrencias por hora, ¿cuál es la probabilidad aproximada de que ocurra una ocurrencia en un intervalo de 10 minutos?",
        "R_Correcta": "0.5",
        "R_Falsas": [
            "3",
            "0.05",
            "0.9"
        ],
        "R_Truco": "0.3"
    },
    {
        "Enunciado": "¿Qué representa P(k, t) en un proceso de Poisson homogéneo?",
        "R_Correcta": "La probabilidad de k ocurrencias en un intervalo de tiempo t.",
        "R_Falsas": [
            "La tasa de ocurrencia en un pequeño intervalo de tiempo.",
            "La probabilidad de ninguna ocurrencia en t.",
            "El número total de ocurrencias en el intervalo."
        ],
        "R_Truco": "La tasa de ocurrencias en un intervalo de tiempo t"
    }
]
');
INSERT INTO Leccion VALUES(3211,"3.2.1E Ejercicios de Distribución del tiempo de primer evento", 1, 1,
'[
    {
        "Enunciado": "En la deducción de la distribución del tiempo para el primer evento en un proceso de Poisson, ¿qué expresa la probabilidad ( P(k, t + Delta t) )?",
        "R_Correcta": "La probabilidad de que haya k ocurrencias en el tiempo t más un pequeño intervalo de tiempo ( Delta t ).",
        "R_Falsas": [
            "La tasa de ocurrencia de eventos en el intervalo ( Delta t ).",
            "La probabilidad de que no haya ocurrencias en ( Delta t ).",
            "La probabilidad de que haya exactamente k ocurrencias en un instante de tiempo t."
        ],
        "R_Truco": "La probabilidad de que no haya eventos en el tiempo t más ( Delta t )"
    },
    {
        "Enunciado": "¿Qué describe el término ( P(k, t)(1 - lambda Delta t) ) en la fórmula de la evolución de ( P(k, t + Delta t) )?",
        "R_Correcta": "La probabilidad de que no ocurra un evento en ( Delta t ).",
        "R_Falsas": [
            "La probabilidad de que ocurra un evento en ( Delta t ).",
            "La tasa de ocurrencia de eventos por unidad de tiempo.",
            "La probabilidad de que k eventos hayan ocurrido antes del tiempo t."
        ],
        "R_Truco": "La probabilidad de que ocurra un evento en ( Delta t )"
    },
    {
        "Enunciado": "¿Qué representa la derivada ( frac{dP(k, t)}{dt} ) en la ecuación diferencial del proceso de Poisson?",
        "R_Correcta": "La tasa de cambio de la probabilidad con respecto al tiempo.",
        "R_Falsas": [
            "El número de eventos ocurridos hasta el tiempo t.",
            "La tasa de ocurrencias ( lambda ).",
            "El número total de eventos en el intervalo de tiempo."
        ],
        "R_Truco": "El valor de la probabilidad en el instante t"
    },
    {
        "Enunciado": "Al reorganizar la ecuación ( P(k, t + Delta t) - P(k, t) = -P(k, t) lambda Delta t + P(k - 1, t) lambda Delta t ), ¿qué se obtiene?",
        "R_Correcta": "La ecuación diferencial que describe el cambio en la probabilidad de ocurrencia de k eventos con el tiempo.",
        "R_Falsas": [
            "La fórmula para la tasa de ocurrencias ( lambda ).",
            "La probabilidad de que no ocurran eventos en un intervalo de tiempo.",
            "La función de densidad de la distribución exponencial."
        ],
        "R_Truco": "La función de probabilidad de ocurrencia de eventos en un instante dado"
    },
    {
        "Enunciado": "¿Cómo se interpreta la solución de la ecuación diferencial de Poisson para el tiempo del primer evento?",
        "R_Correcta": "La distribución exponencial describe el tiempo entre el primer evento en un proceso de Poisson.",
        "R_Falsas": [
            "El tiempo entre cada evento en un proceso de Poisson es constante.",
            "La tasa de ocurrencia de eventos disminuye con el tiempo.",
            "El número de eventos crece exponencialmente con el tiempo."
        ],
        "R_Truco": "La tasa de ocurrencia de eventos se incrementa linealmente con el tiempo"
    }
]');
INSERT INTO Leccion VALUES(3221,"3.2.2E Ejercicios de Distribución del tiempo inter-eventos", 1, 1,
'[
    {
        "Enunciado": "En la distribución del tiempo inter-eventos, ¿qué representa ( p_k(tau) = frac{(lambda tau)^{k-1} exp(-lambda tau)}{(k-1)!} )?",
        "R_Correcta": "Es la función de densidad de una distribución Erlang de orden k.",
        "R_Falsas": [
            "Es la función de distribución acumulativa.",
            "Representa la tasa de ocurrencias por unidad de tiempo.",
            "Es la función de densidad de una distribución de Poisson."
        ],
        "R_Truco": "Es la función de densidad de una distribución exponencial de orden k"
    },
    {
        "Enunciado": "¿Qué ocurre cuando se establece ( k = 1 ) en la distribución de Erlang?",
        "R_Correcta": "La función de densidad se convierte en una distribución exponencial.",
        "R_Falsas": [
            "La función se convierte en una distribución de Poisson.",
            "La tasa de ocurrencias disminuye exponencialmente.",
            "La probabilidad de ocurrencia se vuelve constante."
        ],
        "R_Truco": "La función se convierte en una distribución uniforme"
    },
    {
        "Enunciado": "¿Cuál es la función de distribución acumulativa ( F(k, tau) ) para una distribución Erlang?",
        "R_Correcta": "Es ( F(k, tau) = 1 - exp(-lambda tau) sum_{k=0}^{k-1} frac{(lambda tau)^k}{k!} ).",
        "R_Falsas": [
            "Es ( F(k, tau) = frac{(lambda tau)^{k-1} exp(-lambda tau)}{(k-1)!} ).",
            "Es ( F(k, tau) = exp(-lambda tau) ).",
            "Es ( F(k, tau) = frac{lambda^k exp(-tau)}{k!} )."
        ],
        "R_Truco": "Es ( F(k, tau) = exp(-lambda tau) )"
    },
    {
        "Enunciado": "¿Qué describe la distribución de Erlang de orden k en el contexto de tiempos inter-eventos?",
        "R_Correcta": "Describe el tiempo total hasta la ocurrencia del k-ésimo evento.",
        "R_Falsas": [
            "Describe el tiempo entre el primer y el segundo evento únicamente.",
            "Es la probabilidad de que ocurran exactamente k eventos en un tiempo dado.",
            "Describe el tiempo entre eventos consecutivos en un proceso de Poisson."
        ],
        "R_Truco": "Describe el tiempo entre eventos consecutivos en un proceso de Poisson"
    },
    {
        "Enunciado": "Si la tasa de ocurrencia es ( lambda = 2 ) eventos por segundo, ¿cuál es la función de densidad del tiempo entre el primer evento (k=1) en un intervalo de tiempo ( tau )?",
        "R_Correcta": "Es ( p_1(tau) = 2 exp(-2 tau) ).",
        "R_Falsas": [
            "Es ( p_1(tau) = frac{2 tau exp(-2 tau)}{1!} ).",
            "Es ( p_1(tau) = exp(-2 tau) ).",
            "Es ( p_1(tau) = frac{2^2 exp(-tau)}{2!} )."
        ],
        "R_Truco": "Es ( p_1(tau) = exp(-2 tau) )"
    }
]');
INSERT INTO Leccion VALUES(3231,"3.2.3E Ejercicios de Distribución uniforme y el proceso de Poisson", 1, 1,
'[
    {
        "Enunciado": "¿Cuál es la función de densidad para una variable aleatoria con distribución uniforme entre ( theta_1 ) y ( theta_2 )?",
        "R_Correcta": "Es ( f(y) = frac{1}{theta_2 - theta_1} ) para ( theta_1 leq y leq theta_2 ).",
        "R_Falsas": [
            "Es ( f(y) = theta_1 - theta_2 ).",
            "Es ( f(y) = frac{y}{theta_1 - theta_2} ).",
            "Es ( f(y) = frac{1}{theta_2 + theta_1} )."
        ],
        "R_Truco": "Es ( f(y) = frac{y}{theta_2 - theta_1} ) para ( theta_1 leq y leq theta_2 )"
    },
    {
        "Enunciado": "¿Cuál es la característica principal de una distribución uniforme?",
        "R_Correcta": "Todos los valores en el intervalo tienen la misma probabilidad de ocurrencia.",
        "R_Falsas": [
            "La probabilidad de los valores en los extremos del intervalo es mayor.",
            "La probabilidad disminuye conforme nos alejamos del valor medio.",
            "La función de densidad varía linealmente a lo largo del intervalo."
        ],
        "R_Truco": "La probabilidad es mayor en los valores cercanos al centro del intervalo"
    },
    {
        "Enunciado": "Si ( theta_1 = 0 ) y ( theta_2 = 10 ), ¿cuál es el valor de la función de densidad ( f(y) )?",
        "R_Correcta": "Es ( f(y) = 0.1 ) para ( 0 leq y leq 10 ).",
        "R_Falsas": [
            "Es ( f(y) = 0.01 ) para ( 0 leq y leq 10 ).",
            "Es ( f(y) = 10 ) para ( 0 leq y leq 10 ).",
            "Es ( f(y) = 1 ) para ( 0 leq y leq 10 )."
        ],
        "R_Truco": "Es ( f(y) = 0.05 ) para ( 0 leq y leq 10 )"
    },
    {
        "Enunciado": "¿Qué sucede con la función de densidad fuera del intervalo ( theta_1 leq y leq theta_2 )?",
        "R_Correcta": "La función de densidad es cero fuera del intervalo.",
        "R_Falsas": [
            "La función de densidad sigue siendo constante.",
            "La función de densidad toma valores negativos.",
            "La función de densidad se vuelve indefinida."
        ],
        "R_Truco": "La función de densidad toma el valor mínimo del intervalo"
    },
    {
        "Enunciado": "¿Cuál es la probabilidad de que una variable aleatoria uniforme tome un valor específico dentro del intervalo ( theta_1 leq y leq theta_2 )?",
        "R_Correcta": "Es cero, ya que la probabilidad puntual en una distribución continua es cero.",
        "R_Falsas": [
            "Es ( frac{1}{theta_2 - theta_1} ).",
            "Es ( frac{1}{2} ).",
            "Es ( frac{1}{theta_2 + theta_1} )."
        ],
        "R_Truco": "Es ( frac{1}{theta_2 - theta_1} ) para valores específicos"
    }
]');
INSERT INTO Leccion VALUES(3241,"3.2.4E Ejercicios de Métodos para simular el proceso de Poisson", 1, 1,
'[
    {
        "Enunciado": "¿Qué técnica se utiliza comúnmente para generar múltiples series de tiempo simuladas en el contexto de procesos aleatorios como el proceso de Poisson?",
        "R_Correcta": "Simulación Monte Carlo.",
        "R_Falsas": [
            "Interpolación Polinomial.",
            "Método de Euler-Maruyama.",
            "Método de Runge-Kutta."
        ],
        "R_Truco": "Método de Integración Simpson"
    },
    {
        "Enunciado": "¿Cuál es una aplicación típica de la simulación Monte Carlo en el proceso de Poisson?",
        "R_Correcta": "Explorar posibles secuencias de cascada debido a escenarios de cambio climático.",
        "R_Falsas": [
            "Determinar la trayectoria exacta de eventos futuros.",
            "Minimizar el ruido de señales periódicas.",
            "Resolver ecuaciones diferenciales complejas."
        ],
        "R_Truco": "Predecir la trayectoria exacta de eventos futuros"
    },
    {
        "Enunciado": "En el contexto de simulación del proceso de Poisson, ¿qué se logra al generar múltiples realizaciones de series de tiempo?",
        "R_Correcta": "Se exploran diferentes posibles secuencias de eventos bajo condiciones aleatorias.",
        "R_Falsas": [
            "Se predice exactamente cuándo ocurrirá cada evento.",
            "Se asegura que todos los eventos ocurran de manera periódica.",
            "Se eliminan las probabilidades de eventos raros."
        ],
        "R_Truco": "Se asegura que todos los eventos ocurran en intervalos iguales"
    },
    {
        "Enunciado": "¿Qué tipo de fenómenos pueden simularse con series de tiempo generadas mediante Monte Carlo en un proceso de Poisson?",
        "R_Correcta": "Simulación de cultivos y ecosistemas.",
        "R_Falsas": [
            "Optimización de carteras de inversión.",
            "Simulación de circuitos electrónicos.",
            "Simulación de tráfico de red."
        ],
        "R_Truco": "Optimización de carteras de inversión"
    },
    {
        "Enunciado": "¿Cómo se caracterizan los eventos en una simulación del proceso de Poisson usando Monte Carlo?",
        "R_Correcta": "Son eventos aleatorios e independientes en el tiempo.",
        "R_Falsas": [
            "Son eventos periódicos con intervalos constantes.",
            "Los eventos dependen de los anteriores.",
            "Los eventos ocurren con una tasa variable no constante."
        ],
        "R_Truco": "Los eventos son periódicos y ocurren en intervalos regulares"
    }
]');
INSERT INTO Leccion VALUES(3251,"3.2.5E Ejercicios de Métodos de Poisson Especial", 1, 1,
'[
    {
        "Enunciado": "Un dominio tiene un área total ( A = 100 ) unidades cuadradas y se divide en ( T = 10 ) celdas. Si se observan ( m = 50 ) puntos en total, ¿cuál es la densidad promedio ( lambda ) de puntos por celda?",
        "R_Correcta": "5",
        "R_Falsas": ["10", "0.5", "50"],
        "R_Truco": "100, ya que el total de puntos observados es 50"
    },
    {
        "Enunciado": "Utilizando la densidad promedio ( lambda = 4 ), ¿cuál es la probabilidad de que una celda contenga exactamente 3 puntos, según la distribución de Poisson?",
        "R_Correcta": "0.195",
        "R_Falsas": ["0.165", "0.25", "0.10"],
        "R_Truco": "0.20, ya que está cerca de la densidad promedio"
    },
    {
        "Enunciado": "Si se observa que ( r = 2 ) celdas contienen exactamente 3 puntos, ¿cuál es el valor esperado de celdas con 3 puntos ( e_r ) en ( T = 20 ) celdas con tasa ( P(r = 3) = 0.15 )?",
        "R_Correcta": "3",
        "R_Falsas": ["2", "5", "0.15"],
        "R_Truco": "1, asumiendo la probabilidad de 0.15 sin multiplicar por T"
    },
    {
        "Enunciado": "En una muestra de ( T = 15 ) celdas, ¿cuál es la varianza de la muestra si el promedio ( m/T = 2.5 ) y la suma de los cuadrados de los errores es 1.5?",
        "R_Correcta": "0.107",
        "R_Falsas": ["0.15", "0.5", "1.0"],
        "R_Truco": "0.2, asumiendo que la varianza es igual a la densidad promedio"
    },
    {
        "Enunciado": "Si ( lambda ) es la densidad promedio de puntos por celda y el área de una celda es ( A/T = 10 ), ¿cuál es la tasa de Poisson para una celda?",
        "R_Correcta": "Multiplicando ( lambda ) por el área de la celda",
        "R_Falsas": [
            "Dividiendo ( lambda ) entre el número de celdas",
            "Sumando el número de puntos observados",
            "Restando el número de celdas de ( T )"
        ],
        "R_Truco": "Dividiendo el área de la celda por ( lambda )"
    }
]');
INSERT INTO Leccion VALUES(3301,"3.3E Ejercicios de Proceso de Poisson no homogéneo", 1, 1,
'[
    {
        "Enunciado": "En un proceso de Poisson no homogéneo con tasa ( lambda(t) = 2t ), ¿cuál es la probabilidad de observar exactamente 4 eventos en un intervalo de tiempo de ( t = 3 )?",
        "R_Correcta": "0.1839",
        "R_Falsas": ["0.25", "0.102", "0.343"],
        "R_Truco": "0.2, asumiendo una tasa constante"
    },
    {
        "Enunciado": "Si la tasa del proceso de Poisson no homogéneo es ( lambda(t) = 5 ), ¿cuál es la probabilidad de observar exactamente 2 eventos en ( t = 1 )? Usa la fórmula de la distribución de Poisson.",
        "R_Correcta": "0.0842",
        "R_Falsas": ["0.10", "0.067", "0.25"],
        "R_Truco": "0.1, aproximando la tasa a 1"
    },
    {
        "Enunciado": "Dado un proceso de Poisson no homogéneo con ( lambda(t) = 3t^2 ), ¿cuál es la tasa total acumulada en el intervalo ( t = 0 ) a ( t = 2 )?",
        "R_Correcta": "8",
        "R_Falsas": ["6", "12", "10"],
        "R_Truco": "6, calculando sin integrar correctamente"
    },
    {
        "Enunciado": "¿Cuál es la principal diferencia entre un proceso de Poisson homogéneo y uno no homogéneo?",
        "R_Correcta": "La tasa de ocurrencia de eventos no es constante en el tiempo en el caso no homogéneo.",
        "R_Falsas": [
            "El número de eventos es siempre mayor en el caso no homogéneo.",
            "El proceso homogéneo tiene más fluctuaciones.",
            "La tasa es siempre menor en el proceso no homogéneo."
        ],
        "R_Truco": "La tasa es siempre mayor en el caso homogéneo"
    },
    {
        "Enunciado": "Si en un proceso de Poisson no homogéneo la tasa de eventos es ( lambda(t) = 4t ), ¿cuál es la probabilidad de que no ocurra ningún evento en el intervalo de tiempo ( t = 1 ) a ( t = 2 )?",
        "R_Correcta": "0.0183",
        "R_Falsas": ["0.5", "0.065", "0.28"],
        "R_Truco": "0.05, asumiendo una tasa constante de 4"
    }
]');
INSERT INTO Leccion VALUES(3411,"3.4.1E Ejercicios de Estructura probabilística de una cadena de Markov", 1, 1,
'[
    {
        "Enunciado": "En una cadena de Markov con tres estados ( A ), ( B ) y ( C ), la probabilidad de transición de ( A ) a ( B ) es 0.4, de ( A ) a ( C ) es 0.6. ¿Cuál es la probabilidad de que el sistema permanezca en el estado ( A ) en el siguiente paso?",
        "R_Correcta": "0",
        "R_Falsas": ["0.5", "0.2", "1"],
        "R_Truco": "0.4, considerando incorrectamente una permanencia posible"
    },
    {
        "Enunciado": "En una cadena de Markov, si la probabilidad de estar en el estado ( S_1 ) es 0.7 y de estar en el estado ( S_2 ) es 0.3 en el tiempo ( t ), ¿cuál es la probabilidad total de estar en ( S_1 ) en el tiempo ( t+1 ) si las probabilidades de transición son ( P(S_1 rightarrow S_1) = 0.8 ) y ( P(S_2 rightarrow S_1) = 0.4 )?",
        "R_Correcta": "0.68",
        "R_Falsas": ["0.5", "0.72", "0.6"],
        "R_Truco": "0.7, sin considerar correctamente las probabilidades de transición"
    },
    {
        "Enunciado": "Una cadena de Markov tiene dos estados, ( S_1 ) y ( S_2 ), con probabilidades de transición ( P(S_1 rightarrow S_2) = 0.3 ) y ( P(S_2 rightarrow S_1) = 0.7 ). Si el sistema está en ( S_1 ) en ( t = 1 ), ¿cuál es la probabilidad de que esté en ( S_2 ) en ( t = 2 )?",
        "R_Correcta": "0.21",
        "R_Falsas": ["0.49", "0.7", "0.9"],
        "R_Truco": "0.3, confundiendo la probabilidad de transición en un solo paso"
    },
    {
        "Enunciado": "En una cadena de Markov de 4 estados, si en el tiempo ( t ) el sistema está en el estado 3 y la probabilidad de transición ( P(3 rightarrow 4) ) es 0.6, ¿qué significa esta probabilidad en términos del comportamiento del sistema?",
        "R_Correcta": "Hay un 60% de probabilidad de que el sistema pase al estado 4 en el siguiente paso.",
        "R_Falsas": [
            "El sistema siempre pasará al estado 4.",
            "El sistema nunca volverá al estado 3.",
            "El sistema tiene un 40% de probabilidad de pasar a otro estado."
        ],
        "R_Truco": "El sistema tiene un 60% de probabilidad de permanecer en el estado 3"
    },
    {
        "Enunciado": "Dada una matriz de transición ( P ) para una cadena de Markov con dos estados, donde ( P = begin{pmatrix} 0.6 & 0.4  0.3 & 0.7 end{pmatrix} ), ¿cuál es la probabilidad de pasar del estado 1 al estado 2 en un paso?",
        "R_Correcta": "0.4",
        "R_Falsas": ["0.7", "0.6", "0.3"],
        "R_Truco": "0.6, interpretando incorrectamente la permanencia en el estado 1 como la transición"
    }
]');
INSERT INTO Leccion VALUES(3421,"3.4.2E Ejercicios de Probabilidad de Transicion", 1, 1,
'[
    {
        "Enunciado": "Dada la siguiente matriz de transición ( P ) para un sistema de dos estados: nn( P = begin{pmatrix} 0.7 & 0.3  0.4 & 0.6 end{pmatrix} )nn¿Cuál es el valor de la probabilidad estacionaria ( X^*_1 ) (el estado 1)?",
        "R_Correcta": "( X^*_1 = frac{0.3}{0.3 + 0.4} )",
        "R_Falsas": [
            "( X^*_1 = frac{0.7}{0.4 + 0.6} )",
            "( X^*_1 = frac{0.6}{0.4 + 0.7} )",
            "( X^*_1 = frac{0.4}{0.3 + 0.7} )"
        ],
        "R_Truco": "( X^*_1 = frac{0.4}{0.7 + 0.3} )"
    },
    {
        "Enunciado": "En un sistema de dos estados, si las probabilidades de transición son ( p_{11} = 0.8 ), ( p_{12} = 0.2 ), ( p_{21} = 0.4 ) y ( p_{22} = 0.6 ), ¿cuál es el valor de ( X^*_2 ) (probabilidad estacionaria del estado 2)?",
        "R_Correcta": "( X^*_2 = frac{0.4}{0.4 + 0.2} )",
        "R_Falsas": [
            "( X^*_2 = frac{0.6}{0.8 + 0.4} )",
            "( X^*_2 = frac{0.2}{0.8 + 0.4} )",
            "( X^*_2 = frac{0.2}{0.6 + 0.4} )"
        ],
        "R_Truco": "( X^*_2 = frac{0.4}{0.8 + 0.2} )"
    },
    {
        "Enunciado": "Si un sistema tiene dos estados, secos y lluviosos, y las probabilidades de transición son ( p_{11} = 0.7 ) y ( p_{22} = 0.5 ), ¿qué valor cumple la ecuación de balance estacionario para ( X^*_1 )?",
        "R_Correcta": "( X^*_1(0.3) + 0.5(1 - X^*_1) = X^*_1 )",
        "R_Falsas": [
            "( X^*_1(0.5) + 0.5(1 - X^*_1) = X^*_1 )",
            "( X^*_1(0.4) + 0.3(1 - X^*_1) = X^*_1 )",
            "( X^*_1(0.7) + 0.2(1 - X^*_1) = X^*_1 )"
        ],
        "R_Truco": "( X^*_1(0.3) + 0.7(1 - X^*_1) = X^*_1 )"
    },
    {
        "Enunciado": "En una cadena de Markov con dos estados (seco y lluvioso), si la probabilidad de que hoy sea lluvioso es 0.4 y la probabilidad de transición de seco a lluvioso es 0.2, ¿cuál es la probabilidad de que mañana sea lluvioso si hoy es seco?",
        "R_Correcta": "0.2",
        "R_Falsas": ["0.4", "0.6", "0.8"],
        "R_Truco": "0.5, asumiendo una probabilidad de transición constante"
    },
    {
        "Enunciado": "Considerando un sistema con dos estados donde las probabilidades de transición son ( p_{11} = 0.6 ), ( p_{12} = 0.4 ), ( p_{21} = 0.5 ), y ( p_{22} = 0.5 ), ¿cuál es el valor de ( X^*_1 ), la probabilidad estacionaria del estado 1?",
        "R_Correcta": "( X^*_1 = frac{0.5}{0.5 + 0.4} )",
        "R_Falsas": [
            "( X^*_1 = frac{0.6}{0.4 + 0.6} )",
            "( X^*_1 = frac{0.4}{0.5 + 0.6} )",
            "( X^*_1 = frac{0.5}{0.6 + 0.4} )"
        ],
        "R_Truco": "( X^*_1 = frac{0.4}{0.5 + 0.5} )"
    }
]');
INSERT INTO Leccion VALUES(3431,"3.4.3E Ejercicios de Ecuación de Chapman-Kolmogorov", 1, 1,
'[
    {
        "Enunciado": "¿Qué representa la ecuación de Chapman-Kolmogorov en una cadena de Markov?",
        "R_Correcta": "La relación entre probabilidades de transición de diferentes tiempos.",
        "R_Falsas": [
            "La fórmula para calcular probabilidades estacionarias.",
            "El cálculo de la probabilidad en tiempo continuo.",
            "Una ecuación que calcula estados iniciales."
        ],
        "R_Truco": "La fórmula para calcular directamente las probabilidades estacionarias"
    },
    {
        "Enunciado": "Dada la ecuación de Chapman-Kolmogorov en términos discretos: ( P(t + s) = P(t)P(s) ), ¿qué propiedad de la matriz de transición se está utilizando?",
        "R_Correcta": "La propiedad de multiplicación de matrices de transición.",
        "R_Falsas": [
            "La propiedad de aditividad.",
            "La propiedad de conmutatividad.",
            "La propiedad de probabilidad total."
        ],
        "R_Truco": "La propiedad de aditividad de las probabilidades"
    },
    {
        "Enunciado": "¿Cómo se interpreta el término ( P(t+s) ) en la ecuación de Chapman-Kolmogorov?",
        "R_Correcta": "Es la probabilidad de transición en el tiempo ( t+s ).",
        "R_Falsas": [
            "Es la probabilidad de transición entre dos estados.",
            "Es la probabilidad de un estado estacionario.",
            "Es la probabilidad en el tiempo ( t )."
        ],
        "R_Truco": "Es la probabilidad de un estado estacionario en el tiempo ( t+s )"
    },
    {
        "Enunciado": "Para un sistema continuo, la ecuación de Chapman-Kolmogorov toma la forma de una integral. ¿Qué representa el término dentro de la integral?",
        "R_Correcta": "La densidad de transición entre los estados en tiempos diferentes.",
        "R_Falsas": [
            "La suma de las probabilidades de transición.",
            "La probabilidad de estar en un estado dado.",
            "La diferencia entre probabilidades en diferentes tiempos."
        ],
        "R_Truco": "La probabilidad de estar en un estado dado en tiempo continuo"
    },
    {
        "Enunciado": "¿Cómo se relaciona la ecuación de Chapman-Kolmogorov con la homogeneidad en una cadena de Markov?",
        "R_Correcta": "Indica que las probabilidades de transición solo dependen de la diferencia entre los tiempos, no del tiempo absoluto.",
        "R_Falsas": [
            "Implica que las probabilidades de transición dependen del estado inicial.",
            "Establece que las probabilidades de transición son constantes a lo largo del tiempo.",
            "Se refiere a que las probabilidades de transición cambian con el tiempo."
        ],
        "R_Truco": "Implica que las probabilidades de transición dependen del tiempo absoluto"
    }
]');
INSERT INTO Leccion VALUES(3441,"3.4.4E Ejercicios de  Aplicación de cadena de Markov", 1, 1,
'[
    {
        "Enunciado": "Considerando la siguiente matriz de transición para un proceso de Markov que modela días lluviosos y secos: nn( P = begin{pmatrix} 0.4 & 0.2  0.6 & 0.8 end{pmatrix} )nn¿Cuál es la probabilidad estacionaria para el estado de días secos ( X^*_1 )?",
        "R_Correcta": "( X^*_1 = 0.25 )",
        "R_Falsas": ["( X^*_1 = 0.5 )", "( X^*_1 = 0.75 )", "( X^*_1 = 0.2 )"],
        "R_Truco": "( X^*_1 = 0.4 ), asumiendo una permanencia en el mismo estado"
    },
    {
        "Enunciado": "En el modelo de Markov que representa días lluviosos y secos con la matriz de transición dada, si hoy es un día lluvioso, ¿cuál es la probabilidad de que mañana también sea lluvioso?",
        "R_Correcta": "0.8",
        "R_Falsas": ["0.4", "0.6", "0.2"],
        "R_Truco": "0.6, considerando una transición errónea entre estados"
    },
    {
        "Enunciado": "Utilizando el proceso de Markov para modelar días lluviosos y secos con la matriz de transición: nn( P = begin{pmatrix} 0.4 & 0.2  0.6 & 0.8 end{pmatrix} )nn¿Cuál es la probabilidad de que, partiendo de un día seco, al segundo día también sea seco?",
        "R_Correcta": "0.32",
        "R_Falsas": ["0.4", "0.25", "0.48"],
        "R_Truco": "0.4, confundiendo un solo paso con dos pasos"
    },
    {
        "Enunciado": "Si en una cadena de Markov para días lluviosos y secos se tiene una probabilidad de transición de seco a lluvioso de 0.6, ¿cuál es la probabilidad de que en dos días consecutivos, ambos sean lluviosos?",
        "R_Correcta": "0.64",
        "R_Falsas": ["0.8", "0.48", "0.36"],
        "R_Truco": "0.6, confundiendo una transición de un solo día"
    },
    {
        "Enunciado": "Dada la matriz de transición para un proceso de Markov de días lluviosos y secos, si hoy es un día seco, ¿cuál es la probabilidad de que en tres días sea lluvioso?",
        "R_Correcta": "0.488",
        "R_Falsas": ["0.6", "0.35", "0.25"],
        "R_Truco": "0.3, asumiendo una transición constante"
    }
]');
INSERT INTO Leccion VALUES(4111,"4.1.1E Ejercicios de Prueba de patrones uniformes", 1, 1,
'[
    {
        "Enunciado": "En una región geográfica de 1000 km², se desea aplicar una prueba de patrones uniformes para evaluar si los incendios forestales están distribuidos uniformemente. Si se divide el área en 100 celdas de igual tamaño y se registran los incendios en cada celda, ¿qué debe hacerse para evaluar la uniformidad de los eventos?",
        "R_Correcta": "Calcular la media y la varianza de los incendios por celda y comparar con un patrón uniforme.",
        "R_Falsas": [
            "Dividir el área en celdas de tamaño diferente.",
            "Contar los incendios sin calcular la media y varianza.",
            "Aplicar la prueba de hipótesis ANOVA."
        ],
        "R_Truco": "Calcular solo la media de incendios por celda"
    },
    {
        "Enunciado": "Si al realizar una prueba de patrones uniformes en un área se obtiene una varianza significativamente menor que la media, ¿qué conclusión se puede sacar?",
        "R_Correcta": "Los eventos están distribuidos de manera más regular de lo esperado en un patrón uniforme.",
        "R_Falsas": [
            "Los eventos están distribuidos de manera completamente aleatoria.",
            "Los eventos están distribuidos uniformemente.",
            "La varianza no tiene relevancia en esta prueba."
        ],
        "R_Truco": "Los eventos están distribuidos completamente al azar"
    },
    {
        "Enunciado": "En una prueba de patrones uniformes, ¿qué prueba estadística es más adecuada para verificar la hipótesis de que los eventos están distribuidos de manera uniforme?",
        "R_Correcta": "La prueba Chi-cuadrada.",
        "R_Falsas": [
            "La prueba t de Student.",
            "La prueba de Kolmogorov-Smirnov.",
            "La prueba de correlación de Pearson."
        ],
        "R_Truco": "La prueba de Kolmogorov-Smirnov"
    },
    {
        "Enunciado": "Si se utiliza la prueba de patrones uniformes para analizar la distribución de árboles en un bosque, ¿cuál sería un indicador clave de que los árboles están distribuidos uniformemente?",
        "R_Correcta": "La varianza del número de árboles por celda es cercana a la media.",
        "R_Falsas": [
            "La media es mucho mayor que la varianza.",
            "La varianza es significativamente mayor que la media.",
            "La media y varianza no tienen importancia en este contexto."
        ],
        "R_Truco": "La media del número de árboles por celda es significativamente mayor que la varianza"
    },
    {
        "Enunciado": "Al aplicar la prueba de patrones uniformes en la distribución de estrellas en una porción del cielo, se obtiene una varianza significativamente mayor que la media. ¿Qué implica esto acerca de la distribución de las estrellas?",
        "R_Correcta": "Las estrellas están agrupadas o presentan una distribución no uniforme.",
        "R_Falsas": [
            "Las estrellas están distribuidas uniformemente.",
            "Las estrellas están distribuidas de forma regular.",
            "No se puede sacar ninguna conclusión de estos resultados."
        ],
        "R_Truco": "Las estrellas están distribuidas de manera completamente uniforme"
    }
]');
INSERT INTO Leccion VALUES(4121,"4.1.2E Ejercicios de Pruebas de aleatoriedad espacial", 1, 1,
'[
    {
        "Enunciado": "En un análisis de aleatoriedad espacial, ¿cuál de las siguientes pruebas se utiliza para comparar la distribución de eventos con un modelo completamente aleatorio?",
        "R_Correcta": "Prueba Chi-cuadrada.",
        "R_Falsas": ["Índice de Morisita.", "KNN (Vecino más cercano).", "Método de Monte Carlo."],
        "R_Truco": "Índice de Morisita, ya que también mide patrones de distribución"
    },
    {
        "Enunciado": "¿Qué mide el índice de Morisita en una prueba de aleatoriedad espacial?",
        "R_Correcta": "La agregación de eventos en un área determinada.",
        "R_Falsas": [
            "La distancia promedio entre puntos.",
            "La similitud entre una distribución observada y un modelo aleatorio.",
            "La densidad de eventos en una región específica."
        ],
        "R_Truco": "La densidad de eventos en una región específica"
    },
    {
        "Enunciado": "Si quieres evaluar la distancia entre puntos en función de sus vecinos más cercanos en una prueba de aleatoriedad espacial, ¿qué método utilizarías?",
        "R_Correcta": "KNN (Vecino más cercano).",
        "R_Falsas": ["Índice de Morisita.", "Prueba Chi-cuadrada.", "Simulación Monte Carlo."],
        "R_Truco": "Índice de Morisita, al confundir la función de medición de proximidad"
    },
    {
        "Enunciado": "¿Cuál es el propósito de la simulación Monte Carlo en pruebas de aleatoriedad espacial?",
        "R_Correcta": "Simular múltiples distribuciones aleatorias para comparar con la distribución observada.",
        "R_Falsas": [
            "Medir la densidad de puntos en un área dada.",
            "Determinar la distancia entre puntos y sus vecinos más cercanos.",
            "Comparar la varianza y la media de una distribución."
        ],
        "R_Truco": "Comparar la varianza y la media de una distribución"
    },
    {
        "Enunciado": "En un análisis espacial, si los eventos parecen estar más agrupados que lo que sugiere un patrón aleatorio, ¿cuál sería un posible valor del índice de Morisita?",
        "R_Correcta": "Mayor que 1.",
        "R_Falsas": ["Cercano a 0.", "Exactamente 1.", "Menor que 1."],
        "R_Truco": "Exactamente 1, al asumir una distribución agrupada uniforme"
    }
]');
INSERT INTO Leccion VALUES(4131,"4.1.3E Ejercicios de Patrones agrupados", 1, 1,
'[
    {
        "Enunciado": "En un análisis espacial, ¿qué característica define un patrón agrupado?",
        "R_Correcta": "Las entidades tienden a agruparse en ciertas áreas, en lugar de distribuirse de manera uniforme.",
        "R_Falsas": [
            "Las entidades están distribuidas uniformemente en todo el espacio.",
            "Las entidades están distribuidas de manera completamente aleatoria.",
            "Las entidades se reparten equitativamente entre todas las áreas."
        ],
        "R_Truco": "Las entidades se reparten equitativamente en algunas áreas"
    },
    {
        "Enunciado": "¿Cuál de los siguientes ejemplos es un caso de patrón agrupado?",
        "R_Correcta": "Distribución de enfermedades en áreas urbanas.",
        "R_Falsas": [
            "Reparto aleatorio de árboles en un bosque.",
            "Distribución uniforme de casas en una zona residencial.",
            "Distribución de postes de luz a intervalos regulares."
        ],
        "R_Truco": "Reparto aleatorio de árboles en un bosque, confundiendo aleatoriedad con agrupamiento"
    },
    {
        "Enunciado": "¿Qué prueba estadística puede utilizarse para determinar si una distribución de entidades sigue un patrón agrupado?",
        "R_Correcta": "Índice de Morisita.",
        "R_Falsas": [
            "Prueba de Kolmogorov-Smirnov.",
            "ANOVA.",
            "Prueba de correlación de Pearson."
        ],
        "R_Truco": "Prueba de Kolmogorov-Smirnov, al confundirla con pruebas de distribución"
    },
    {
        "Enunciado": "En el análisis de un patrón agrupado, ¿qué método sería adecuado para medir la distancia entre las entidades y sus vecinos más cercanos?",
        "R_Correcta": "K-vecinos más cercanos (KNN).",
        "R_Falsas": [
            "Método Monte Carlo.",
            "Prueba Chi-cuadrada.",
            "Índice de Morisita."
        ],
        "R_Truco": "Índice de Morisita, que mide agregación en lugar de proximidad"
    },
    {
        "Enunciado": "Si un análisis muestra que la distribución de negocios en una ciudad tiene una alta varianza en relación con la media, ¿qué tipo de patrón sugiere este resultado?",
        "R_Correcta": "Patrón agrupado.",
        "R_Falsas": [
            "Patrón aleatorio.",
            "Distribución uniforme.",
            "Patrón regular."
        ],
        "R_Truco": "Patrón aleatorio, al suponer que varianza alta implica aleatoriedad"
    }
]');
INSERT INTO Leccion VALUES(4211,"4.2.1E Ejercicios de Análisis de primer orden", 1, 1,
'[
    {
        "Enunciado": "En un análisis del vecino más cercano de primer orden, ¿cuál es el primer paso a realizar?",
        "R_Correcta": "Definir el área de estudio.",
        "R_Falsas": [
            "Recolectar los datos mediante coordenadas ((x, y)).",
            "Calcular la media de las distancias.",
            "Generar puntos aleatorios en el área."
        ],
        "R_Truco": "Recolectar los datos mediante coordenadas ((x, y))"
    },
    {
        "Enunciado": "Durante un análisis de primer orden, ¿cómo se obtiene la distancia entre los puntos o vecinos más cercanos?",
        "R_Correcta": "Se calcula la distancia euclidiana entre cada punto y su vecino más cercano.",
        "R_Falsas": [
            "Se mide la distancia media entre todos los puntos.",
            "Se utiliza la distancia de Manhattan.",
            "Se calcula la distancia máxima entre todos los puntos."
        ],
        "R_Truco": "Se utiliza la distancia de Manhattan"
    },
    {
        "Enunciado": "Después de calcular las distancias entre los puntos y sus vecinos más cercanos, ¿qué se debe hacer en un análisis del vecino más cercano de primer orden?",
        "R_Correcta": "Calcular la media de las distancias obtenidas.",
        "R_Falsas": [
            "Comparar las distancias con una distribución uniforme.",
            "Realizar una prueba de Chi-cuadrada.",
            "Determinar la varianza de las distancias."
        ],
        "R_Truco": "Comparar las distancias con una distribución uniforme"
    },
    {
        "Enunciado": "En el análisis del vecino más cercano, una vez que se han generado puntos aleatorios y se ha repetido el proceso, ¿qué conclusión se puede sacar si las distancias promedio observadas son significativamente menores que las distancias aleatorias?",
        "R_Correcta": "Existe un patrón de agrupamiento en la distribución de los puntos.",
        "R_Falsas": [
            "Los puntos están distribuidos de manera completamente aleatoria.",
            "Los puntos están distribuidos uniformemente.",
            "La varianza es demasiado alta para sacar conclusiones."
        ],
        "R_Truco": "Los puntos están distribuidos de manera completamente aleatoria"
    },
    {
        "Enunciado": "En un análisis del vecino más cercano de primer orden, ¿qué información proporcionan las coordenadas ((x, y)) recolectadas?",
        "R_Correcta": "La ubicación espacial precisa de cada punto en el área de estudio.",
        "R_Falsas": [
            "La distancia exacta entre cada par de puntos.",
            "El tamaño del área de estudio.",
            "La densidad de los puntos en cada región del área de estudio."
        ],
        "R_Truco": "La distancia exacta entre cada par de puntos"
    }
]');
INSERT INTO Leccion VALUES(4221,"4.2.2E Ejercicios de Análisis de segundo orden", 1, 1,
'[
    {
        "Enunciado": "¿Qué mide la función ( K ) de Ripley en el análisis de segundo orden?",
        "R_Correcta": "La densidad de eventos en función de la distancia entre los puntos.",
        "R_Falsas": [
            "La distancia euclidiana entre los puntos.",
            "La densidad total de puntos en el área de estudio.",
            "La varianza de las distancias entre puntos."
        ],
        "R_Truco": "La densidad total de puntos en el área de estudio"
    },
    {
        "Enunciado": "¿Qué representa la transformación de la función ( K ) de Ripley en la función ( L )?",
        "R_Correcta": "Facilita la interpretación al normalizar la escala de la función ( K ).",
        "R_Falsas": [
            "Aumenta la complejidad del cálculo.",
            "Elimina la influencia de la densidad observada.",
            "Modifica los resultados obtenidos con la función ( K )."
        ],
        "R_Truco": "Elimina la influencia de la densidad observada"
    },
    {
        "Enunciado": "En el análisis de segundo orden, si la función ( L(r) ) es mayor que lo esperado bajo un modelo aleatorio, ¿qué implica esto?",
        "R_Correcta": "Los puntos tienden a agruparse.",
        "R_Falsas": [
            "Los puntos están distribuidos de manera completamente aleatoria.",
            "Los puntos tienden a dispersarse.",
            "No se puede sacar ninguna conclusión."
        ],
        "R_Truco": "Los puntos están distribuidos de manera completamente aleatoria"
    },
    {
        "Enunciado": "¿Qué diferencia principal existe entre el análisis de primer orden y el de segundo orden en cuanto a la distribución de los puntos?",
        "R_Correcta": "El análisis de segundo orden evalúa las interacciones entre los puntos.",
        "R_Falsas": [
            "El análisis de segundo orden solo mide distancias absolutas.",
            "El análisis de primer orden es más detallado en las interacciones.",
            "El análisis de primer orden no incluye la densidad de puntos."
        ],
        "R_Truco": "El análisis de primer orden es más detallado en las interacciones"
    },
    {
        "Enunciado": "¿Cuál es el propósito del análisis de la distribución de distancias en el análisis de segundo orden?",
        "R_Correcta": "Determinar patrones de agrupamiento o dispersión entre los puntos.",
        "R_Falsas": [
            "Identificar la ubicación precisa de cada punto.",
            "Calcular la distancia máxima entre los puntos.",
            "Medir la densidad de puntos en un área específica."
        ],
        "R_Truco": "Medir la densidad de puntos en un área específica"
    }
]');
INSERT INTO Leccion VALUES(4301,"4.3E Ejercicios de Patrones de puntos marcados", 1, 1,
'[
    {
        "Enunciado": "En un análisis de patrones de puntos marcados, ¿qué información se utiliza para describir cada punto?",
        "R_Correcta": "Las coordenadas ((x, y)) y los atributos asociados a cada punto.",
        "R_Falsas": [
            "Únicamente las coordenadas ((x, y)).",
            "La distancia entre los puntos.",
            "Solo la densidad de puntos en el área."
        ],
        "R_Truco": "Únicamente las coordenadas ((x, y))"
    },
    {
        "Enunciado": "En el análisis de patrones de puntos marcados, ¿qué representa un *atributo* de un punto?",
        "R_Correcta": "Una característica específica asociada al punto, como tipo de evento o valor.",
        "R_Falsas": [
            "La distancia entre puntos.",
            "La ubicación del punto en coordenadas ((x, y)).",
            "La densidad de puntos en el área."
        ],
        "R_Truco": "La ubicación del punto en coordenadas ((x, y))"
    },
    {
        "Enunciado": "Si en un análisis de patrones de puntos marcados en una ciudad los puntos representan ubicaciones de tiendas, ¿qué sería un ejemplo de un atributo asociado a cada punto?",
        "R_Correcta": "El tipo de tienda (por ejemplo, supermercado, librería, etc.).",
        "R_Falsas": [
            "La coordenada exacta del punto.",
            "La distancia entre las tiendas.",
            "El área total de la ciudad."
        ],
        "R_Truco": "La distancia entre las tiendas"
    },
    {
        "Enunciado": "En un estudio de distribución de árboles en un bosque, ¿cuál de los siguientes podría ser un atributo asociado a cada punto (árbol) en un análisis de puntos marcados?",
        "R_Correcta": "El tipo de especie del árbol.",
        "R_Falsas": [
            "La distancia al árbol más cercano.",
            "La altura promedio de los árboles en el área.",
            "La densidad de árboles en el bosque."
        ],
        "R_Truco": "La altura promedio de los árboles en el área"
    },
    {
        "Enunciado": "Cuando se realiza un análisis de patrones de puntos marcados, ¿qué tipo de análisis adicional se puede hacer con los atributos asociados a los puntos?",
        "R_Correcta": "Evaluar cómo los atributos influyen en la disposición espacial de los puntos.",
        "R_Falsas": [
            "Calcular únicamente la media de las distancias entre puntos.",
            "Determinar la probabilidad de eventos sin considerar atributos.",
            "Analizar solo las coordenadas espaciales sin incluir atributos."
        ],
        "R_Truco": "Calcular únicamente la media de las distancias entre puntos"
    }
]');
