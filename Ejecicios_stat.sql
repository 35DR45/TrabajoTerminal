INSERT INTO Leccion VALUES(1111,"1.1.1E Ejercicios de medidas de tendencia central para datos agrupados y no agrupados", 1, 1,
'[
    {
        "Enunciado": "Encuentra la media de los siguientes números: 3,4,5,7,25,5,7",
        "R_Correcta": “8”,
        "R_Falsas": [“10”,”15”,”25”]
    },
    {
        "Enunciado": "Encuentra la moda de los siguientes números: 3,4,5,6,25,5,7",
        "R_Correcta": “5”,
        "R_Falsas": [“4”,”6”,”25”]
    },
{
        "Enunciado": "Cuales son las medidas de tendencia central más usadas",
        "R_Correcta": “media, moda y mediana”,
        "R_Falsas": [“mediana geométrica, varianza, desviación estándar”,
” Varianza, percentil 50, distancia euclidiana”,
” rango intercuartílico, moda cuadrática, mediana”]
    },
{
        "Enunciado": "Encuentra la mediana de los siguientes números: 3,4,5,6,7,25,30",
        "R_Correcta": “6”,
        "R_Falsas": [“4”,”5”,”25”]
    },
{
        "Enunciado": "Encuentra la media y moda de los siguientes números: 2, 3, 4, 4, 5, 6",
        "R_Correcta": “media = 4, moda = 4”,
        "R_Falsas": [“media = 4, moda = 3”,” media = 3.5, moda = 4”,
” media = 3, moda = 3”]
    },
]');
INSERT INTO Leccion VALUES(1121,"1.1.2E Ejercicios de medidas de dispersión para datos agrupados y no agrupados", 1, 1,
'[
    {
        "Enunciado": "Son algunas medidas de dispersión ",
        "R_Correcta": “Rango, Varianza y desviación estándar”,
        "R_Falsas": [“media, moda y mediana”,
” Cuartiles y percentiles”,
” Frecuencia y media geométrica”]
    },
    {
        "Enunciado": "Calcula el rango de los siguientes números: 3,4,5,6,25,5,7",
        "R_Correcta": “22”,
        "R_Falsas": [“20”,”18”,”25”]
    },
{
        "Enunciado": "La varianza es:",
        "R_Correcta": “La variabilidad de un conjunto de datos relacionados o no.”,
        	         "R_Falsas": [“El promedio de todos los valores en un conjunto de datos”,
” La diferencia entre el valor máximo y el mínimo en un conjunto de datos”,
” la suma de todos los valores en un conjunto”]
    },
{	
 "Enunciado": "¿Qué significa la desviación estándar en un conjunto de datos?", 
"R_Correcta": "La desviación estándar mide cuánto se dispersan los datos respecto a la media.", 
"R_Falsas": [ "La desviación estándar es la suma de todos los valores en un conjunto.", "La desviación estándar indica el valor máximo en un conjunto de datos.", "La desviación estándar es igual a la media de los datos.”]
 
},
{ 
"Enunciado": "Calcula la varianza del siguiente conjunto de datos: 4, 6, 8.",
 "R_Correcta": "4",
 "R_Falsas": [ "2", "6", "8”] 
}
]');
INSERT INTO Leccion VALUES(1131,"1.1.3E Ejercicios de Cuartiles y percentiles", 1, 1,
'[{ 
"Enunciado": "¿Qué son los cuartiles en un conjunto de datos y qué representan?",
 "R_Correcta": "Los cuartiles dividen un conjunto de datos en cuatro partes iguales, donde Q1 es el 25% de los datos, Q2 es la mediana (50%) y Q3 es el 75%.",
 "R_Falsas": [ "Los cuartiles son las medias de los valores máximos y mínimos.",
 "Los cuartiles son siempre los valores más cercanos al promedio.", 
"Los cuartiles solo se aplican a conjuntos de datos con un número par de elementos." 
] 
}, 
{ 
"Enunciado": "Encuentra el primer cuartil (Q1) del siguiente conjunto de datos: 2, 4, 6, 8, 10.", 
"R_Correcta": "4", 
"R_Falsas": ["2", "6", "8"]
 },
 { 	
"Enunciado": "Encuentra el tercer cuartil (Q3) del siguiente conjunto de datos: 3, 5, 7, 9.",
 "R_Correcta": "8",
 "R_Falsas": ["7", "9", "5"]
},
{
 "Enunciado": "¿Cuál es el percentil 25 (P25) del siguiente conjunto de datos: 1, 3, 7, 8, 10, 12?",
 "R_Correcta": "5",
 "R_Falsas": ["3", "7", "1"] 
},
{	
"Enunciado": "Encuentra los cuartiles Q1 y Q3 del siguiente conjunto de datos: 3, 6, 9, 12, 15, 18, 21.",
"R_Correcta": "Q1: 9, Q3: 18",
 "R_Falsas": [ "Q1: 6, Q3: 15", "Q1: 3, Q3: 21", "Q1: 12, Q3: 15”]
 } 
]');
INSERT INTO Leccion VALUES(1141,"1.1.4E Ejercicios de Diagramas de Caja, Histograma, graficas de dispersión simple y grafica qq", 1, 1,
'[	 
{	 "Enunciado": "¿Qué información proporciona un diagrama de caja sobre un conjunto de datos?",
 "R_Correcta": "Un diagrama de caja muestra la mediana, los cuartiles y los valores atípicos del conjunto de datos.",
 "R_Falsas": [ "Un diagrama de caja solo muestra el valor máximo y mínimo.", "Un diagrama de caja es un tipo de gráfico circular.",
 "Un diagrama de caja representa la frecuencia de los datos." ]
 },
 { 
"Enunciado": "¿Qué representa un histograma en un conjunto de datos?",
 "R_Correcta": "Un histograma muestra la distribución de frecuencias de los datos en intervalos o bins.",
"R_Falsas": [ "Un histograma muestra solo el promedio de los datos.", "Un histograma representa datos categóricos en formato de barras.", "Un histograma indica únicamente los valores máximos y mínimos." ] 
},
{ 	
"Enunciado": "¿Qué se puede inferir de un gráfico de dispersión?", "R_Correcta": "Un gráfico de dispersión muestra la relación entre dos variables y puede indicar correlación.",
 "R_Falsas": [ "Un gráfico de dispersión solo muestra la media de los datos.", "Un gráfico de dispersión es útil solo para datos categóricos.", "Un gráfico de dispersión representa la variabilidad de una sola variable.”] 
},
 {
 "Enunciado": "¿Cuál es el propósito principal de un gráfico QQ?",
 "R_Correcta": "Un gráfico QQ se utiliza para comparar la distribución de un conjunto de datos con una distribución teórica, como la normal.",
 "R_Falsas": [ "Un gráfico QQ muestra solo los valores atípicos.", "Un gráfico QQ es un tipo de histograma.", "Un gráfico QQ indica la media y la varianza de los datos." 
]
 },
 {
 "Enunciado": "¿Cuál es la principal diferencia entre un diagrama de caja y un histograma?",
"R_Correcta": "Un diagrama de caja resume estadísticas descriptivas como la mediana y cuartiles, mientras que un histograma muestra la distribución de frecuencias de los datos.",
 "R_Falsas": [ "Un diagrama de caja muestra la distribución de frecuencias, y un histograma muestra cuartiles.", "Ambos gráficos representan los mismos datos pero de diferentes maneras.", "Un diagrama de caja solo puede usarse con datos categóricos, mientras que un histograma es para datos numéricos." ] 
}
 ]');
 INSERT INTO Leccion VALUES(1211,"1.2.1E Ejercicios de Prueba de bondad de ajuste", 1, 1,
 '[
{	 "Enunciado": "¿Qué es una prueba de bondad de ajuste?",
 "R_Correcta": "Es una prueba estadística que evalúa si un conjunto de datos se ajusta a una distribución teórica específica.",
 "R_Falsas": [ "Es una prueba que determina el promedio de un conjunto de datos.", "Es una técnica utilizada únicamente para datos categóricos.", "Es un método que compara dos muestras de datos." 
]
 },
 
 {	 
"Enunciado": "¿Cuál es el objetivo principal de la prueba de Chi-cuadrado para la bondad de ajuste?",
"R_Correcta": "Evaluar si la frecuencia observada en los datos se ajusta a las frecuencias esperadas bajo una hipótesis nula.",
 "R_Falsas": [ "Determinar la media de un conjunto de datos.", "Comparar la varianza de dos conjuntos de datos.", "Establecer correlación entre dos variables." ] 
},
 {
"Enunciado": "¿Qué hipótesis se establece en una prueba de bondad de ajuste?",
 "R_Correcta": "La hipótesis nula (H0) establece que los datos se ajustan a la distribución teórica propuesta.",
 "R_Falsas": [ "La hipótesis nula establece que todos los datos son iguales.", "La hipótesis alternativa establece que los datos se ajustan a la distribución teórica.", "La hipótesis nula se utiliza solo para datos categóricos." ] 
},
 {
 "Enunciado": "¿Qué se debe hacer si el valor p resultante de una prueba de bondad de ajuste es menor que el nivel de significancia?",
 "R_Correcta": "Se rechaza la hipótesis nula, indicando que los datos no se ajustan a la distribución teórica.",
 "R_Falsas": [ "Se acepta la hipótesis nula.", "Se realiza una nueva prueba sin cambios.", "Se concluye que los datos son idénticos." ]
},
 {
 "Enunciado": "Un conjunto de datos tiene las siguientes frecuencias observadas: 10, 20, 15, 5. Si las frecuencias esperadas son 12, 18, 15, 5, calcula el valor de Chi-cuadrado.",
 "R_Correcta": "0.55",
 "R_Falsas": [ "1.33", "2.25", "0.75" ]
 } 
]');
INSERT INTO Leccion VALUES(1221,"1.2.2E Ejercicios de Prueba de hipótesis (errores tipo 1 y 2)", 1, 1,
'[ 
{
"Enunciado": "¿Qué es la hipótesis nula (H0) en estadística?",
 "R_Correcta": "Es una suposición inicial que establece que no hay efecto o diferencia significativa en los datos.",
 "R_Falsas": [ "Es una suposición que siempre se acepta como verdadera.", "Es la única hipótesis que se puede probar en un estudio.", "Es la hipótesis que se utiliza para establecer una correlación." ] 
},
 {
 "Enunciado": "¿Qué se entiende por estadístico de contraste (TS)?", "R_Correcta": "Es un valor calculado a partir de los datos de la muestra que se utiliza para decidir si rechazar la hipótesis nula.",
 "R_Falsas": [ "Es el promedio de todos los datos de la muestra.", "Es la mediana de los datos de la población.", "Es un valor fijo que no cambia con diferentes muestras." ]
 },
 {
 "Enunciado": "¿Qué es la región crítica (C) en una prueba de hipótesis?", "R_Correcta": "Es el conjunto de valores para los cuales se rechaza la hipótesis nula.", 
"R_Falsas": [ "Es la zona donde se aceptan todas las hipótesis.", "Es el rango de valores que no se utilizan en el análisis.", "Es el mismo que el nivel de significancia α." ] },
 {
 "Enunciado": "¿Qué indica un valor p menor que el nivel de significancia α?", "R_Correcta": "Indica que hay suficiente evidencia para rechazar la hipótesis nula.",
 "R_Falsas": [ "Indica que la hipótesis nula debe ser aceptada.", "Significa que los datos son siempre normales.", "Indica que no hay relación entre las variables." ] 
},
 {
 "Enunciado": "¿Cuál es un ejemplo de error de tipo 1?",
 "R_Correcta": "Rechazar la hipótesis nula cuando en realidad es cierta.", "R_Falsas": [ "No rechazar la hipótesis nula cuando es falsa.", "Aceptar una hipótesis alternativa sin evidencia.", "Confundir dos poblaciones en el análisis." ]
 }
 ]');
INSERT INTO Leccion VALUES(1231,"1.2.3E Ejercicios de estimadores", 1, 1, 
'[
 {
 "Enunciado": "¿Qué representa el símbolo ĉ en estadística?",
 "R_Correcta": "El símbolo ĉ representa un estimador puntual de un parámetro poblacional.",
 "R_Falsas": [ "El símbolo ĉ representa el error estándar de la media.", "El símbolo ĉ se usa para denotar la mediana de los datos.", "El símbolo ĉ es un valor absoluto en un conjunto de datos." ]
 },
 { 
"Enunciado": "¿Cuál es la diferencia entre un estimador puntual y un intervalo de confianza?",
 "R_Correcta": "Un estimador puntual proporciona un solo valor para un parámetro, mientras que un intervalo de confianza proporciona un rango de valores dentro del cual se espera que se encuentre el parámetro.",
 "R_Falsas": [ "Un estimador puntual siempre es más preciso que un intervalo de confianza.", "Un intervalo de confianza no puede ser utilizado para estimar parámetros poblacionales.", "Ambos proporcionan la misma información sobre la población." ]
 },
 {
 "Enunciado": "¿Por qué es importante la estimación puntual en estadísticas?", "R_Correcta": "Es importante porque proporciona una estimación clara y concisa del valor de un parámetro poblacional.",
 "R_Falsas": [ "No es importante, ya que solo complica el análisis.", "Solo se utiliza en muestras grandes.", "Se usa únicamente para datos categóricos." ]
 },
 {
 "Enunciado": "Si el estimador puntual de la media de una muestra es ĉ = 50, ¿qué significa esto?", 
"R_Correcta": "Significa que se estima que la media del parámetro poblacional es 50.",
 "R_Falsas": [ "Significa que la media de todos los datos es 50.", "Significa que la media es 50 con un error del 10%.", "Indica que el 50% de los datos son menores que 50." ] 
},
 {
 "Enunciado": "Si se dice que ĉ = 30 es un estimador puntual, ¿cuál es su posible implicación en la investigación?",
 "R_Correcta": "Indica que se estima que el parámetro poblacional es aproximadamente 30.",
 "R_Falsas": [ "Indica que el 30% de la muestra tiene un valor de 30.", "Significa que 30 es el valor máximo en la población.", "Indica que todos los datos son iguales a 30." ] 
}
 ]');
INSERT INTO Leccion VALUES(1241,"1.2.4E Ejercicios de Análisis de la varianza ANOVA", 1, 1, 
'[
 { 
"Enunciado": "¿Qué es ANOVA en estadística?",
 "R_Correcta": "ANOVA es un método para inferir sobre parámetros relacionados a las medias poblacionales.",
 "R_Falsas": [ "ANOVA es una prueba que solo se utiliza para datos categóricos.", "ANOVA calcula la mediana de un conjunto de datos.", "ANOVA es un método que solo compara dos grupos." ]
},
 {
 "Enunciado": "En un análisis de varianza unifactorial, ¿qué estimadores se consideran?",
 "R_Correcta": "Se considera la varianza poblacional y un segundo estimador que es válido cuando la hipótesis nula es cierta.",
 "R_Falsas": [ "Solo se considera la media muestral.", "Se utilizan dos estimadores diferentes para cada grupo.", "El segundo estimador no es necesario en ANOVA." ]
 },
 {
 "Enunciado": "¿Qué distribución sigue el estadístico de contraste (TS) en ANOVA unifactorial?",
 "R_Correcta": "TS sigue la distribución F con m-1 grados de libertad en el numerador y m(n-1) grados de libertad en el denominador.", 
"R_Falsas": [ "TS sigue una distribución normal.", "TS sigue una distribución t de Student.", "TS es siempre un valor constante." ] 
},
 {
 "Enunciado": "¿Cuál es el propósito de calcular el estadístico de contraste (TS) en ANOVA?",
 "R_Correcta": "Determinar lo grande que puede ser TS para justificar el rechazo de la hipótesis nula (H0).",
 "R_Falsas": [ "Calcular el promedio de las medias muestrales.", "Establecer la relación entre dos variables.", "Determinar la varianza de la población." ]
 },
 {
 "Enunciado": "Si en un ANOVA unifactorial se obtiene un valor de TS muy alto, ¿qué implica esto en relación con la hipótesis nula?", 
"R_Correcta": "Implica que hay evidencia suficiente para rechazar la hipótesis nula (H0).",
 "R_Falsas": [ "Significa que todas las medias son iguales.", "Indica que no hay variabilidad entre los grupos.", "Significa que la varianza es cero." ] 
}
 ]');
 INSERT INTO Leccion VALUES(1251,"1.2.5E Ejercicios de Prueba Chi cuadrada", 1, 1, 
 '[
 {
 "Enunciado": "¿Qué se busca al ajustar una distribución teórica a una distribución empírica?",
 "R_Correcta": "Se busca determinar si los resultados observados se alinean con lo que se esperaría bajo la distribución teórica.",
 "R_Falsas": [ "Se busca calcular el promedio de ambos conjuntos de datos.", "Se busca establecer una correlación entre dos variables.", "Se busca determinar el tamaño de la muestra necesaria." ]
 },
 {
 "Enunciado": "¿Cuál es un método común para evaluar el ajuste de una distribución teórica?",
 "R_Correcta": "La prueba de Chi-cuadrado es un método común para evaluar el ajuste.",
 "R_Falsas": [ "La regresión lineal se utiliza para evaluar el ajuste de distribuciones.", "El análisis de varianza (ANOVA) es el método más adecuado.", "La prueba t de Student se usa para este propósito." ]
 },
 {
 "Enunciado": "¿Qué significa que una distribución empírica se ajuste bien a una distribución teórica?",
 "R_Correcta": "Significa que las frecuencias observadas se parecen a las frecuencias esperadas de la distribución teórica.", 
"R_Falsas": [ "Significa que todas las observaciones son iguales.", "Significa que la media de la distribución empírica es la misma que la de la teórica.", "Significa que no hay variabilidad en los datos." ] 
},
 
{
 "Enunciado": "¿Qué implica un valor p alto en una prueba de ajuste?", "R_Correcta": "Indica que no hay suficiente evidencia para rechazar la hipótesis de que las distribuciones son iguales.", 
"R_Falsas": [ "Significa que las distribuciones son exactamente iguales.", "Implica que se debe aceptar la hipótesis alternativa.", "Indica que la muestra es demasiado pequeña." ]
 },
 {
 "Enunciado": "¿Cuál es un resultado posible si se rechaza la hipótesis de ajuste en una prueba de bondad de ajuste?",
 "R_Correcta": "Se concluye que la distribución empírica no se ajusta a la distribución teórica propuesta.",
 "R_Falsas": [ "Se acepta que ambas distribuciones son idénticas.", "Se determina que la varianza es cero.", "Se concluye que todas las observaciones son atípicas." ]
 }
 ]');
 INSERT INTO Leccion VALUES(2111,"2.1.1E Ejercicios de Cálculo de coeficientes de regresión", 1, 1, 
'[
 {
 "Enunciado": "¿Qué representan los coeficientes de regresión en un modelo de regresión lineal?",
 "R_Correcta": "Los coeficientes de regresión representan el cambio esperado en la variable dependiente por cada unidad de cambio en la variable independiente.",
 "R_Falsas": [ "Los coeficientes de regresión son siempre iguales a uno.", "Representan la media de la variable dependiente.", "Indican la correlación entre las variables." ]
 },
 {
 "Enunciado": "¿Cuál es la fórmula general de una ecuación de regresión lineal simple?",
 "R_Correcta": "La fórmula es Y = β0 + β1X + ε, donde β0 es la intersección y β1 es el coeficiente de regresión.",
 "R_Falsas": [ "La fórmula es Y = β1X + ε.", "La fórmula no incluye un término de error.", "La fórmula solo se aplica a datos categóricos." ] 
},
 { 
"Enunciado": "¿Cómo se interpreta el coeficiente de regresión β1 en un modelo de regresión lineal?",
 "R_Correcta": "β1 indica cuántas unidades cambia Y por cada unidad que cambia X.",
 "R_Falsas": [ "β1 representa la suma de todos los valores de Y.", "β1 es el valor promedio de Y.", "β1 indica la relación entre dos variables categóricas." ] 
},
 { 
"Enunciado": "¿Qué método se utiliza comúnmente para calcular los coeficientes de regresión en un modelo lineal?",
 "R_Correcta": "Se utiliza el método de mínimos cuadrados para calcular los coeficientes de regresión.",
 "R_Falsas": [ "Se utiliza el método de máxima verosimilitud.", "Se utilizan estimaciones aleatorias.", "Se utiliza el análisis de varianza (ANOVA)." ]
},
 {
 "Enunciado": "Si un modelo de regresión lineal tiene un coeficiente de determinación (R²) de 0.85, ¿qué implica esto?", 
"R_Correcta": "Implica que el 85% de la variabilidad de la variable dependiente se explica por la variable independiente.",
 "R_Falsas": [ "Significa que las variables están perfectamente correlacionadas.", "Indica que no hay relación entre las variables.", "Significa que el modelo es ineficaz para predecir Y." ] 
} 
]');
INSERT INTO Leccion VALUES(2121,"2.1.2E Interpretación de los coeficientes usando la media, varianza y covarianza de las muestras", 1, 1, 
