const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt');
const { APPID } = require('./apifile.js');
const WolframAlphaAPI = require('@wolfram-alpha/wolfram-alpha-api');
const waApi = WolframAlphaAPI(APPID);
//const tf = require('@tensorflow/tfjs-node'); // Importa TensorFlow.js para Node.js
const path = require('path');
const {exec, spawn } = require('child_process');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 3000;

//////////// Lista de bibliotecas de Python que deseas instalar para correr el script d epython
/*const pythonPackages = ['tensorflow', 'numpy'];

exec(`pip install ${pythonPackages.join(' ')}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error al instalar las bibliotecas de Python: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Bibliotecas instaladas correctamente:\n${stdout}`);
});*/



/*async function loadModel() {
    // Construye la ruta completa con el prefijo `file://`
        const modelPath = `file://${path.resolve(__dirname, 'CNNB169', 'model.json')}`;
        // Crear un nuevo modelo con L2 aplicado en las capas deseadas
        const model = await tf.loadLayersModel(modelPath)
        //console.log("Estructura del modelo cargado:");
        //model.layers.forEach((layer, index) => {
        //console.log(`Capa ${index}: ${layer.name}, pesos esperados: ${layer.weights.length}`);
    //});

        const modelWithL2 = tf.sequential();
     // Copiar la arquitectura y agregar L2
     modelWithL2.add(tf.layers.dense({
        units: 20,
        activation: 'relu',
        inputShape: [6],
        kernelRegularizer: tf.regularizers.l2({ l2: 0.01 })
    }));
    modelWithL2.add(tf.layers.dropout({ rate: 0.2 }));

    modelWithL2.add(tf.layers.dense({
        units: 10,
        activation: 'relu',
        kernelRegularizer: tf.regularizers.l2({ l2: 0.01 })
    }));
    modelWithL2.add(tf.layers.dropout({ rate: 0.2 }));

    modelWithL2.add(tf.layers.dense({
        units: 3,
        activation: 'softmax'
    }));

      // Copiar solo pesos en capas que tienen parámetros
      for (let i = 0; i < modelWithL2.layers.length; i++) {
        const originalLayer = model.layers[i];
        const newLayer = modelWithL2.layers[i];

        // Solo copiar pesos si ambos tienen parámetros entrenables
        if (originalLayer.weights.length > 0 && newLayer.weights.length > 0) {
            newLayer.setWeights(originalLayer.getWeights());
            //console.log(`Pesos copiados en la capa ${newLayer.name}`);
        } else {
            //console.log(`No se copian pesos en la capa ${newLayer.name} porque no tiene parámetros.`);
        }
    }
    // Compilar el nuevo modelo con regularización L2
    modelWithL2.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    console.log("Modelo cargado y modificado con regularización L2.");
    return modelWithL2;
}
*/

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true,
}));

const db=mysql.createConnection({
    host:"localhost",
    user: "root",
    //password: "PaS$R4z32",
    password: "1234",
    database: "mydb",
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
//TODO Agregar la BD y modificar los campos
app.get('/',(req,res)=>{
    res.json({status: "INICIO"});
});

//LOGIN DE USUARIO 
/*regresa un json{
        "status":(Aqui te da el mensaje de lo que ocurrio)
        }
*/
app.post('/api/Login',(req,res)=>{
    const {user,pass} =req.body;
    
    if(user == "" || pass == ""){
        console.log("Vacios");
        return res.status(400).json({status:"Usuario o Contraseña vacios"})
    }    

    const query = "SELECT * FROM usuario WHERE NombreUsuario = ?";

    db.query(query,[user,pass],async (err,result) =>{

        console.log("recibido usuario:"+ user);
        console.log("recibido contrasena:"+ pass); 

        if(err) return res.send("Error al iniciar sesion")

        if(result.length >= 0){
            if(result[0] == undefined){
                console.log("No encontro datos asi que es undefined")
                return res.status(400).json({error:"Usuario o Contraseña no definidos"})

            }else{
                const user_res = result[0];
                console.log(result);
                const contraseñaAlmacenada =  user_res.pass;
                const match = await bcrypt.compare(pass,contraseñaAlmacenada);
                console.log(match);
                if(match){
                    console.log("Inicio de Sesión Exitoso")
                    return res.json({status:"Inicio de Sesión Exitoso"});
                }else{
                    console.log("Inicio de Sesión Fallido")
                    return res.json({status:"Inicio de Sesión Fallido"});
                }
        }
        }else{
            return res.json({status:"No se encontro coincidencia"})
        }
    })

});

//TODO PASSWORD RECOVERY
/*app.get('/api/Recovery',(req,res)=>{
    const query = "SELECT usuario FROM usuario WHERE correo = ?";
    db.query(query,[req.body.user,req.body.password],(err,result) =>{
        if(err) return res.send("Error al buscar usuario")
        if(result.length > 0){
            return res.json({status:"Usuario Existente"})
        }else{
            return res.json({status:"Usuario Inexistente"})
        }
    })
});
*/

//REGISTRO O CREAR USUARIO
/*regresa un json{
        "status":(Aqui te da el mensaje de lo que ocurrio)
        }
*/
app.post('/api/Register',async (req,res) =>{
    console.log("Entro registro")
    const { user , mail , pass , phone } = req.body

    const query = "INSERT INTO usuario(NombreUsuario,Correo,pass,Telefono,Tipo,Aprendizaje) values (?,?,?,?,?,?)";
    if( user == '' || mail == '' || pass == ''){
            console.log(" Registro Vacios");
            return res.status(400).json({status:"Usuario o Contraseña vacios"})
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    db.query(query,[user,mail,hashedPassword,phone,/*req.body.type*/1,/*req.body.learning*/1],(err,result) =>{

        console.log("user: "+user)
        console.log("mail: "+mail)
        console.log("pass: "+pass)
        console.log("hashedpass: "+hashedPassword)
        console.log("phone: "+ phone)

        if(err){
            console.log("Usuario no creado :"+err)
            return res.send({status:"Error Usuario no creado"})
        } 
        else{
            console.log("Usuario creado ") 
            console.log(result) 
            return res.send({status:"Usuario Creado"})
        } 
        
    })
});

//Ver usuarios
/*regresa un arreglo con objetos json donde cada objeto json tiene :{
        "idUsuario":"Su id",
        "NombreUsuario":"Su nombre de usuario",
        "Correo":"Su Correo",
        "pass":"su contraseña hasheada",
        "Telefono":"Su telefono",
        "Tipo":"El tipo de usuario",
        "Tutor":"El tutor que tiene",
        "Aprendizaje":"El valor de su Tipo de aprendizaje",
        
*/
app.get('/api/SeeUsers',(req,res) =>{
    console.log("Entro ver usuarios")
    const query = "SELECT * FROM usuario";
    db.query(query,(err,result) =>{
        if(err){
            console.log("Usuarios no enviados")
            return res.send({status:"Usuarios no recibidos"})
        } 
        else{
            console.log("Usuarios enviados:")
            console.log(result)
            return res.send(result)
        } 
        
    })
});

//ver un unico usuario esta la puedes usar tanto para el crud como para el perfil de usuario para mostrar la informacion del usuario
/*regresa un objeto json con:{
        "idUsuario":"Su id",
        "NombreUsuario":"Su nombre de usuario",
        "Correo":"Su Correo",
        "pass":"su contraseña hasheada",
        "Telefono":"Su telefono",
        "Tipo":"El tipo de usuario",
        "Tutor":"El tutor que tiene",
        "Aprendizaje":"El valor de su Tipo de aprendizaje",
        
*/
// TODO: cambiar los gets para que no pidan el body y pidan params
app.get('/api/SeeUser',(req,res) =>{
    console.log("Entro ver usuario")
    const query = "SELECT * FROM usuario WHERE Correo = ?";
    db.query(query,req.body.mail,(err,result) =>{
        if(err){
            console.log("Usuario no enviado")
            return res.send({status:"No enviado"})
        } 
        else{
            console.log("Usuario enviado:")
            console.log(result)
            return res.send(result)
        }
        
    })
});

//Eliminar un usuario
/*regresa un json{
        "status":(Aqui te da el mensaje de lo que ocurrio)
        }
*/
app.delete('/api/DeleteU',(req,res) =>{
    console.log("Entro borrar usuario")
    const query = "DELETE FROM usuario WHERE Correo = ?";
    db.query(query,req.body.mail,(err,result) =>{
        if(err){
            console.log("Error al eliminar el usuario")
            return res.send({status:"Error al consultar "})
        }
        else{ 
            console.log(result.affectedRows)
            if(result.affectedRows==0){
                console.log("El usuario no existo por lo tanto no se borro")
                res.send({status:" Usuario inexistente"})
            }
            else if (result.affectedRows==1){
                console.log("Usuario eliminado correctamente")
                res.send({status:" Usuario Eliminado Correctamente"})
            }else{
                console.log("Se afectaron : "+result.affectedRows+" elementos en bd, Algo anda mal")
                res.send({status:" Varios usuarios eliminados? jajaja"})
            }

        }
    })
});

//Actualizar Usuario
/*regresa un json{
        "status":(Aqui te da el mensaje de lo que ocurrio)
        }
*/
app.put('/api/UpdateU',async (req,res) =>{
    console.log("Entro en actualizar usuario")
    const query = "UPDATE usuario SET NombreUsuario = ?,Correo = ?,pass = ?,Telefono = ?,Tipo = ?,Tutor = ?,Aprendizaje = ? WHERE Correo = ?";
    const hashedPassword = await bcrypt.hash(req.body.newpass, 10);
    db.query(query,[req.body.newuser,req.body.newmail,hashedPassword,req.body.newphone,req.body.newtype,req.body.newtutor,req.body.newlearning,req.body.mail],(err,result) =>{
        console.log("newuser: "+req.body.newuser)
        console.log("mail: "+req.body.mail)
        console.log("newmail: "+req.body.newmail)
        console.log("newpass: "+req.body.newpass)
        console.log("newTutor: "+req.body.newtutor)
        console.log("newlearning: "+req.body.newlearning)
        console.log("newType: "+req.body.newtype)
        console.log("newhashedpass: "+hashedPassword)
        console.log("newphone: "+req.body.newphone)
        if(err){
            console.log(("Error al actualizar el usuario"))
            console.log(err)
            return res.send({status:"Error"})
        } 
        else{ 
            console.log(result.affectedRows)
            if(result.affectedRows==0){
                console.log("El usuario no existo por lo tanto no se modifico")
                res.send({status:" Usuario inexistente"})
            }
            else if (result.affectedRows==1){
                console.log("Usuario modificado correctamente")
                res.send({status:" Usuario modificado correctamente"})
            }else{
                console.log("Se afectaron : "+result.affectedRows+" elementos en bd, Algo anda mal")
                return res.send({status:"Se actualizaron varios usuarios? jajaja"})
            }
        
        }
    })
});

//TOUPDATE CRUD DE LECCIONES
/*app.post('/api/CreateL',(req,res) =>{
    const query = "INSERT INTO Leccion(Titulo,Materia,Tipo,Contenido) values (?,?,?,?)";
    db.query(query,[req.body.title,req.body.subject,req.body.type,req.body.content],(err,result) =>{
        if(err){
            return res.send("Error al crear Leccion")
        } 
        else return res.send("Leccion creada")
        
    })
});
*/

//TOUPDATE ver lecciones INtroduction to Cryphographic
/*
app.get('/api/SeeLC',(req,res) =>{
    const query = "SELECT * FROM materia INNER JOIN leccion ON Materia=idMAteria WHERE idMateria=?";
    db.query(query,req.body.materia,(err,result) =>{
        if(err){
            return res.send("Error al enviar Lecciones")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});
*/

//Ver temario de Materia
/*regresa un  arreglo con objetos json con el siguiente contenido{
        "idLeccion":id de la leccion,
        "Titulo":Titulo de la leccion
        }
    Requiere que le pases el id de la materia ejem:
    {
        "materia": 1
    }
*/
app.get('/api/SeeLC/:Materia',(req,res) =>{
    const {Materia} = req.params
    const query = "Select idLeccion,Titulo from leccion where Materia=?";
    db.query(query,Materia,(err,result) =>{
        console.log("materia: "+ Materia)
        if(err){
            return res.send("Error al enviar Lecciones")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});

//Ver Contenido de leccion de Materia
/*regresa un  arreglo con objetos json con el siguiente contenido{
        idLeccion: 1,
        Titulo: 'PRUEBA 1',
        Materia: 1,
        Tipo: 1,
        Contenido: { contenido: 'hola prueba' }
         }
    Requiere que le pases el id de la materia ejem:
    {
        "idLeccion": id de la leccion que vas a recuperar,
        "materia": id de la materia a la que pertenece la leccion,
        "Tipo": Tipo de  contenido 1 es ejercicio 0 es ejercicios,
    }
*/
app.get('/api/ContentLC',(req,res) =>{
    const query = "Select * from leccion where idLeccion= ? and Materia = ? and Tipo = ?";
    db.query(query,[req.body.idLeccion,req.body.materia,req.body.Tipo],(err,result) =>{
        console.log("idLeccion: "+req.body.idLeccion)
        console.log("Materia: "+req.body.materia)
        console.log("Tipo: "+req.body.Tipo)

        if(err){
            return res.send("Error al enviar Lecciones")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});

//Obtener cantidad de materias registradas
/*regresa un arreglo de objetos json con los siguientes contenidos{
        "idMateria":Aqui va el id de Materia,
        "Nombre de materia": Aqui va el nombre de la materia
        }
*/
app.get('/api/Cursos',(req,res) =>{
    const query = "Select * from materia";
    db.query(query,(err,result) =>{
        if(err){
            return res.send("Error no se pudo obtener el numero de materias")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});

//Recuperar progreso
app.get('/api/ProgPractica',(req,res) =>{
    const query = "select (select (select count(idLeccion) from Progreso where idMateria=? & idUsuario=? & Tipo=1) / (select count(idLeccion) from leccion where Materia=? & Tipo=1)) * 100";
    db.query(query,req.body.materia,req.body.usuario,req.body.materia,(err,result) =>{
        console.log("materia: "+req.body.materia)
        if(err){
            return res.send("Error al calcular progreso")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});
app.get('/api/ProgTeoria',(req,res) =>{
    const query = "select (select (select count(idLeccion) from Progreso where idMateria=? & idUsuario=? & Tipo=0) / (select count(idLeccion) from leccion where Materia=? & Tipo=0)) * 100";
    db.query(query,req.body.materia,req.body.usuario,req.body.materia,(err,result) =>{
        console.log("materia: "+req.body.materia)
        if(err){
            return res.send("Error al calcular progreso")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});
app.get('/api/ProgTotal',(req,res) =>{
    const query = "select (select (select count(idLeccion) from Progreso where idMateria=? & idUsuario=?) / (select count(idLeccion) from leccion where Materia=?)) * 100";
    db.query(query,req.body.materia,req.body.usuario,req.body.materia,(err,result) =>{
        console.log("materia: "+req.body.materia)
        if(err){
            return res.send("Error al calcular progreso")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});
//Emparejar
app.get('/api/Pair',(req,res) => {
    const query = "select NombreUsuario, Telefono from Usuario where Tutorado is not null and idUsuario IN (select idUsuario from Progreso where (rendimiento=1 OR rendimiento=2) AND Leccion_Tipo=1 AND (idLeccion,idMateria) IN (select idLeccion,idMateria from progreso where rendimiento=0 and idUsuario=?));";
    db.query(query,req.body.id,(err,result) =>{
        console.log("id: "+req.body.id)
        if(err){
            return res.send("Error al buscar tutor")
        } 
        else {
            console.log(result)
            return res.send(result)
        }
    })
});

// Normalización Min-Max
function minMaxNormalize(value, min, max) {
    return (value - min) / (max - min);
}

/*app.post('/api/Pred', async (req,res) =>{
    const model = await loadModel()
    const{input} = req.body;
    if(!model){
        return res.status(500).send('Modelo no cargado')
    }
    if (!Array.isArray(input)) {
        return res.status(400).send('input debe ser un array');
    }
    
     const data = input.map((value, index) => {
        if (index === 0) return minMaxNormalize(value, 0, 5); // Normalización de 0 a 1
        if (index === 2) return minMaxNormalize(value, 1, 3); // Asumiendo valores entre 0 y 100 para estos índices
        return value; // Sin normalizar para otros índices
    });
    
    try {
        // Convertir los datos de entrada a un tensor
        const inputTensor = tf.tensor2d([data], [1, data.length]);
        const prediction = model.predict(inputTensor, { training: true });
        const predictionArray = prediction.dataSync();
        console.log(predictionArray)
        // Enviar el resultado promedio de la predicción como respuesta
        // Obtener el índice del valor más alto
        const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));
        console.log('Clase predicha:', maxIndex);
        var prediccion;
        if(maxIndex===0){
            prediccion="Apoyo"
        }else if(maxIndex===1){
            prediccion="Avanzado"
        }else{
            prediccion="Normal"
        }
        res.json({ prediction: prediccion });
    } catch (error) {
        console.error('Error al hacer la predicción:', error);
        res.status(500).send('Error al hacer la predicción');
    }

})*/

/*Requiere de:{
    "inputData":[Puntaje,
                Respuesta a pregunta Facil(0 si se respondio mal,0.5 si se respondio la respuesta trampa y 1 si se respondio correctamente),
                estilodeAprendizaje(numero: 1 Visual,2 Auditivo, 3 Kinestesico),
                Respuesta a pregunta Dificil(0 si se respondio mal,0.5 si se respondio la respuesta trampa y 1 si se respondio correctamente),
                si se estudio recientemente(si se leeyo la parte teorica 1 sino 0),
                Pregunta dificil 2 (0 si se respondio mal,0.5 si se respondio la respuesta trampa y 1 si se respondio correctamente)]}
*/ 
app.post('/api/Predpy', async (req,res) =>{
    const { inputData } = req.body; 
    const pred = inputData.map((value, index) => {
        if (index === 0) return minMaxNormalize(value, 0, 5); // Normalización de 0 a 1
        if (index === 2) return minMaxNormalize(value, 1, 3); // Asumiendo valores entre 0 y 100 para estos índices
        return value; // Sin normalizar para otros índices
    });
    const pythonProcess = spawn('python', ['CNNB169/NN.py', JSON.stringify(pred)]);

    let result = '';

    // Recoge la salida del script de Python
    pythonProcess.stdout.on('data', (data) => {
        result += data.toString();
        result =JSON.parse(result)
        console.log(result)
    });
    // Cuando el proceso termina, envía el resultado al cliente
    pythonProcess.on('close', (code) => {
        if (code === 0) {
            if (!res.headersSent) {
                const prediction =result // Convertimos la salida a JSON
            
                // Acceder al array de predicciones
                const predictions = prediction.prediction[0]; // Asegurándonos de que esté en el formato correcto
    
                // Encontrar el valor más grande y su índice
                const maxPrediction = Math.max(...predictions);
                const maxIndex = predictions.indexOf(maxPrediction);
    
                console.log("Valor más alto:", maxPrediction);
                console.log("Índice del valor más alto:", maxIndex);
                let prediccion;
                if(maxIndex===0){
                    prediccion="Apoyo"
                }else if(maxIndex===1){
                    prediccion="Avanzado"
                }else{
                    prediccion="Normal"
                }
            
                // Enviar la respuesta con el valor más alto y su índice
                res.json({
                    maxPrediction,
                    maxIndex,
                    prediccion
                });
            }
        } else {
            if (!res.headersSent) {
                res.status(500).send('El script de Python falló');
            }
        }
    });
});

//Recuperar puntajes
app.get('/api/PointV',(req,res) =>{
    const query = "select IFNULL(Puntaje, 0) as Puntaje,Titulo from Progreso right Join Leccion on idMateria=Materia where idUsuario=? and Materia=? and Tipo=0;";
    db.query(query,req.body.usuario,req.body.materia,(err,result) =>{
        console.log("materia: "+req.body.materia)
        if(err){
            return res.send("Error al calcular progreso")
        } 
        else {
            console.log(result)
            return res.send(result+"%")
        }
    })
});
/*
//TOUPDATE Eliminar Usuario
app.delete('/api/DeleteL',(req,res) =>{
    const query = "DELETE FROM Leccion WHERE idLeccion = ?";
    db.query(query,req.body.idUser,(err,result) =>{
        if(err) return res.send("Error al eliminar la Leccion")
        else res.send("Leccion eliminada")
    })
});

//TOUPDATE Actualizar Usuario
app.put('/api/UpdateL',(req,res) =>{
    const query = "UPDATE LECCION SET Titulo = ?,Materia = ?,Tipo = ?,Contenido = ? WHERE Titulo = ?";
    db.query(query,req.body.title,req.body.subject,req.body.type,req.body.content,req.body.PreviousTitle,(err,result) =>{
        if(err) return res.send("Error al actualizar la Leccion")
        else res.send("Leccion Actualizada")
    })
});
*/

//Test Wolfram API
app.get('/api/Wolfram',(req,res) => {
    waApi.getFull(req.body.op).then((queryresult) => {
        const pods = queryresult.pods;
        const output = pods.map((pod) => {
          const subpodContent = pod.subpods.map(subpod =>
            `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
          ).join('\n');
          return `<h2>${pod.title}</h2>\n${subpodContent}`
        }).join('\n');
        console.log(output);
        res.send(output);
      }).catch(console.error);
});

app.post('/api/Cesar',(req,res) => {
    const {Ptext,displ} =req.body;
    console.log(Ptext + ", " + displ)
    result = Ptext.split('').map(char => {
        let code = char.charCodeAt(0);
        console.log(code);
        // Si es una letra mayúscula (A-Z)
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + parseInt(displ)) % 26) + 65);
        }     
        // Si es una letra minúscula (a-z)
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + parseInt(ddispl)) % 26) + 97);
        }
        // Si no es una letra, dejar el carácter tal como está
        return char;
    }).join('');
    console.log(result);
    res.json({"result": result});
});


app.listen(PORT,()=> console.log("Servidor iniciado escuchando en el puerto: ",PORT))