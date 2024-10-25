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
INSERT INTO Leccion VALUES(2301,"2.3E Ejercicios de Cifradores de flujo", 2, 1,
'[
    {
        "Enunciado": " ¿Qué caracteriza a un cifrador de flujo?",
        "R_Correcta": “Cifra el texto bit a bit o byte a byte utilizando un flujo de claves”,
        "R_Falsas": [“Cifra el texto en bloques de tamaño fijo”,” Cifra todo el texto al mismo tiempo”,” Utiliza la misma clave para todos los bloques del mensaje”]
    },
{
        "Enunciado": "¿Cuál de los siguientes es un ejemplo de un cifrador de flujo?",
        "R_Correcta": “RC4”,
        "R_Falsas": [“AES”,” DES”,” Blowfish”]
    },
{
        "Enunciado": "En un cifrador de flujo, el flujo de claves (key stream) se combina con el texto plano mediante:",
        "R_Correcta": “Operación XOR”,
        "R_Falsas": [“Multiplicación modular”,” Cifrado de bloques”,” Permutación de bits”]
    },
{
        "Enunciado": "¿Qué vulnerabilidad es común en muchos cifradores de flujo cuando se reutiliza la misma clave?",
        "R_Correcta": “Ataques de texto plano conocido”,
        "R_Falsas": [“Ataque por fuerza bruta”,” Ataques de diccionario”,” Ataques por criptoanálisis diferencial”]
    },
{
        "Enunciado": "¿Qué característica define la forma en que los cifradores de flujo generan el flujo de claves?",
        "R_Correcta": “Generan un flujo de bits pseudoaleatorio basado en una clave inicial”,
        "R_Falsas": [“Utilizan bloques fijos de tamaño 128 bits.”,” Dividen el mensaje en bloques de texto plano para cifrar”,” Realizan operaciones de permutación en todo el texto antes de generar el flujo de claves”]
    }
]');
INSERT INTO Leccion VALUES(3101,"3.1E Ejercicios de Funciones Hash Criptográficas", 2, 1,
'[
    {
        "Enunciado": "¿Cuál de las siguientes es una característica principal de una función hash criptográfica?",
        "R_Correcta": “Produce una salida de longitud fija independientemente del tamaño del mensaje.”,
        "R_Falsas": [“Usa una clave secreta para generar el hash”,” Es reversible, permitiendo recuperar el mensaje original”,” Solo puede aceptar entradas de tamaño fijo”]
    },
{
        "Enunciado": "¿Cuál de las siguientes funciones es un ejemplo de una función hash criptográfica?",
        "R_Correcta": “SHA-256”,
        "R_Falsas": [“DES”,” RC4”,” AES”]
    },
{
        "Enunciado": "¿Qué significa que una función hash criptográfica sea resistente a colisiones?",
        "R_Correcta": “Es difícil encontrar dos entradas diferentes que generen el mismo hash.”,
        "R_Falsas": [“Es difícil encontrar la entrada original a partir de su hash.”,” El hash siempre será único para cada entrada.”,” El tamaño del hash cambia según el tamaño de la entrada.”]
    },
{
        "Enunciado": "¿Qué longitud tiene el resultado de la función hash SHA-256?",
        "R_Correcta": “256 bits”,
        "R_Falsas": [“128 bits”,” 512 bits”,” 64 bits”]
    },
{
        "Enunciado": "Si tenemos una función con n salidas y entradas mucho mas grandes que n -bits. Sabemos que realizando un ataque de cumpleaños tenemos una probabilidad de ½ de encontrar una colisión en 2^(n/2) pasos. ¿Cuál es el numero esperado de repeticiones para encontrar una colisión?",
        "R_Correcta": “2”,
        "R_Falsas": [“1”,”3”,”4”]
    }
]');
INSERT INTO Leccion VALUES(3201,"3.2E Ejercicios de Codigos de autenticacion de mensaje (MAC)", 2, 1,
'[
    {
        "Enunciado": "¿Cuál es la función principal de un código de autenticación de mensajes (MAC)?",
        "R_Correcta": “Proporcionar integridad y autenticación de un mensaje utilizando una clave secreta”,
        "R_Falsas": [“Cifrar un mensaje para garantizar la confidencialidad”,” Firmar un mensaje digitalmente para garantizar su autenticidad”,” Convertir el mensaje a un formato hash legible”]
    },
{
        "Enunciado": "¿Qué tipo de clave se utiliza en un MAC?",
        "R_Correcta": “Clave simétrica”,
        "R_Falsas": [“Clave pública”,” Clave privada”,”Ninguna clave, solo un hash”]
    },
{
        "Enunciado": "¿Cuál es una diferencia clave entre un hash criptográfico y un código de autenticación de mensajes (MAC)?",
        "R_Correcta": “Un MAC utiliza una clave secreta para la autenticación, mientras que un hash no.”,
        "R_Falsas": [“Los MAC son públicos mientras que los hashes son secretos”,” Un MAC garantiza la confidencialidad del mensaje, mientras que un hash no lo hace”,” Un hash es reversible y un MAC no lo es”]
    },
{
        "Enunciado": "¿Qué garantiza un MAC cuando es verificado correctamente por el receptor?",
        "R_Correcta": “Autenticidad e integridad del mensaje”,
        "R_Falsas": [“Confidencialidad del mensaje”,” Resistencia a colisiones”,” No repudio del mensaje”]
    },
{
        "Enunciado": "¿Qué sucede si un mensaje es modificado en tránsito y luego se verifica su MAC?”
        "R_Correcta": “El MAC generado no coincidirá con el MAC enviado, indicando la alteración del mensaje.”,
        "R_Falsas": [“El MAC sigue siendo válido porque la clave es la misma”,” El receptor puede recuperar el mensaje original a partir del MAC”,” El mensaje será rechazado, pero no se podrá detectar la modificación”]
    }
]');
INSERT INTO Leccion VALUES(4201,"4.2E Ejercicios de Algoritmo de intercambio de claves Diffie-Hellman", 2, 1,
'[
    {
        "Enunciado": " En el intercambio de claves Diffie-Hellman, si Alice elige un valor secreto 𝑎 y Bob elige un valor secreto 𝑏, ¿cómo se calcula la clave compartida? ",
        "R_Correcta": “g^(ab)mod(p)”,
        "R_Falsas": [“(g^a)^b”,” pb^(ab)”,” g^(a+b)mod(p)”]
    },
{
        "Enunciado": " Supongamos que Alice y Bob han acordado usar el número primo 𝑝=23 y la base 𝑔=5. Alice elige un valor secreto 𝑎=6. ¿Cuál es el valor que Alice envía a Bob? ",
        "R_Correcta": “8”,
        "R_Falsas": [“15”,”16”,”19”]
    },
{
        "Enunciado": " ¿Cuál de los siguientes es un parámetro público en el protocolo Diffie-Hellman? ",
        "R_Correcta": “Un número primo grande 𝑝 y una base 𝑔”,
        "R_Falsas": [“El hash del mensaje.”,” El texto plano del mensaje.”,” La clave secreta de cada usuario.”]
    },
{
        "Enunciado": " ¿Cuál de las siguientes afirmaciones es verdadera sobre el intercambio de claves Diffie-Hellman? ",
        "R_Correcta": “Es vulnerable a ataques de intermediario (MITM) si no se autentican las partes.”,
        "R_Falsas": [“Permite que dos partes compartan una clave sin autenticación previa”,” Cifra directamente el mensaje que se quiere enviar”,” Garantiza la confidencialidad del mensaje”]
    },
{
        "Enunciado": " Dado 𝑝=31y 𝑔=11, Alice elige 𝑎=7 y envía su valor (g^(a))mod(p) a Bob. ¿Qué valor recibe Bob?”
        "R_Correcta": “23”,
        "R_Falsas": [“15”,” 24”,”22”]
    }
]');
INSERT INTO Leccion VALUES(4201,"4.4E Soluciones a problemas de autenticación y no repudio", 2, 1,
'[
    {
        "Enunciado": "¿Cuál es el propósito principal de una firma digital en la criptografía de clave pública?",
        "R_Correcta": "Garantizar la autenticidad e integridad del mensaje y prevenir el no repudio.",
        "R_Falsas": ["Cifrar el mensaje para proteger su confidencialidad.", "Generar claves simétricas para cifrado de datos.", "Verificar la identidad de ambas partes de forma anónima."]
    },
    {
        "Enunciado": "¿Cuál de los siguientes algoritmos es comúnmente utilizado para crear una firma digital?",
        "R_Correcta": "RSA",
        "R_Falsas": ["AES", "MD5", "DES"]
    },
    {
        "Enunciado": "En el contexto de RSA, ¿qué clave utiliza el remitente para firmar digitalmente un mensaje?",
        "R_Correcta": "La clave privada del remitente",
        "R_Falsas": ["La clave pública del remitente", "La clave pública del destinatario", "La clave privada del destinatario"]
    },
    {
        "Enunciado": "¿Qué operación realiza el destinatario para verificar la firma digital de un mensaje en RSA?",
        "R_Correcta": "Descifra la firma con la clave pública del remitente y compara los hashes.",
        "R_Falsas": ["Cifra el mensaje con su propia clave privada.", "Aplica una función hash para descifrar el mensaje.", "Utiliza la clave privada del remitente para descifrar el hash."]
    },
    {
        "Enunciado": "¿Cuál de las siguientes afirmaciones describe correctamente cómo se verifica una firma digital en DSA?",
        "R_Correcta": "Se verifica la firma con la clave pública del remitente, utilizando exponenciación modular y operaciones de módulo.",
        "R_Falsas": ["Se cifra la firma digital usando la clave privada del destinatario.", "Se descifra el mensaje utilizando la clave pública del destinatario.", "Se usa una función hash y luego se cifra el resultado con la clave pública del destinatario."]
    }
]');
