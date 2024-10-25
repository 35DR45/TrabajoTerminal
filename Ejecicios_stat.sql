USE mydb;
delete from Leccion where Materia=1 && Tipo=1;
INSERT INTO Leccion VALUES(1111,"1.1.1E Ejercicios de medidas de tendencia central para datos agrupados y no agrupados", 1, 1,
'[
    {
        "Enunciado": "Encuentra la media de los siguientes números: 3,4,5,7,25,5,7",
        "R_Correcta": "8",
        "R_Falsas": ["10","15","25"]
    },
    {
        "Enunciado": "Encuentra la moda de los siguientes números: 3,4,5,6,25,5,7",
        "R_Correcta": "5",
        "R_Falsas": ["4","6","25"]
    },
{
        "Enunciado": "Cuales son las medidas de tendencia central más usadas",
        "R_Correcta": "media, moda y mediana",
        "R_Falsas": ["mediana geométrica, varianza, desviación estándar",
" Varianza, percentil 50, distancia euclidiana",
" rango intercuartílico, moda cuadrática, mediana"]
    },
{
        "Enunciado": "Encuentra la mediana de los siguientes números: 3,4,5,6,7,25,30",
        "R_Correcta": "6",
        "R_Falsas": ["4","5","25"]
    },
{
        "Enunciado": "Encuentra la media y moda de los siguientes números: 2, 3, 4, 4, 5, 6",
        "R_Correcta": "media = 4, moda = 4",
        "R_Falsas": ["media = 4, moda = 3"," media = 3.5, moda = 4",
" media = 3, moda = 3"]
    }
]');
INSERT INTO Leccion VALUES(1121,"1.1.2E Ejercicios de medidas de dispersión para datos agrupados y no agrupados", 1, 1,
'[
    {
        "Enunciado": "Son algunas medidas de dispersión ",
        "R_Correcta": "Rango, Varianza y desviación estándar",
        "R_Falsas": ["media, moda y mediana",
" Cuartiles y percentiles",
" Frecuencia y media geométrica"]
    },
    {
        "Enunciado": "Calcula el rango de los siguientes números: 3,4,5,6,25,5,7",
        "R_Correcta": "22",
        "R_Falsas": ["20","18","25"]
    },
{
        "Enunciado": "La varianza es:",
        "R_Correcta": "La variabilidad de un conjunto de datos relacionados o no.",
        	         "R_Falsas": ["El promedio de todos los valores en un conjunto de datos",
" La diferencia entre el valor máximo y el mínimo en un conjunto de datos",
" la suma de todos los valores en un conjunto"]
    },
{	
 "Enunciado": "¿Qué significa la desviación estándar en un conjunto de datos?", 
"R_Correcta": "La desviación estándar mide cuánto se dispersan los datos respecto a la media.", 
"R_Falsas": [ "La desviación estándar es la suma de todos los valores en un conjunto.", "La desviación estándar indica el valor máximo en un conjunto de datos.", "La desviación estándar es igual a la media de los datos."]
 
},
{ 
"Enunciado": "Calcula la varianza del siguiente conjunto de datos: 4, 6, 8.",
 "R_Correcta": "4",
 "R_Falsas": [ "2", "6", "8"] 
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
 "R_Falsas": [ "Q1: 6, Q3: 15", "Q1: 3, Q3: 21", "Q1: 12, Q3: 15"]
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
 "R_Falsas": [ "Un gráfico de dispersión solo muestra la media de los datos.", "Un gráfico de dispersión es útil solo para datos categóricos.", "Un gráfico de dispersión representa la variabilidad de una sola variable."] 
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
INSERT INTO Leccion VALUES(2121,"2.1.2E Ejercicios de Interpretación de los coeficientes usando la m, v y cv de las muestras", 1, 1, 
'[
 {
 "Enunciado": "¿Cómo se relaciona la media de las muestras con el cálculo de los coeficientes de regresión?",
 "R_Correcta": "La media de las muestras se utiliza para centrar los datos y calcular los coeficientes de regresión, ayudando a interpretar el cambio en Y por unidad de cambio en X.",
 "R_Falsas": [ "La media no se utiliza en el cálculo de los coeficientes de regresión.", "La media siempre es cero en regresión.", "La media solo se usa para datos categóricos." ]
},
 {
 "Enunciado": "¿Qué papel juega la varianza en la interpretación de los coeficientes de regresión?",
 "R_Correcta": "La varianza mide la dispersión de los datos, lo que ayuda a entender la estabilidad de la relación entre las variables.",
 "R_Falsas": [ "La varianza se utiliza para calcular la media de las muestras.", "La varianza no afecta la regresión lineal.", "La varianza es irrelevante en el análisis de regresión." ]
 },
 
{
"Enunciado": "¿Cómo se interpreta la covarianza en el contexto de la regresión?",
 "R_Correcta": "La covarianza indica la dirección de la relación lineal entre dos variables, donde valores positivos indican que ambas variables aumentan juntas.",
 "R_Falsas": [ "La covarianza siempre es igual a la varianza.", "La covarianza se utiliza solo para datos cualitativos.", "La covarianza no tiene relación con los coeficientes de regresión." ]
},
 {
 "Enunciado": "Si un coeficiente de regresión β1 es positivo, ¿qué se puede inferir sobre la varianza de las muestras?",
 "R_Correcta": "Indica que un aumento en la variable independiente X está asociado con un aumento en la variable dependiente Y, asumiendo que la varianza no es cero.",
 "R_Falsas": [ "Indica que las dos variables son independientes.", "Significa que no hay variabilidad en los datos.", "Implica que Y disminuye cuando X aumenta." ]
 },
 {
 "Enunciado": "¿Cuál es la relación entre la covarianza y la varianza en el contexto de los coeficientes de regresión?", 
"R_Correcta": "La covarianza se utiliza para calcular la correlación y los coeficientes de regresión, y está relacionada con la varianza de ambas variables.",
 "R_Falsas": [ "La covarianza es siempre mayor que la varianza.", "La varianza se calcula a partir de la covarianza.", "No hay relación entre covarianza y varianza en regresión." ] 
}]');
INSERT INTO Leccion VALUES(2131,"2.1.3E Ejercicios de Interpretación de los términos de error", 1, 1, 
'[ 
{
 "Enunciado": "¿Qué se entiende por término de error en un modelo de regresión lineal?", 
"R_Correcta": "El término de error representa la diferencia entre los valores observados y los valores predichos por el modelo.", 
"R_Falsas": [ "El término de error es la varianza de la variable dependiente.", "El término de error es siempre cero.", "El término de error mide la media de los datos." ]
 },
 {
 "Enunciado": "¿Por qué es importante analizar el término de error en una regresión lineal?",
"R_Correcta": "Es importante porque ayuda a evaluar la precisión del modelo y a identificar la variabilidad no explicada en los datos.",
 "R_Falsas": [ "No es relevante; solo se considera la pendiente del modelo.", "Es importante solo si el modelo es lineal.", "Los términos de error son irrelevantes para la validación del modelo." ] 
},
 {
 "Enunciado": "Si el término de error es muy grande en un modelo de regresión, ¿qué implica esto?",
 "R_Correcta": "Implica que el modelo tiene un bajo ajuste y que hay una gran discrepancia entre los valores observados y los predichos.",
 "R_Falsas": [ "Significa que el modelo es perfecto.", "Indica que las variables están correlacionadas perfectamente.", "Implica que todos los datos son idénticos." ]
 },
 
{
 "Enunciado": "¿Qué puede indicar un patrón en los términos de error de un modelo de regresión lineal?", 
"R_Correcta": "Un patrón puede indicar que el modelo no está capturando adecuadamente la relación entre las variables y sugiere la necesidad de un modelo diferente.",
 "R_Falsas": [ "Los patrones en los términos de error son siempre aleatorios.", "Indica que no hay errores en los datos.", "Los patrones son un signo de un modelo bien ajustado." ]
 },
 {
 "Enunciado": "Dada la siguiente información: en un modelo de regresión, los valores observados son [10, 12, 14] y los valores predichos son [9, 13, 15]. Calcula los términos de error.",
 "R_Correcta": "[1, -1, -1]",
 "R_Falsas": [ "[0, 1, 1]", "[2, -1, 0]", "[1, 1, -2]" ] 
}
]');
INSERT INTO Leccion VALUES(2201,"2.2.0E Ejercicios de Regresión no lineal", 1, 1, 
'[
 {
 "Enunciado": "¿Cuál es la principal diferencia entre regresión lineal y regresión no lineal?", 
"R_Correcta": "La regresión no lineal permite que la relación entre la variable independiente y dependiente se ajuste a una curva, no solo a una línea recta.", 
"R_Falsas": [ "La regresión no lineal siempre produce resultados menos precisos.", "La regresión no lineal utiliza solo datos categóricos.", "La regresión no lineal no se puede graficar." ]
},
 {
 "Enunciado": "En un modelo de regresión no lineal, si se utiliza una función cuadrática, ¿cuál es la forma general de la ecuación?",
 "R_Correcta": "La forma general es Y = β0 + β1X + β2X² + ε.",
 "R_Falsas": [ "La forma general es Y = β0 + β1X.", "La forma general es Y = β0 + β1X + β2X³.", "La forma general es Y = β0 + β1X + β2ln(X)." ] 
},
{
 "Enunciado": "Si se tiene un modelo de regresión no lineal en el que Y = 5 + 2X², ¿cuál es el efecto de un aumento de 1 unidad en X sobre Y?",
 "R_Correcta": "Un aumento de 1 unidad en X aumenta Y en 2X, lo que significa que el efecto dependerá del valor actual de X.",
 "R_Falsas": [ "Un aumento de 1 unidad en X siempre aumenta Y en 2.", "Un aumento de 1 unidad en X no afecta a Y.", "El efecto es constante, independientemente del valor de X." ]
},
 
 
{
 "Enunciado": "¿Qué indica un coeficiente de determinación (R²) bajo en un modelo de regresión no lineal?",
 "R_Correcta": "Indica que el modelo no explica bien la variabilidad de los datos observados.",
 "R_Falsas": [ "Indica que el modelo es perfecto.", "Significa que todas las variables son independientes.", "Indica que la relación es lineal." ] 
},
 {
 "Enunciado": "Dada la siguiente relación cuadrática: Y = 2 + 3X - X². ¿Qué valor de Y obtendrías para X = 4?",
 "R_Correcta": "Y = 2 + 3(4) - (4)² = 2 + 12 - 16 = -2.",
 "R_Falsas": [ "Y = 2 + 3(4) + (4)² = 18.", "Y = 2 + 3(4) - 4 = 14.", "Y = 2 + 3(2) - (2)² = 5." ]
 }
 ]');
 INSERT INTO Leccion VALUES(2211,"2.2.1E Ejercicios de Transformada log-log y semi-log", 1, 1, 
 '[
 {
 "Enunciado": "¿Qué es una transformación log-log en un modelo de regresión?",
 "R_Correcta": "Es una transformación en la que tanto la variable dependiente como la independiente se transforman aplicando logaritmos, permitiendo modelar relaciones proporcionales.",
 "R_Falsas": [ "Solo se aplica logaritmo a la variable dependiente.", "Se usa para transformar datos categóricos.", "Es una transformación que solo se aplica a modelos lineales." ]
},
 
{
 "Enunciado": "En un modelo semi-logarítmico, ¿qué variable se transforma usando logaritmos?",
 "R_Correcta": "Se transforma la variable dependiente, mientras que la variable independiente permanece en su forma original.",
 "R_Falsas": [ "Se transforma la variable independiente.", "Ambas variables se transforman usando logaritmos.", "No se utiliza logaritmo en absoluto." ]
 },
 {
 "Enunciado": "Dada la relación Y = 100X^2, ¿cómo se expresaría esta relación en forma log-log?",
 "R_Correcta": "Log(Y) = 2*Log(X) + Log(100).", 
"R_Falsas": [ "Log(Y) = 2X + 100.", "Y = 2Log(X) + 100.", "Y = Log(100) + Log(X^2)." ] 
},
 {
 "Enunciado": "Si en un modelo semi-logarítmico la relación es Y = 5 + 3X, ¿cómo se expresa la variable dependiente Y en forma logarítmica?", "R_Correcta": "Log(Y) = Log(5 + 3X).",
 "R_Falsas": [ "Log(Y) = 5 + 3Log(X).", "Y = 5Log(3X).", "Log(Y) = 5 + 3X." ] 
},
 {
 "Enunciado": "Si al aplicar una transformación log-log a los datos se obtiene un coeficiente de regresión de 1.5, ¿qué implica esto sobre la relación entre las variables?",
 "R_Correcta": "Implica que un aumento del 1% en la variable independiente se asocia con un aumento del 1.5% en la variable dependiente.",
 "R_Falsas": [ "Implica que la variable dependiente no se ve afectada por la independiente.", "Indica una relación negativa entre las variables.", "Implica que la relación es constante y no proporcional." ] } ]' );
INSERT INTO Leccion VALUES(2221,"2.2.2E Ejercicios de Optimizacion no lineal", 1, 1, 
'[
 {
 "Enunciado": "¿Qué es la optimización no lineal?", 
"R_Correcta": "Es el proceso de encontrar el máximo o mínimo de funciones que no son lineales, donde la relación entre variables no se puede expresar como una línea recta.",
 "R_Falsas": [ "Es un método que solo se aplica a funciones lineales.", "Se refiere únicamente a la optimización de funciones cuadráticas.", "Es el proceso de resolver ecuaciones lineales." ]
 },
 {
 "Enunciado": "En la función f(x, y) = x² + y², ¿cuál es el punto que minimiza la función?", 
"R_Correcta": "(0, 0).", 
"R_Falsas": [ "(1, 1).", "(2, 2).", "(0, 1)." ]
 },
 {
 "Enunciado": "¿Cómo se pueden encontrar los extremos de una función no lineal de varias variables?",
 "R_Correcta": "Se utilizan derivadas parciales y se igualan a cero para encontrar los puntos críticos.", 
"R_Falsas": [ "Se evalúa la función solo en puntos específicos.", "Se calcula la integral de la función.", "No se necesita usar derivadas." ] 
},
 {
 "Enunciado": "Si se tiene la función g(x) = -x³ + 3x² - 4, ¿cómo determinarías si hay un máximo o un mínimo en un punto crítico encontrado?",
 "R_Correcta": "Se evalúa la segunda derivada en el punto crítico; si es positiva, hay un mínimo; si es negativa, hay un máximo.",
 "R_Falsas": [ "Se evalúa la función original en puntos cercanos.", "Se utiliza el criterio de la primera derivada únicamente.", "No se necesita evaluar la segunda derivada." ] 
},
 {
 "Enunciado": "Dada la función h(x) = x² - 4x + 4, ¿cuál es el valor mínimo y dónde ocurre?", 
"R_Correcta": "El valor mínimo es 0 y ocurre en x = 2.",
 "R_Falsas": [ "El valor mínimo es -4 y ocurre en x = 0.", "No hay mínimo, solo un máximo.", "El valor mínimo es 4 y ocurre en x = 4." ] 
} 
]');
INSERT INTO Leccion VALUES(2231,"2.2.3E Ejercicios de Regresión polinomial", 1, 1, 
'[ 
{
 "Enunciado": "¿Qué es la regresión polinomial?",
 "R_Correcta": "Es un tipo de análisis de regresión que utiliza una ecuación polinómica para modelar la relación entre una variable dependiente y una o más variables independientes.", 
"R_Falsas": [ "Es un análisis que solo se aplica a datos lineales.", "Es un método para calcular promedios.", "Es una técnica de regresión que no utiliza variables independientes." ] 
},
{ 
"Enunciado": "Dada la función de regresión polinomial f(x) = 2 + 3x - x², ¿cuál es el valor de f(2)?",
 "R_Correcta": "f(2) = 2 + 3(2) - (2)² = 2 + 6 - 4 = 4.", 
"R_Falsas": [ "f(2) = 8.", "f(2) = 0.", "f(2) = 6." ] 
}, 
{ 
"Enunciado": "En un modelo de regresión polinomial de segundo grado, ¿qué forma tiene la ecuación general?",
 "R_Correcta": "La forma general es Y = a + bX + cX², donde a, b y c son coeficientes.",
 "R_Falsas": [ "La forma general es Y = a + bX.", "La forma general es Y = a + bX + cX³.", "La forma general es Y = aX + bX²." ] },
 {
 "Enunciado": "Si se ajusta un modelo de regresión polinomial y se obtiene un coeficiente de determinación (R²) de 0.85, ¿qué implica esto?", 
"R_Correcta": "Implica que el 85% de la variabilidad de la variable dependiente se explica por la variable independiente.",
 "R_Falsas": [ "Implica que el modelo es perfecto.", "Indica que no hay relación entre las variables.", "Implica que el 15% de los datos son irrelevantes." ]
 },
 { 
"Enunciado": "Dada la siguiente función polinomial: Y = 4 - 2X + X², ¿cuál es el mínimo valor de Y y en qué valor de X ocurre?", 
"R_Correcta": "El mínimo ocurre en X = 1, donde Y = 4 - 2(1) + (1)² = 3.", "R_Falsas": [ "El mínimo ocurre en X = 0, donde Y = 4.", "No hay mínimo en esta función.", "El mínimo ocurre en X = 2, donde Y = 0." ] 
}
 ]');
INSERT INTO Leccion VALUES(2301,"2.3E Ejercicios de Regresión Lineal Multiple", 1, 1,
'[ 
{
 "Enunciado": "¿Qué es la regresión lineal múltiple?",
 "R_Correcta": "Es un método de análisis estadístico que utiliza múltiples variables independientes para predecir el valor de una variable de respuesta.", "R_Falsas": [ "Es un análisis que solo utiliza una variable independiente.", "Es una técnica que no se puede graficar.", "Es un método exclusivo para datos categóricos." ]
 },
 {
 "Enunciado": "En un análisis de regresión lineal múltiple, ¿qué se busca al crear diagramas de dispersión por pares?",
 "R_Correcta": "Se busca identificar posibles relaciones entre cada variable independiente y la variable dependiente.", 
"R_Falsas": [ "Se busca confirmar que todas las variables son independientes.", "Se utiliza solo para visualizar datos categóricos.", "No se necesitan diagramas para un análisis de regresión." ]
 },
 { 
"Enunciado": "Dada la ecuación de un modelo de regresión lineal múltiple: Y = 5 + 2X₁ - 3X₂, ¿qué representa el coeficiente -3?",
 "R_Correcta": "Representa el cambio esperado en Y por cada unidad de aumento en X₂, manteniendo X₁ constante.",
 "R_Falsas": [ "Indica que X₁ y X₂ son independientes.", "Es el valor máximo de Y.", "Representa el valor de Y cuando X₁ y X₂ son cero." ]
 }, 
{ 
"Enunciado": "En un análisis de regresión lineal múltiple, ¿qué es el coeficiente de determinación (R²)?",
 "R_Correcta": "Es la proporción de la variabilidad total de la variable de respuesta que es explicada por las variables independientes en el modelo.", "R_Falsas": [ "Es el valor máximo de las variables independientes.", "Indica la cantidad de datos que se han utilizado en el modelo.", "Es la suma de los coeficientes del modelo." ]
 },
 { 
"Enunciado": "Dada la siguiente ecuación de regresión múltiple: Y = 10 + 4X₁ + 2X₂, ¿cuál es el valor de Y cuando X₁ = 3 y X₂ = 1?",
 "R_Correcta": "Y = 10 + 4(3) + 2(1) = 10 + 12 + 2 = 24.", 
"R_Falsas": [ "Y = 10 + 4 + 2 = 14.", "Y = 10 + 4(1) + 2(3) = 20.", "Y = 10 + 4(2) + 2(2) = 26." ] } ]');
INSERT INTO Leccion VALUES(2311,"2.3.1E Ejercicios de Aproximacion Matricial", 1, 1,
'[
 {
 "Enunciado": "¿Cómo se representa un modelo de regresión lineal múltiple usando notación matricial?",
 "R_Correcta": "Y = Xβ + ε, donde Y es el vector de respuestas, X es la matriz de variables independientes, β es el vector de coeficientes y ε es el vector de errores.",
 "R_Falsas": [ "Y = βX + ε, donde β es la matriz de respuestas.", "Y = X + β + ε, donde ε es el vector de variables independientes.", "Y = Xβ, sin errores ni coeficientes." ]
 },
 {
 "Enunciado": "Si se tiene la matriz de variables independientes X con dimensiones (n x p) y el vector de coeficientes β con dimensiones (p x 1), ¿cuál es la dimensión del vector de respuestas Y?", 
"R_Correcta": "(n x 1).",
 "R_Falsas": [ "(p x 1).", "(1 x n).", "(n x p)." ]
 },
 { 
"Enunciado": "En un modelo de regresión lineal múltiple, ¿cómo se calcula el vector de coeficientes β usando la aproximación matricial?",
 "R_Correcta": "β = (X’X)⁻¹X’Y, donde X’ es la transpuesta de X.", 
"R_Falsas": [ "β = (XY’)⁻¹X’Y.", "β = XY’Y.", "β = (X’Y)⁻¹X." ] 
}, 
{
 "Enunciado": "Si la matriz X tiene 5 observaciones y 3 variables independientes, ¿cuál es la forma de la matriz X?",
 "R_Correcta": "(5 x 3).", 
"R_Falsas": [ "(3 x 5).", "(5 x 5).", "(3 x 3)." ] 
}, 
{
 "Enunciado": "Si se tiene el vector de respuestas Y = [10, 15, 20, 25, 30] y la matriz de variables independientes X = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]], ¿cuál es el primer paso para calcular los coeficientes β?",
 "R_Correcta": "Calcular la transpuesta de X, X’.",
 "R_Falsas": [ "Calcular la inversa de Y.", "Multiplicar Y por X.", "Sumar todos los elementos de X." ]
 }
 ]');
INSERT INTO Leccion VALUES(2321,"2.3.2E Ejercicios de conceptualización de población y valores de expectación", 1, 1,
'[ 
{
 "Enunciado": "En el contexto de regresión lineal múltiple, ¿qué representa la población?", 
"R_Correcta": "La población se refiere al conjunto completo de individuos o elementos que se desea estudiar y sobre los cuales se desea hacer inferencias.",
 "R_Falsas": [ "La población es siempre un grupo pequeño de datos.", "La población es el conjunto de resultados de un experimento específico.", "La población se refiere solo a los datos de una muestra." ]
 },
 { 
"Enunciado": "En un modelo de regresión lineal múltiple, si se define la variable dependiente como el ingreso (Y) y las variables independientes como la educación (X₁) y la experiencia laboral (X₂), ¿qué se espera que indique el valor del pendiente asociado a X₁?",
 "R_Correcta": "Indica el cambio esperado en el ingreso por cada unidad adicional de educación, manteniendo la experiencia laboral constante.", 
"R_Falsas": [ "Indica el ingreso promedio en la población.", "Indica el cambio en la experiencia laboral por cada unidad de educación.", "No tiene relación con el ingreso." ] 
},
 { 
"Enunciado": "¿Cómo se interpreta el valor de expectativa en un modelo de regresión lineal múltiple?",
 "R_Correcta": "Es el valor promedio de la variable dependiente, dado un conjunto específico de valores de las variables independientes.",
 "R_Falsas": [ "Es el valor máximo de la variable dependiente.", "Es la suma de todas las variables independientes.", "Es un valor fijo que no cambia con las variables independientes." ] 
},
 {
 "Enunciado": "Si en un estudio se determina que la regresión lineal múltiple tiene un valor de expectativa de Y = 30 cuando X₁ = 2 y X₂ = 5, ¿qué implica esto?", 
"R_Correcta": "Implica que, con esas condiciones específicas de X₁ y X₂, se espera que el ingreso promedio (Y) sea 30.",
 "R_Falsas": [ "Implica que el ingreso es siempre 30, independientemente de X₁ y X₂.", "Indica que X₁ y X₂ no influyen en Y.", "Significa que 30 es el valor máximo posible de Y." ]
 },
 {
 "Enunciado": "En un modelo de regresión lineal múltiple, si se aumenta el número de variables independientes, ¿qué se espera sobre la precisión de la estimación de la variable dependiente?", 
"R_Correcta": "En general, se espera que la precisión de la estimación aumente, siempre que las nuevas variables sean relevantes.", 
"R_Falsas": [ "La precisión disminuirá automáticamente.", "No hay relación entre el número de variables y la precisión.", "Aumentar las variables siempre lleva a un modelo más simple." ] 
}
 ]'
);
INSERT INTO Leccion VALUES(2331,"2.3.3E Ejercicios de Evaluación y Diagnósticos", 1, 1,
'[
 {
 "Enunciado": "¿Cuál es el objetivo principal de la evaluación de un modelo de regresión lineal múltiple?", 
"R_Correcta": "Determinar la validez y precisión del modelo para hacer predicciones sobre la variable dependiente.", 
"R_Falsas": [ "Obtener un modelo que siempre ajuste perfectamente los datos.", "Eliminar todas las variables independientes.", "Calcular únicamente la media de la variable dependiente." ] 
},
 { 
"Enunciado": "¿Qué diagnóstico se realiza para comprobar si los errores del modelo de regresión son independientes?",
 "R_Correcta": "Se utiliza la prueba de Durbin-Watson.",
 "R_Falsas": [ "Se calcula el coeficiente de determinación (R²).", "Se realiza una prueba t para cada coeficiente.", "Se observa el diagrama de dispersión de los datos." ]
 }, 
{
 "Enunciado": "Si al evaluar un modelo de regresión se encuentra que R² = 0.85, ¿qué significa esto en términos de diagnóstico?", 
"R_Correcta": "Significa que el 85% de la variabilidad en la variable dependiente se puede explicar por las variables independientes del modelo.",
 "R_Falsas": [ "Significa que el modelo tiene un ajuste perfecto.", "Indica que el 15% de los datos son irrelevantes.", "Es un valor que no se puede utilizar para diagnóstico." ] 
},
 {
 "Enunciado": "¿Qué es la multicolinealidad en el contexto de regresión lineal múltiple y cómo puede diagnosticarse?", 
"R_Correcta": "La multicolinealidad ocurre cuando dos o más variables independientes están altamente correlacionadas, y se puede diagnosticar utilizando el Factor de Inflación de Varianza (VIF).", 
"R_Falsas": [ "Es la variabilidad en los errores del modelo y se diagnostica mediante la media.", "Es la relación entre la variable dependiente y la variable independiente y se evalúa con R².", "Es el ajuste perfecto del modelo, evaluado con la prueba de Durbin-Watson." ] 
}, 
{ 
"Enunciado": "¿Cuál es el propósito de realizar un análisis de residuos en un modelo de regresión lineal múltiple?",
 "R_Correcta": "Para evaluar la homocedasticidad, la normalidad y la independencia de los errores del modelo.", 
"R_Falsas": [ "Para ajustar el modelo a los datos más cercanos.", "Para calcular el valor máximo de la variable dependiente.", "Para eliminar variables independientes del modelo." ]
 }
 ]');
 INSERT INTO Leccion VALUES(2341,"2.3.4E Ejercicios de Selección de Variable", 1, 1,
 '[
 {
 "Enunciado": "¿Qué se entiende por selección de variables en el contexto de la regresión lineal múltiple?",
 "R_Correcta": "Es el proceso de identificar y elegir las variables independientes que mejor explican la variabilidad de la variable dependiente.",
 "R_Falsas": [ "Es simplemente agregar todas las variables disponibles al modelo.", "Es un proceso que se realiza solo al final del análisis.", "Es irrelevante en modelos de regresión." ]
 },
 { 
"Enunciado": "¿Cuál de los siguientes métodos es comúnmente utilizado para la selección de variables en regresión lineal múltiple?", 
"R_Correcta": "Método de eliminación hacia atrás (backward elimination).", 
"R_Falsas": [ "Método de ajuste cuadrático.", "Método de proyección aleatoria.", "Método de selección aleatoria." ]
 },
 {
 "Enunciado": "¿Qué criterio se utiliza en la selección de variables mediante el método de forward selection?", 
"R_Correcta": "Se agrega una variable independiente al modelo si mejora significativamente el ajuste, típicamente medido por el valor p.",
 "R_Falsas": [ "Se eliminan las variables sin importar su significancia.", "Se seleccionan variables al azar.", "Se utilizan solo variables con valores máximos." ] 
},
 { 
"Enunciado": "¿Qué problema puede surgir si se incluye demasiadas variables en un modelo de regresión lineal múltiple?",
 "R_Correcta": "Se puede aumentar el riesgo de sobreajuste (overfitting), donde el modelo se ajusta demasiado a los datos de entrenamiento y pierde capacidad de generalización.", 
"R_Falsas": [ "El modelo siempre mejorará en precisión.", "No afecta la interpretación de los coeficientes.", "El modelo se volverá más simple." ]
 },
 { 
"Enunciado": "¿Qué es el criterio de información de Akaike (AIC) y cómo se relaciona con la selección de variables?", 
"R_Correcta": "Es un criterio utilizado para comparar modelos; penaliza el número de parámetros para evitar el sobreajuste, favoreciendo modelos más simples con buen ajuste.",
 "R_Falsas": [ "Es un criterio que solo considera el ajuste del modelo sin penalización.", "Se utiliza exclusivamente en modelos de regresión lineal simple.", "Es irrelevante en la evaluación de la calidad del modelo." ] 
} 
]');
 INSERT INTO Leccion VALUES(3111,"3.1.1E Ejercicios de Ley de eventos raros y aproximación a la distribución binomial", 1, 1,
 '[
    {
        "Enunciado": "En una distribución binomial, ¿cuándo se considera que un evento es raro?",
        "R_Correcta": "Cuando N es grande y la probabilidad de ocurrencia es cercana a 0.",
        "R_Falsas": ["Cuando N es pequeño y la probabilidad es cercana a 1.", "Si la probabilidad de éxito es mayor que la de fracaso.", "Cuando los ensayos son menores de 10."]
    },
    {
        "Enunciado": "¿Cuándo se puede aproximar una distribución binomial a una distribución de Poisson?",
        "R_Correcta": "Cuando el número de ensayos es grande y Np es menor a 5.",
        "R_Falsas": ["Cuando el número de ensayos es pequeño y Np es mayor a 10.", "Solo cuando la probabilidad de éxito es exactamente 0.5.", "Cuando la probabilidad de fracaso es igual a la de éxito."]
    },
    {
        "Enunciado": "¿Qué representa λ (lambda) en la aproximación de Poisson para una distribución binomial con eventos raros?",
        "R_Correcta": "Representa el valor de Np.",
        "R_Falsas": ["Es el valor de q=1-p.", "Es el total de ensayos N.", "Representa el inverso de la probabilidad p."]
    },
    {
        "Enunciado": "Dada una distribución binomial con N=200 y p=0.01, ¿es posible usar la aproximación de Poisson?",
        "R_Correcta": "Sí, porque N es grande y Np < 5.",
        "R_Falsas": ["No, porque p no es exactamente 0.", "Sí, pero solo si Np es mayor a 10.", "No, porque N es menor a 1000."]
    },
    {
        "Enunciado": "¿Cuál de los siguientes es un requisito para aplicar la Ley de Eventos Raros en una distribución binomial?",
        "R_Correcta": "Que N sea de al menos 50 elementos y Np menor a cinco.",
        "R_Falsas": ["Que N sea menor a 30 ensayos.", "Que p sea mayor que q.", "Que la probabilidad de fracaso q=1-p sea cercana a 1."]
    }
]');
INSERT INTO Leccion VALUES(3201,"3.2E Ejercicios de Proceso de Poisson Homogeneo", 1, 1,
'[
    {
        "Enunciado": "¿Qué caracteriza a un proceso de Poisson homogéneo?",
        "R_Correcta": "Los eventos ocurren de manera independiente y con una tasa constante de ocurrencia.",
        "R_Falsas": ["Los eventos dependen de ocurrencias previas.", "La tasa de ocurrencia varía con el tiempo.", "La probabilidad de ocurrencia en cada intervalo de tiempo es siempre 1."]
    },
    {
        "Enunciado": "Si λ representa la tasa de ocurrencias por unidad de tiempo, ¿qué representa λΔt en un proceso de Poisson homogéneo?",
        "R_Correcta": "La probabilidad de una ocurrencia en un pequeño intervalo de tiempo.",
        "R_Falsas": ["El número total de ocurrencias en un gran intervalo de tiempo.", "La probabilidad de ninguna ocurrencia en un gran intervalo de tiempo.", "La tasa de cambio de la tasa λ."]
    },
    {
        "Enunciado": "En un proceso de Poisson homogéneo, ¿cuál es la probabilidad de que no haya ocurrencias en un pequeño intervalo de tiempo Δt?",
        "R_Correcta": "1 - λΔt",
        "R_Falsas": ["λΔt", "λ^2", "La probabilidad depende de las ocurrencias anteriores."]
    },
    {
        "Enunciado": "Si la tasa de ocurrencia de un evento es λ=3 ocurrencias por hora, ¿cuál es la probabilidad aproximada de que ocurra una ocurrencia en un intervalo de 10 minutos?",
        "R_Correcta": "0.5",
        "R_Falsas": ["3", "0.05", "0.9"]
    },
    {
        "Enunciado": "¿Qué representa P(k, t) en un proceso de Poisson homogéneo?",
        "R_Correcta": "La probabilidad de k ocurrencias en un intervalo de tiempo t.",
        "R_Falsas": ["La tasa de ocurrencia en un pequeño intervalo de tiempo.", "La probabilidad de ninguna ocurrencia en t.", "El número total de ocurrencias en el intervalo."]
    }
]');
INSERT INTO Leccion VALUES(3211,"3.2.1E Ejercicios de Distribución del tiempo de primer evento", 1, 1,
'[
    {
        "Enunciado": "En la deducción de la distribución del tiempo para el primer evento en un proceso de Poisson, ¿qué expresa la probabilidad ( P(k, t + Delta t) )?",
        "R_Correcta": "La probabilidad de que haya k ocurrencias en el tiempo t más un pequeño intervalo de tiempo ( Delta t ).",
        "R_Falsas": ["La tasa de ocurrencia de eventos en el intervalo ( Delta t ).", "La probabilidad de que no haya ocurrencias en ( Delta t ).", "La probabilidad de que haya exactamente k ocurrencias en un instante de tiempo t."]
    },
    {
        "Enunciado": "¿Qué describe el término ( P(k, t)(1 - lambda Delta t) ) en la fórmula de la evolución de ( P(k, t + Delta t) )?",
        "R_Correcta": "La probabilidad de que no ocurra un evento en ( Delta t ).",
        "R_Falsas": ["La probabilidad de que ocurra un evento en ( Delta t ).", "La tasa de ocurrencia de eventos por unidad de tiempo.", "La probabilidad de que k eventos hayan ocurrido antes del tiempo t."]
    },
    {
        "Enunciado": "¿Qué representa la derivada ( frac{dP(k, t)}{dt} ) en la ecuación diferencial del proceso de Poisson?",
        "R_Correcta": "La tasa de cambio de la probabilidad con respecto al tiempo.",
        "R_Falsas": ["El número de eventos ocurridos hasta el tiempo t.", "La tasa de ocurrencias ( lambda ).", "El número total de eventos en el intervalo de tiempo."]
    },
    {
        "Enunciado": "Al reorganizar la ecuación ( P(k, t + Delta t) - P(k, t) = -P(k, t) lambda Delta t + P(k - 1, t) lambda Delta t ), ¿qué se obtiene?",
        "R_Correcta": "La ecuación diferencial que describe el cambio en la probabilidad de ocurrencia de k eventos con el tiempo.",
        "R_Falsas": ["La fórmula para la tasa de ocurrencias ( lambda ).", "La probabilidad de que no ocurran eventos en un intervalo de tiempo.", "La función de densidad de la distribución exponencial."]
    },
    {
        "Enunciado": "¿Cómo se interpreta la solución de la ecuación diferencial de Poisson para el tiempo del primer evento?",
        "R_Correcta": "La distribución exponencial describe el tiempo entre el primer evento en un proceso de Poisson.",
        "R_Falsas": ["El tiempo entre cada evento en un proceso de Poisson es constante.", "La tasa de ocurrencia de eventos disminuye con el tiempo.", "El número de eventos crece exponencialmente con el tiempo."]
    }
]');
INSERT INTO Leccion VALUES(3221,"3.2.2E Ejercicios de Distribución del tiempo inter-eventos", 1, 1,
'[
    {
        "Enunciado": "En la distribución del tiempo inter-eventos, ¿qué representa ( p_k(tau) = frac{(lambda tau)^{k-1} exp(-lambda tau)}{(k-1)!} )?",
        "R_Correcta": "Es la función de densidad de una distribución Erlang de orden k.",
        "R_Falsas": ["Es la función de distribución acumulativa.", "Representa la tasa de ocurrencias por unidad de tiempo.", "Es la función de densidad de una distribución de Poisson."]
    },
    {
        "Enunciado": "¿Qué ocurre cuando se establece ( k = 1 ) en la distribución de Erlang?",
        "R_Correcta": "La función de densidad se convierte en una distribución exponencial.",
        "R_Falsas": ["La función se convierte en una distribución de Poisson.", "La tasa de ocurrencias disminuye exponencialmente.", "La probabilidad de ocurrencia se vuelve constante."]
    },
    {
        "Enunciado": "¿Cuál es la función de distribución acumulativa ( F(k, tau) ) para una distribución Erlang?",
        "R_Correcta": "Es ( F(k, tau) = 1 - exp(-lambda tau) sum_{k=0}^{k-1} frac{(lambda tau)^k}{k!} ).",
        "R_Falsas": ["Es ( F(k, tau) = frac{(lambda tau)^{k-1} exp(-lambda tau)}{(k-1)!} ).", "Es ( F(k, tau) = exp(-lambda tau) ).", "Es ( F(k, tau) = frac{lambda^k exp(-tau)}{k!} )."]
    },
    {
        "Enunciado": "¿Qué describe la distribución de Erlang de orden k en el contexto de tiempos inter-eventos?",
        "R_Correcta": "Describe el tiempo total hasta la ocurrencia del k-ésimo evento.",
        "R_Falsas": ["Describe el tiempo entre el primer y el segundo evento únicamente.", "Es la probabilidad de que ocurran exactamente k eventos en un tiempo dado.", "Describe el tiempo entre eventos consecutivos en un proceso de Poisson."]
    },
    {
        "Enunciado": "Si la tasa de ocurrencia es ( lambda = 2 ) eventos por segundo, ¿cuál es la función de densidad del tiempo entre el primer evento (k=1) en un intervalo de tiempo ( tau )?",
        "R_Correcta": "Es ( p_1(tau) = 2 exp(-2 tau) ).",
        "R_Falsas": ["Es ( p_1(tau) = frac{2 tau exp(-2 tau)}{1!} ).", "Es ( p_1(tau) = exp(-2 tau) ).", "Es ( p_1(tau) = frac{2^2 exp(-tau)}{2!} )."]
    }
]');
INSERT INTO Leccion VALUES(3231,"3.2.3E Ejercicios de Distribución uniforme y el proceso de Poisson", 1, 1,
'[
    {
        "Enunciado": "¿Cuál es la función de densidad para una variable aleatoria con distribución uniforme entre ( theta_1 ) y ( theta_2 )?",
        "R_Correcta": "Es ( f(y) = frac{1}{theta_2 - theta_1} ) para ( theta_1 leq y leq theta_2 ).",
        "R_Falsas": ["Es ( f(y) = theta_1 - theta_2 ).", "Es ( f(y) = frac{y}{theta_1 - theta_2} ).", "Es ( f(y) = frac{1}{theta_2 + theta_1} )."]
    },
    {
        "Enunciado": "¿Cuál es la característica principal de una distribución uniforme?",
        "R_Correcta": "Todos los valores en el intervalo tienen la misma probabilidad de ocurrencia.",
        "R_Falsas": ["La probabilidad de los valores en los extremos del intervalo es mayor.", "La probabilidad disminuye conforme nos alejamos del valor medio.", "La función de densidad varía linealmente a lo largo del intervalo."]
    },
    {
        "Enunciado": "Si ( theta_1 = 0 ) y ( theta_2 = 10 ), ¿cuál es el valor de la función de densidad ( f(y) )?",
        "R_Correcta": "Es ( f(y) = 0.1 ) para ( 0 leq y leq 10 ).",
        "R_Falsas": ["Es ( f(y) = 0.01 ) para ( 0 leq y leq 10 ).", "Es ( f(y) = 10 ) para ( 0 leq y leq 10 ).", "Es ( f(y) = 1 ) para ( 0 leq y leq 10 )."]
    },
    {
        "Enunciado": "¿Qué sucede con la función de densidad fuera del intervalo ( theta_1 leq y leq theta_2 )?",
        "R_Correcta": "La función de densidad es cero fuera del intervalo.",
        "R_Falsas": ["La función de densidad sigue siendo constante.", "La función de densidad toma valores negativos.", "La función de densidad se vuelve indefinida."]
    },
    {
        "Enunciado": "¿Cuál es la probabilidad de que una variable aleatoria uniforme tome un valor específico dentro del intervalo ( theta_1 leq y leq theta_2 )?",
        "R_Correcta": "Es cero, ya que la probabilidad puntual en una distribución continua es cero.",
        "R_Falsas": ["Es ( frac{1}{theta_2 - theta_1} ).", "Es ( frac{1}{2} ).", "Es ( frac{1}{theta_2 + theta_1} )."]
    }
]');
INSERT INTO Leccion VALUES(3241,"3.2.4E Métodos para simular el proceso de Poisson", 1, 1,
'[
    {
        "Enunciado": "¿Qué técnica se utiliza comúnmente para generar múltiples series de tiempo simuladas en el contexto de procesos aleatorios como el proceso de Poisson?",
        "R_Correcta": "Simulación Monte Carlo.",
        "R_Falsas": ["Interpolación Polinomial.", "Método de Euler-Maruyama.", "Método de Runge-Kutta."]
    },
    {
        "Enunciado": "¿Cuál es una aplicación típica de la simulación Monte Carlo en el proceso de Poisson?",
        "R_Correcta": "Explorar posibles secuencias de cascada debido a escenarios de cambio climático.",
        "R_Falsas": ["Determinar la trayectoria exacta de eventos futuros.", "Minimizar el ruido de señales periódicas.", "Resolver ecuaciones diferenciales complejas."]
    },
    {
        "Enunciado": "En el contexto de simulación del proceso de Poisson, ¿qué se logra al generar múltiples realizaciones de series de tiempo?",
        "R_Correcta": "Se exploran diferentes posibles secuencias de eventos bajo condiciones aleatorias.",
        "R_Falsas": ["Se predice exactamente cuándo ocurrirá cada evento.", "Se asegura que todos los eventos ocurran de manera periódica.", "Se eliminan las probabilidades de eventos raros."]
    },
    {
        "Enunciado": "¿Qué tipo de fenómenos pueden simularse con series de tiempo generadas mediante Monte Carlo en un proceso de Poisson?",
        "R_Correcta": "Simulación de cultivos y ecosistemas.",
        "R_Falsas": ["Optimización de carteras de inversión.", "Simulación de circuitos electrónicos.", "Simulación de tráfico de red."]
    },
    {
        "Enunciado": "¿Cómo se caracterizan los eventos en una simulación del proceso de Poisson usando Monte Carlo?",
        "R_Correcta": "Son eventos aleatorios e independientes en el tiempo.",
        "R_Falsas": ["Son eventos periódicos con intervalos constantes.", "Los eventos dependen de los anteriores.", "Los eventos ocurren con una tasa variable no constante."]
    }
]');
INSERT INTO Leccion VALUES(3251,"3.2.5E Métodos de Poisson Especial", 1, 1,
'[
    {
        "Enunciado": "Un dominio tiene un área total (A = 100) unidades cuadradas y se divide en (T = 10) celdas. Si se observan (m = 50) puntos en total, ¿cuál es la densidad promedio ( lambda ) de puntos por celda?",
        "R_Correcta": "5",
        "R_Falsas": ["10", "0.5", "50"]
    },
    {
        "Enunciado": "Utilizando la densidad promedio ( lambda = 4 ), ¿cuál es la probabilidad de que una celda contenga exactamente 3 puntos, según la distribución de Poisson?",
        "R_Correcta": "0.195",
        "R_Falsas": ["0.165", "0.25", "0.10"]
    },
    {
        "Enunciado": "Si se observa que (r = 2) celdas contienen exactamente 3 puntos, ¿cuál es el valor esperado de celdas con 3 puntos ( e_r ) en ( T = 20 ) celdas con tasa (P(r = 3) = 0.15)?",
        "R_Correcta": "3",
        "R_Falsas": ["2", "5", "0.15"]
    },
    {
        "Enunciado": "En una muestra de ( T = 15 ) celdas, ¿cuál es la varianza de la muestra si el promedio (m/T = 2.5) y la suma de los cuadrados de los errores es 1.5?",
        "R_Correcta": "0.107",
        "R_Falsas": ["0.15", "0.5", "1.0"]
    },
    {
        "Enunciado": "Si ( lambda ) es la densidad promedio de puntos por celda y el área de una celda es (A/T = 10), ¿cuál es la tasa de Poisson para una celda?",
        "R_Correcta": "Multiplicando ( lambda ) por el área de la celda",
        "R_Falsas": ["Dividiendo ( lambda ) entre el número de celdas", "Sumando el número de puntos observados", "Restando el número de celdas de (T)"]
    }
]');