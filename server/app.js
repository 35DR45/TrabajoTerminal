const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt');
//const { APPID } = require('./apifile.js');
//const WolframAlphaAPI = require('@wolfram-alpha/wolfram-alpha-api');
//const waApi = WolframAlphaAPI(APPID);
//const tf = require('@tensorflow/tfjs-node'); // Importa TensorFlow.js para Node.js
const path = require('path');
const {exec, spawn } = require('child_process');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 3000;

//////////// Lista de bibliotecas de Python que deseas instalar para correr el script de python
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
    password: "PaS$R4z32",
    // password: "1234",
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
app.post('/api/Login',async (req,res)=>{
    const {user,pass} =req.body;
    
    if(user == "" || pass == ""){
        console.log("Vacios");
        return res.status(400).json({status:"Usuario o Contraseña vacios"})
    }    
    const query = "SELECT * FROM usuario WHERE NombreUsuario = ?";

    db.query(query,[user],async (err,result) =>{

        console.log("recibido usuario:"+ user);
        console.log("recibido contrasena:"+ pass); 

        if(err) return res.send("Error al iniciar sesion")

        if(result.length >= 0){
            for(const user of result){
                console.log
                if(user == undefined){
                    console.log("No encontro datos asi que es undefined")
                    return res.status(400).json({error:"Usuario o Contraseña no definidos"})

                }
                const contraseñaAlmacenada =  user.pass;
                const match = await bcrypt.compare(pass,contraseñaAlmacenada);
                    if(match){
                        console.log("Inicio de Sesión Exitoso")
                        return res.json({status:"Inicio de Sesión Exitoso",
                                idUsuario:user.idUsuario
                        });
                    }
            }
            console.log("Inicio de Sesión Fallido")
            return res.json({status:"Inicio de Sesión Fallido"});
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
app.get('/api/SeeUser/:idUser',(req,res) =>{
    const {idUser} = req.params
    console.log("Entro ver usuario")
    const query = "SELECT * FROM usuario WHERE idUsuario = ?";
    db.query(query,idUser,(err,result) =>{
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
app.get('/api/ContentLC/:IdLeccion/:Materia/:Tipo',(req,res) =>{
    console.log(req.params);
    const {IdLeccion, Materia, Tipo} = req.params;
    
    const query = "Select * from leccion where idLeccion= ? and Materia = ? and Tipo = ?";
    db.query(query, [IdLeccion, Materia, Tipo],(err,result) =>{
        console.log("idLeccion: "+ IdLeccion)
        console.log("Materia: "+ Materia)
        console.log("Tipo: "+ Tipo)

        if(err){
            console.log(err);
            
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
app.post('/api/Progreso',(req,res) =>{
    const query = "SELECT 	m.idMateria AS id, m.NombreMateria AS Materia, IFNULL((COUNT(CASE WHEN l.Tipo = 0 THEN p.idLeccion END) / COUNT(CASE WHEN l.Tipo = 0 THEN l.idLeccion END) * 100), 0) AS `PTeo`, IFNULL((COUNT(CASE WHEN l.Tipo = 1 THEN p.idLeccion END) / COUNT(CASE WHEN l.Tipo = 1 THEN l.idLeccion END) * 100), 0) AS `PPra`, IFNULL((COUNT(p.idLeccion) / COUNT(l.idLeccion) * 100), 0) AS `PTot` FROM Materia m LEFT JOIN Leccion l ON m.idMateria = l.Materia LEFT JOIN Progreso p ON l.idLeccion = p.idLeccion AND p.idUsuario IN (select idUsuario from Usuario where NombreUsuario=?) GROUP BY m.idMateria, m.NombreMateria";
    console.log("materia: "+ req.body.materia, "usuario: ",req.body.usuario);
    db.query(query,[req.body.usuario],(err,result) =>{
        if(err){
            console.log(err)
            return res.send("Error al calcular progreso")
        } 
        else {
            console.log(result)
            res.send(result)
        }
    })
});

//insertar progreso
app.post('/api/insertProgress',(req,res)=>{
    const{idUser,idLeccion,idMateria,Leccion_Tipo,Completado,Puntaje,Rendimiento}=req.body;
    console.log("ENTRO EN INSERTAR PROGRESO")
    const query ="INSERT INTO PROGRESO(idusuario,idLeccion,idMateria,Leccion_Tipo,Completado,Puntaje,Rendimiento) values (?,?,?,?,?,?,?)"

            db.query(query,[idUser,idLeccion,idMateria,Leccion_Tipo,Completado,Puntaje,Rendimiento],(err,result) =>{
                if(err){
                    console.log("No se insertaron los datos o ya existian")
                    return res.json({ "error": "No se insertaron los datos o ya existian" });
                } else return res.json({"status": "Datos insertados correctamente"})
            })
})
//ops
/*app.get('/api/Pair/:User',(req,res) => {
    const { User } =req.params
    console.log("Entro "+ User)
    //Primero recuperamos los datos del usuario actual del sistema
    const querygetUser = "SELECT idUsuario,Aprendizaje FROM usuario WHERE NombreUsuario = ?"
    //Despues asignamos otro Tutor
    //Esta asigna un tutor considerando un rendimiento de Normal
    const queryemparejar2 = "SELECT u.idUsuario,u.NombreUsuario,u.Telefono,p.idLeccion FROM Usuario u INNER JOIN Progreso p ON u.idUsuario = p.idUsuario WHERE u.Tutorado IS NULL AND u.Tipo = 2 AND u.Aprendizaje = ? AND p.rendimiento = 1 AND p.Leccion_Tipo = 1 AND (p.idLeccion, p.idMateria) IN (SELECT idLeccion, idMateria FROM Progreso WHERE rendimiento = 0 AND idUsuario = ?);";
    //Esta asigna un tutor considerando un rendimiento de Apoyo
    const queryemparejar1 = "SELECT u.idUsuario,u.NombreUsuario,u.Telefono,p.idLeccion FROM Usuario u INNER JOIN Progreso p ON u.idUsuario = p.idUsuario WHERE u.Tutorado IS NULL AND u.Tipo = 2 AND u.Aprendizaje = ? AND (p.rendimiento = 1 OR p.rendimiento = 2) AND p.Leccion_Tipo = 1 AND (p.idLeccion, p.idMateria) IN (SELECT idLeccion, idMateria FROM Progreso WHERE rendimiento = 2 AND idUsuario = ?);";
    //Posteriormente de asignar el tutor actualizamos los datos del tutor y el usuario
    const queryUpuser = "UPDATE usuario SET Tutor = ? WHERE idUsuario = ?  ";
    const queryUptutor = "UPDATE usuario SET Tutorado = ? WHERE idUsuario = ?  ";
    
    db.query(query,User,(err,result) =>{

        if(err){
            console.log("Error en la primera consulta no se encontro usuario")
            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
        } 
        if(result.length > 0){
            const idUser =result[0].idUsuario
            db.query(query2,idUser,(err,result) =>{
                if(err){
                    console.log("Error en la primera consulta no se encontro usuario")
                    return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
                }else{

                }  
            })
            console.log(result)
            return res.send(result)
        }
    })
});*/

//Emparejar
app.get('/api/Pair/:User/:Rendimiento/:idLeccion/:idMateria',(req,res) => {
    const { User,Rendimiento,idLeccion,idMateria } =req.params
    console.log("Entra a buscar tutor")
    console.log(User)
    console.log(Rendimiento)
    //console.log(idLeccion)
    //console.log(idMateria)
    
    //Primero recuperamos los datos del usuario actual del sistema
    const querygetUser = "SELECT NombreUsuario,Aprendizaje,Tutor FROM usuario WHERE idUsuario = ?"
    //Asignamos un tutor
    //Esta asigna un tutor considerando un rendimiento de Apoyo
    const queryemparejar1 = "SELECT u.idUsuario,u.NombreUsuario,u.Reputacion,u.Telefono,p.idLeccion FROM Usuario u INNER JOIN Progreso p ON u.idUsuario = p.idUsuario WHERE u.Tutorado IS NULL AND u.Tipo = 2 AND NOT p.idUsuario = ? AND u.Aprendizaje = ?  AND p.rendimiento = 1 AND p.Leccion_Tipo = 1 AND p.idLeccion = ? AND (p.idLeccion, p.idMateria) IN (SELECT idLeccion, idMateria FROM Progreso WHERE rendimiento = 0 AND idUsuario = ? AND idLeccion = ? AND idMateria =?);";
    //Esta asigna un tutor considerando un rendimiento de Normal
    const queryemparejar2 = "SELECT u.idUsuario,u.NombreUsuario,u.Reputacion,u.Telefono,p.idLeccion FROM Usuario u INNER JOIN Progreso p ON u.idUsuario = p.idUsuario WHERE u.Tutorado IS NULL AND u.Tipo = 2 AND NOT p.idUsuario = ? AND u.Aprendizaje = ?  AND (p.rendimiento = 1 OR p.rendimiento = 2) AND p.Leccion_Tipo = 1 AND p.idLeccion = ? AND (p.idLeccion, p.idMateria) IN (SELECT idLeccion, idMateria FROM Progreso WHERE rendimiento = 2 AND idUsuario = ? AND idLeccion = ? AND idMateria =?);";
    
    db.query(querygetUser,User,(err,result) =>{

        if(err){
            console.log("Error en la primera consulta no se encontro usuario")
            return res.status(500).json({ "status": "Error en la primera consulta no se encontro usuario" });
        } 
        
        if(result.length > 0){
            const Aprendizaje = result[0].Aprendizaje
            const Tutor = result[0].Tutor
            //console.log(User)
            //console.log(Aprendizaje)
            console.log("Aqui ID TUTOR")
            console.log(Tutor)
            let random_index 
            let random_item = [] 
            if(Tutor != null) return res.json({"status":"Ya tiene un tutor asignado",
                                                "Tutor":Tutor
            })
            if (Rendimiento == 0){
                console.log("Entro a rend 0")
                db.query(queryemparejar1,[User,Aprendizaje,idLeccion,User,idLeccion,idMateria],(err,result) =>{
                    if(err){
                        console.log("Error en la segunda consulta no se encontro usuario")
                        return res.status(500).json({ "status": "Error en la segunda consulta no se encontro usuario" });
                    }if(result.length> 0){
                        const top3 = result
                        .sort((a, b) => b.reputacion - a.reputacion) // Ordenar de mayor a menor
                        .slice(0, 3); // Tomar los 3 primeros
                        console.log(top3)
                        tam=top3.length
                        random_index=Math.floor(Math.random()*tam)
                        random_item =top3[random_index]
                        console.log(random_item)
                        return res.json({"status":"Emparejado","item":random_item})
                    }else{
                        return res.status(500).json({ "status": "No hay tutor disponible" });
                    }  
                    
                })

            }else if (Rendimiento == 2){
                console.log("Entro a rend 2")
                db.query(queryemparejar2,[User,Aprendizaje,idLeccion,User,idLeccion,idMateria],(err,result) =>{
                    if(err){
                        console.log("Error en la segunda consulta no se encontro usuario")
                        return res.status(500).json({ "status": "Error en la segunda consulta no se encontro usuario" });
                    }if(result.length> 0){
                        tam=result.length
                        random_index=Math.floor(Math.random()*tam)
                        random_item =result[random_index]
                        console.log(random_item)
                        return res.json({"status":"Emparejado","item":random_item})
                    } else{
                        return res.status(500).json({ "status": "Error en la segunda consulta no se encontro tutor" });
                    }  
                })
            }
        }
    })
});

//Ya hizo la leccion
app.get('/api/LecFinished/:User/:idLeccion/:idMateria',(req,res) => {
    const{User,idLeccion,idMateria} =req.params;
    console.log(User)
    console.log(idLeccion)
    console.log(idMateria)
    query = "SELECT * FROM progreso WHERE idUsuario = ? AND idLeccion = ? AND idMateria = ? "
    db.query(query,[User,idLeccion,idMateria],(err,result) =>{

        if(err){
            console.log("Algo fallo en la consulta")
            return res.status(500).json({ "status": "Algo fallo en la consulta" });
        } if(result.length > 0){
            console.log(result[0])
            return res.json({"status":"Existe"})
        }else{
            return res.json({"status":"NoExiste"})
        }
    })

})
//Desasignar tutor
app.get('/api/Pair/:idUser',(req,res)=> {
    const {idUser} = req.params;
    let Tutor="";

    console.log("Aqui desemparejamos")
    console.log(idUser)
    const querygetTutor ="SELECT Tutor FROM usuario WHERE idUsuario = ? ";
    const queryUpuser = "UPDATE usuario SET Tutor = null WHERE idUsuario = ? ";
    const queryUptutor = "UPDATE usuario SET Tutorado = null WHERE idUsuario = ?  ";
    db.query(querygetTutor,[idUser],(err,result) =>{
        if(err){
            console.log("Error ")
            return res.status(500).json({ error: "Error en la primera consulta de get usuario" });
        }else{
            
            Tutor=result[0].Tutor;
            console.log(Tutor)
            db.query(queryUpuser,[idUser],(err,result) =>{
                if(err){
                    console.log("Error ")
                    return res.status(500).json({ error: "Error en la primera consulta de update usuario" });
                }else{
                    console.log("IDETUTOR")
                    console.log(Tutor)
                    db.query(queryUptutor,[Tutor],(err,result) =>{
        
                        if(err){
                            console.log("Error en la primera consulta no se Actualizo el usuario usuario")
                            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
                        } else return res.json({"status": "Exito"})
                    })
                } 
            })
        }
    })
})
//Desasignar usuario
app.get('/api/unPair/:idUser',(req,res)=> {
    const {idUser} = req.params;
    let Tutorado="";

    console.log("Aqui desemparejamos")
    console.log(idUser)
    const querygetTutor ="SELECT Tutorado FROM usuario WHERE idUsuario = ? ";
    const queryUpuser = "UPDATE usuario SET Tutorado = null WHERE idUsuario = ? ";
    const queryUptutor = "UPDATE usuario SET Tutor = null WHERE idUsuario = ?  ";
    db.query(querygetTutor,[idUser],(err,result) =>{
        if(err){
            console.log("Error ")
            return res.status(500).json({ error: "Error en la primera consulta de get usuario" });
        }else{
            
            Tutorado=result[0].Tutorado;
            console.log(Tutorado)
            db.query(queryUpuser,[idUser],(err,result) =>{
                if(err){
                    console.log("Error ")
                    return res.status(500).json({ error: "Error en la primera consulta de update usuario" });
                }else{
                    console.log("IDETUTORADO")
                    console.log(Tutorado)
                    db.query(queryUptutor,[Tutorado],(err,result) =>{
        
                        if(err){
                            console.log("Error en la primera consulta no se Actualizo el usuario usuario")
                            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
                        } else return res.json({"status": "Exito"})
                    })
                } 
            })
        }
    })
})
//Asignar el tutor
app.get('/api/Pair/:idUser/:idTutor',(req,res) =>{
    const {idUser,idTutor} = req.params;
    //Posteriormente de asignar el tutor actualizamos los datos del tutor y el usuario
    const queryUpuser = "UPDATE usuario SET Tutor = ? WHERE idUsuario = ?  ";
    const queryUptutor = "UPDATE usuario SET Tutorado = ? WHERE idUsuario = ?  ";
    db.query(queryUpuser,[idTutor,idUser],(err,result) =>{
        if(err){
            console.log("Error ")
            return res.status(500).json({ error: "Error en la primera consulta de update usuario" });
        }else{
            db.query(queryUptutor,[idUser,idTutor],(err,result) =>{

                if(err){
                    console.log("Error en la primera consulta no se encontro usuario")
                    return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
                } else return res.json({"status": "Emparejamiento exitoso"})
            })
        } 
    })
});
//Cargar tutor
app.get('/api/verTutor/:User',(req,res) =>{
    const{ User } = req.params
    //console.log("Entro "+ User)
    const query = "SELECT Tutor FROM usuario WHERE idUsuario = ?"

    const query2="SELECT Telefono,NombreUsuario FROM usuario WHERE idUsuario= ?"

    db.query(query,User,(err,result) =>{
        if(err){
            console.log("Error en la primera consulta no se encontro usuario")
            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
        } 
        if(result.length > 0){
            const tutorId =result[0].Tutor
            //console.log("Obtenido : " + tutorId)
            db.query(query2,tutorId,(err,result) =>{
                if(err){
                    //console.log("Error en la segunda consulta no se encontro  tutor")
                    return res.status(500).json({ error: "Error en la segunda consulta no se encontro  tutor" });
                }else{
                    //console.log("Obtenido : " + result[0].NombreUsuario + " "+result[0].Telefono)
                    return res.json({
                        "Nombre":result[0].NombreUsuario,
                        "Telefono":result[0].Telefono
                    }) 
                } 

            })

        }
    })
})
//Cargar Usuario
app.get('/api/verUsuario/:User',(req,res) =>{
    const{ User } = req.params
    //console.log("Entro "+ User)
    const query = "SELECT Tutorado FROM usuario WHERE idUsuario = ?"

    const query2="SELECT Correo,NombreUsuario FROM usuario WHERE idUsuario= ?"

    db.query(query,User,(err,result) =>{
        if(err){
            console.log("Error en la primera consulta no se encontro usuario")
            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
        } 
        if(result.length > 0){
            const usuarioId =result[0].Tutorado
            //console.log("Obtenido : " + tutorId)
            db.query(query2,usuarioId,(err,result) =>{
                if(err){
                    //console.log("Error en la segunda consulta no se encontro  tutor")
                    return res.status(500).json({ error: "Error en la segunda consulta no se encontro  tutor" });
                }else{
                    //console.log("Obtenido : " + result[0].NombreUsuario + " "+result[0].Telefono)
                    return res.json({
                        "Nombre":result[0].NombreUsuario,
                        "Correo":result[0].Correo
                    }) 
                } 

            })

        }
    })
})
//Consulta para volver un usuario tutor
app.post('/api/serTutor',(req,res)=>{
    const {Tipo,idUser} =req.body;
    console.log(Tipo)
    console.log(idUser)
    const query2 ="UPDATE usuario SET Tipo = ? WHERE idUsuario = ?"
    const query ="SELECT Telefono FROM usuario WHERE idUsuario = ?"
    db.query(query,idUser,(err,result) =>{
        if(err){
            console.log("Error al obtener usuario")
            return res.status(500).json({ error: "Error al obtener usuario" });
        }else{
            let Telefono=""
            if(result[0].Telefono==12345) Telefono ="Sin telefono"
            else Telefono=result[0].Telefono
            

            db.query(query2,[Tipo,idUser],(err,result) =>{
                if(err){
                    
                    console.log("Error al asignar tutor")
                    return res.status(500).json({ error: "Error al convertirlo en tutor" });

                } else{
                    
                    console.log("Nuevo Tutor creado")
                    return res.status(200).json({Status:"Tutor Agregado",
                                                Telefono:Telefono
                    })
                }  
            })
        }

    })
})
//Consulta para asignar numero de telefono
app.post('/api/setTelefono',(req,res)=>{
    const {Telefono,idUser} =req.body;
    console.log(Telefono)
    console.log(idUser)
    const query ="UPDATE usuario SET Telefono = ? WHERE idUsuario = ?"
    db.query(query,[Telefono,idUser],(err,result) =>{
        if(err){
            console.log("Error al actualizar el número de teléfono")
            return res.status(500).json({ error: "Error al actualizar el número de teléfono" });
        }else{
            console.log("Teléfono celular actualizado")
            return res.status(200).json({Status:"Telefono modificado"})
            }
    })
})

//Valorar Tutor
app.post('/api/Appreciate',(req,res)=>{
    const {action,idUsuario} =req.body;
    console.log(action)
    console.log(idUsuario)
    
    const querygetTutor ="SELECT Tutor FROM usuario WHERE idUsuario = ?"
    const query1 ="UPDATE usuario SET Reputacion=Reputacion+3 WHERE idUsuario = ?"
    const query2 ="UPDATE usuario SET Reputacion=Reputacion-3 WHERE idUsuario = ?"
    db.query(querygetTutor,[idUsuario],(err,result) =>{
        if(err){
            console.log("No se encontro Tutor")
            return res.json({ error: "No se encontro Tutor" });
        }else{
            console.log("Tutor encontrado")
            let Tutor =result[0].Tutor
            if(action=="like"){
                db.query(query1,[Tutor],(err,result) =>{
                    if(err){
                        console.log("No se cambio su reputacion")
                        return res.json({ "error": "No se cambio su reputacion" });
                    }else{
                        console.log("Se cambio su reputacion like")
                        return res.json({"status":"Se cambio su reputacion"})
                        }
                })
            }else if(action=="dislike"){
                db.query(query2,[Tutor],(err,result) =>{
                    if(err){
                        console.log("No se cambio su reputacion")
                        return res.json({ "error": "No se cambio su reputacion" });
                    }else{
                        console.log("Se cambio su reputacion dislike ")
                        return res.json({"status":"Se cambio su reputacion"})
                        }
                })
            }
        }
    })
    
})

//Resultado de ejercicios
app.post('/api/Result',(req,res)=>{
    const {idLeccion,Materia,Respuestas} =req.body;
    console.log(idLeccion)
    console.log(Respuestas)
    //const answers={R1,R2,R3,R4,R5}
    let score = 0
    const results ={}
    const query = "SELECT Contenido FROM leccion WHERE idLeccion = ? AND Materia = ? ";

    db.query(query,[idLeccion,Materia],async (err,result) =>{
        if(err) return res.send("Error obteniendo los datos")
        if(result.length >= 0){
            data = result[0]
            console.log( "PREGUNTAS OBTENIDAS :\n")
            console.log(data)
            for(const pregunta in Respuestas){
                data.Contenido.forEach((elemento,index) =>{
                    if(pregunta == elemento.Enunciado){
                         //console.log(answers[`R${pos}`])
                    pos=index+1;
                    if (Respuestas[pregunta]==elemento.R_Correcta){
                        score= score + 1;
                        results[index]=1
                    }else if (Respuestas[pregunta]==elemento.R_Truco){
                        results[index]=0.5
                    }else{
                        results[index]=0
                    }    
                    }
                })
            }
           // console.log(answers)
            console.log(score)
            console.log(results)
            const resultado={
                "Puntuación":score,
                "Respuestas":results
            }
           return res.json(resultado)   
        }
    })

});
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
// Normalización Min-Max               
function minMaxNormalize(value, min, max) {
                       return (value - min) / (max - min);
}

/*Requiere de:{
        "inputData":[Puntaje,
                    Respuesta a pregunta Facil(0 si se respondio mal,0.5 si se respondio la respuesta trampa y 1 si se respondio correctamente),
                    estilodeAprendizaje(numero: 1 Visual,2 Auditivo, 3 Kinestesico),
                    Respuesta a pregunta Dificil(0 si se respondio mal,0.5 si se respondio la respuesta trampa y 1 si se respondio correctamente),
                    si se estudio recientemente(si se leeyo la parte teorica 1 sino 0),
                    Pregunta dificil 2 (0 si se respondio mal,0.5 si se respondio la respuesta trampa y 1 si se respondio correctamente)]}
                    */                    
app.post('/api/Predpy', async (req,res) =>{
    const { user,idLeccion,idMateria,inputData } = req.body; 

    query1="SELECT Aprendizaje FROM usuario WHERE idUsuario = ? "
    query2= "SELECT Completado FROM progreso WHERE idUsuario= ? AND idLeccion = ? AND idMateria = ?"
    console.log("ENTRA PREDPY")
    console.log(inputData)
    console.log(user)
    console.log(idLeccion)
    console.log(parseInt(idLeccion)+1)
    console.log(idMateria)
    db.query(query1,[user],async (err,result) =>{
        if(err){
            console.log("Error al obtener aprendizaje de  usuario")
        }else{
            console.log(result[0].Aprendizaje)
            inputData[2] =result[0].Aprendizaje
            console.log(inputData[2])
            console.log(inputData)
            db.query(query2,[user,parseInt(idLeccion)-1,idMateria,],async (err,result) =>{
                console.log(result)
                if(err){
                    console.log("Aun no ha revisado la teoria")
                        inputData[4] = 0
                }else if(result.length > 0 ) {
                    inputData[4] = 1
                }else inputData[4] = 0
                console.log(inputData)
                console.log(inputData[4])
            })
        
         }
    })
    // Validar que inputData no sea null, undefined o esté vacío
    if (!inputData || !Array.isArray(inputData) || inputData.length === 0 || inputData.some(item => item === null)) {
        return res.status(400).send("Datos vacíos, no válidos o contienen valores nulos");
    }
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
app.post('/api/Wolfram',(req,res) => {
    const {op} =req.body;
    console.log(op);
    let  imagesrc= "";
    let alttext="";
    waApi.getFull(op).then((queryresult) => {
        const pods = queryresult.pods;
        console.log(pods);
        pods.forEach((pod)=>{
            if(pod.title=="Result"||pod.title=="Exact result"){
                //console.log(pod);
                //console.log(pod.subpods[0]);
                imagesrc = pod.subpods[0].img.src;
                alttext = pod.subpods[0].img.alt;
            }
        });
        console.log(imagesrc);
        console.log(alttext);
        res.json({"imagesrc": imagesrc, "alttext": alttext});
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

app.post('/api/Vigenere',(req,res) => {
    const {Ptext,key} =req.body;
    console.log(Ptext + ", " + key)
    let keyIndex = 0;
    let keyLength = key.length;
    result = Ptext.split('').map(char => {
        let code = char.charCodeAt(0);
        // Determinar desplazamiento actual basado en el carácter de la clave
        let keyChar = key[keyIndex % keyLength].toLowerCase();
        let shift = keyChar.charCodeAt(0) - 96;
        // Si es una letra mayúscula (A-Z)
        if (code >= 65 && code <= 90) {

            let newChar = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            keyIndex++; // Avanza en la clave solo si se cifra una letra
            return newChar;
        }
        // Si es una letra minúscula (a-z)
        if (code >= 97 && code <= 122) {
            let newChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            keyIndex++; // Avanza en la clave solo si se cifra una letra
            return newChar;
        }
        // Si no es una letra, dejar el carácter tal como está
        return char;
    }).join('');
    console.log(result);
    res.json({"result": result});
});


app.listen(PORT,()=> console.log("Servidor iniciado escuchando en el puerto: ",PORT))