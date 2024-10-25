USE mydb;
INSERT INTO Leccion VALUES(1201,"1.2E Ejercicios de aritmética en campos primos", 2, 1,
'[
    {
        "Enunciado": "Realiza las siguientes multiplicaciones en el campo Z/5Z (campo de cinco elementos, con {0,1,2,3,4}: 4×4=?”
        "R_Correcta": ”1”,
        "R_Falsas": [”16”,”3”,”0”]
    },
    {
        "Enunciado": "¿Qué conjunto representa un campo primo?",
        "R_Correcta": “{0,1,2,3,4,5} con operaciones módulo 6”,
        "R_Falsas": [
					  ”{0,1,2} con operaciones módulo 3”,
					  ”{0,1,2,3} con operaciones módulo 4”,
					  “{0,1,2,3,4} con operaciones módulo 10”
      ]
    },
    {
        "Enunciado": "¿Cuál es el número de elementos de un campo primo?”,
        "R_Correcta": “11”,
        "R_Falsas": [“8”, “9”,“12” ]
    },
{
        "Enunciado": "Encuentra el inverso multiplicativos de 6 el campo Z/7Z. {El inverso multiplicativo de un número X es el número Y tal que x*y≡1mod(7)”,
        "R_Correcta": “6”,
        "R_Falsas": [“1”,“ 5”,“2”]
    },
{
        "Enunciado": "¿Cuál de los siguientes módulos define un campo primo?"
        "R_Correcta": “Módulo 7”,
        "R_Falsas": "Módulo 15”,“Módulo 10”,“ Módulo 12”]
    },
]');
INSERT INTO Leccion VALUES(1301,"1.3E Ejercicios de Cifradores clásicos", 2, 1,
'[
    {
        "Enunciado": "Si utilizas un desplazamiento de 5 en el cifrado de César, ¿cómo se cifraría la palabra GATO?",
        "R_Correcta": “LDYT”,
        "R_Falsas": [“FCZN”,” HALU”,” ZARF”]
    },
{
        "Enunciado": "Si la clave en el cifrado de Vigenère es SOL y el texto plano es LUNA, ¿cuál es el texto cifrado?",
        "R_Correcta": “DCLB”,
        "R_Falsas": [“SRTI”,” MRVI”,” ZUNA”]
    },
{
        "Enunciado": "Cual cifrado se basa en sustituir las letras del mensaje por otras según un numero dado para toda la palabra",
        "R_Correcta": “Cesar (Desplazamiento)”,
        "R_Falsas": [“Vigenere”,”Bruto”,”Tabasco”]
    },
{
        "Enunciado": "Si la clave en el cifrado de Vigenère es "CLAVE" y el texto plano es "LLAVE", ¿cuál es el texto cifrado?",
        "R_Correcta": “NOGZJ”,
        "R_Falsas": [“ZNFWI”,” PVWIU”,” RJCWA”]
    },
{
        "Enunciado": "Usando un desplazamiento de 10 en el cifrado de César, ¿cómo se cifraría la palabra "CIFRA"?",
        "R_Correcta": “MSPVK”,
        "R_Falsas": [“IKFJQ”,” QXTRA”,” OLDRX”]
    }
]');
INSERT INTO Leccion VALUES(1301,"1.4E Ejercicios de Aritmetica en campos binarios", 2, 1,
'[
    {
        "Enunciado": "¿Cuántos simbolos se utilizan en los campos binarios",
        "R_Correcta": “2”,
        "R_Falsas": [“1”,”3”,”4”]
    },
{
        "Enunciado": "¿Cuál es el resultado de la suma binaria 1101+1011 en el campo GF(2)?",
        "R_Correcta": “0110”,
        "R_Falsas": [“11000”,” 11110”,” 1010”]
    },
{
        "Enunciado": "¿Cuál es el resultado de la multiplicación binaria 110×101 en el campo GF(2)?",
        "R_Correcta": “100”,
        "R_Falsas": [“111”,”000”,”110”,]
    },
{
        "Enunciado": "Si se realiza la operación 1011+1100 en el campo GF(2), ¿cuál es el resultado?",
        "R_Correcta": “0111”,
        "R_Falsas": [“1111”,” 0101”,” 1001”]
    },
{
        "Enunciado": "¿Cuál es el resultado de la multiplicación 111×011 en el campo GF(2)?",
        "R_Correcta": “011”,
        "R_Falsas": [“111”,”010”,”100”,]
    }
]');
INSERT INTO Leccion VALUES(2201,"2.2E Ejercicios de Cifradores de bloque", 2, 1,
'[
    {
        "Enunciado": "¿Cuál es una de las características principales de los cifradores de bloque?",
        "R_Correcta": “Dividen el texto en bloques de longitud fija y cifran cada bloque.”,
        "R_Falsas": [“Utilizan claves de longitud variable.”,” Cifran el texto letra por letra.”,” Usan cifrado de sustitución para cada carácter del mensaje.”]
    },
{
        "Enunciado": "¿Cuál de los siguientes es un modo de operación comúnmente utilizado con cifradores de bloque?",
        "R_Correcta": “Encadenamiento de bloques de cifrado (CBC)”,
        "R_Falsas": [“Clave deslizante (Sliding Key)”,” Permutación de bloques (Block Permutation)”,” Cifrado directo de caracteres (Direct Character Cipher)”]
    },
{
        "Enunciado": "Si un cifrador de bloque tiene un tamaño de bloque de 128 bits, ¿cuántos bytes puede cifrar en cada bloque?",
        "R_Correcta": “16 bytes”,
        "R_Falsas": [“16 bits”,” 128 bytes”,” 64 bytes”]
    },
{
        "Enunciado": "¿Cuál de los siguientes no es un ejemplo de un cifrador de bloque?",
        "R_Correcta": “RC4”,
        "R_Falsas": [“DES”,” AES”,” Blowfish”]
    },
{
        "Enunciado": "En el modo de operación CBC (Cipher Block Chaining), ¿qué se usa para encadenar los bloques de texto plano?",
        "R_Correcta": “El bloque de texto cifrado anterior”,
        "R_Falsas": [“La clave de cifrado”,” Un contador”,” El bloque de texto plano siguiente”]
    }
]');



