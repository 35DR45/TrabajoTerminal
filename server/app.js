const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt');
const {keys} = require('./apifile.js');
const { APPID } = require('./apifile.js');
const WolframAlphaAPI = require('@wolfram-alpha/wolfram-alpha-api');
const waApi = WolframAlphaAPI(keys.APPID);
const nodemailer = require('nodemailer');
const { MAILAPI } = require('./apifile.js');
const session = require('express-session');
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
    //console.log(`Bibliotecas instaladas correctamente:\n${stdout}`);
});*/


// Definir y registrar el regularizador L2
// Definir y registrar el regularizador L2 manualmente
/*class L2 {
    constructor(config) {
        this.l2 = config.l2; // Coeficiente L2 desde el JSON
    }

    apply(x) {
        return tf.mul(this.l2, tf.sum(tf.square(x))); // Regularización L2
    }

    getConfig() {
        return { l2: this.l2 }; // Para serialización
    }

    static get className() {
        return 'L2'; // Nombre del regularizador
    }
}

// Registrar la clase en TensorFlow.js
tf.serialization.registerClass(L2);

async function loadAndUseModel() {
    try {
        // Ruta al archivo model.json
        const modelPath = path.resolve(__dirname, './CNNB169/model.json');

        // Cargar el modelo
        const model = await tf.loadLayersModel(`file://${modelPath}`);
        //console.log('Modelo cargado exitosamente.');

        
        // Ver la arquitectura del modelo
        model.summary();

        // Crear un tensor de entrada (por ejemplo, un conjunto de datos ficticio con 6 características)
        const input = tf.tensor2d([[5, 1, 1, 1, 1, 1]]); // Cambia según tus datos

        // Realizar predicción
        const output = model.predict(input);

        // Mostrar resultados
        output.print();
    } catch (error) {
        console.error('Error al cargar o usar el modelo:', error);
    }
}

loadAndUseModel();
*/
// Configurar el middleware de sesión
app.use(session({
    name:'user',
    secret: 'clave_secreta_cookie', // Clave secreta para firmar las cookies de la sesión
    resave: false,               // No volver a guardar la sesión si no hay cambios
    saveUninitialized: false,    // No guardar sesiones no inicializadas
    cookie: { 
        secure: false,           // Debe ser `true` si usas HTTPS
        maxAge: 60000*60            // Tiempo de expiración en milisegundos (1 minuto)
    }
}));

app.use(cors({
    //origin: 'http://127.0.0.1:5173',
    origin: 'http://13.59.72.188:80',
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true,
}));

var transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
        user: 'apikey',
        pass: keys.MAILAPI
    }
});


const db=mysql.createConnection({
    host:"localhost",
    //host:"13.59.72.188",
    user: "root",
    //password: "PaS$R4z32",
    password: "1234",
    database: "mydb",
});

db.connect(function(err) {
    if (err) throw err;
    ////console.log("Connected!");
  });
//TODO Agregar la BD y modificar los campos
app.get('/',(req,res)=>{
    res.json({status: "INICIO"});
});
app.get('/api/mail',(req,res)=>{
    var mailOptions = {
        from: 'soprote.tt2024b169@gmail.com',
        to: 'angeliyoxd@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send("no")
        } else {
            console.log('Email sent: ' + info.response);
            res.send("yes")
        }
    });
});
//LOGIN DE USUARIO 
/*regresa un json{
        "status":(Aqui te da el mensaje de lo que ocurrio)
        }
    */
app.post('/api/Login',async (req,res)=>{
    const {user,pass} =req.body;
    
    if(user == "" || pass == ""){
        //console.log("Vacios");
        return res.status(400).json({status:"Usuario o Contraseña vacios"})
    }    
    const query = "SELECT * FROM Usuario WHERE NombreUsuario = ?";

    db.query(query,[user],async (err,result) =>{

        ////console.log("recibido usuario:"+ user);
        ////console.log("recibido contrasena:"+ pass); 
        ////console.log(result);
        

        if(err){
           // //console.log("Error en el login, es: ", err);
            return res.send("Error al iniciar sesion");

        } 

        if(result.length >= 0){
            for(const user of result){
                
                if(user == undefined){
                   // //console.log("No encontro datos asi que es undefined")
                    return res.status(400).json({error:"Usuario o Contraseña no definidos"})

                }
                const contraseñaAlmacenada =  user.pass;
                const match = await bcrypt.compare(pass,contraseñaAlmacenada);
                    if(match){
                        req.session.usuario={id:user.idUsuario,name:user.NombreUsuario,tipo:user.Tipo}

                        console.log(req.session.usuario)
                        ////console.log("Inicio de Sesión Exitoso")
                        return res.json({status:"Inicio de Sesión Exitoso",
                                idUsuario:user.idUsuario
                        });
                    }
            }
            ////console.log("Inicio de Sesión Fallido")
            return res.json({status:"Inicio de Sesión Fallido"});
        }else{
            ////console.log("Sin coincidencias");
            
            return res.json({status:"No se encontro coincidencia"})
        }
    })

});
app.get('/api/LogOut',async (req,res)=>{
    req.session.destroy((err) => {
        if (err) {
            console.error('Error al destruir la sesión:', err);
            res.status(500).send('No se pudo destruir la sesión.');
        } else {
            res.clearCookie('user'); // Borra la cookie de sesión del navegador
            res.send('Sesión destruida exitosamente.');
        }
    });

});
// Ruta para validar el rol del usuario
app.get('/api/validate-role', (req, res) => {
    console.log(req.session.usuario.tipo)
    res.json({ role: req.session.usuario.tipo }); // Devuelve el rol del usuario
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
app.post('/api/Change', async(req, res) => {
    const { user, mail, pass, } = req.body
    
    
    if (!user || !mail || !pass) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
    
    try{
        const queryFind = "SELECT * FROM Usuario WHERE NombreUsuario = ?";
        const queryUpdate = "UPDATE Usuario SET pass = ? WHERE NombreUsuario = ? AND Correo = ?";

        const [rows] = await db.promise().query(queryFind, [user]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const userRecord = rows[0];
        if (userRecord.Correo !== mail) {
            return res.status(400).json({ error: "El correo no coincide" });
        }

        // Generar hash de la nueva contraseña
        const hashedPassword = await bcrypt.hash(pass, 10);

        // Actualizar contraseña
        await db.promise().query(queryUpdate, [hashedPassword, user, mail]);
        return res.json({ status: "Cambio de contraseña exitoso" });
    }catch(error){
        console.error("Error al cambiar contraseña:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }

    // db.query(queryFind,[user],async (err,result) =>{
    //     if(err) return res.send("Error al buscar el usuario")
    //         if(result.length >= 0){
    //             for(const user of result){
    //                 //console.log(user)
    //                 if(user == undefined){
    //                     //console.log("No encontro datos asi que es undefined")
    //                     return res.status(400).json({error:"Usuario o Contraseña no definidos"})
    
    //                 }
    //                 //console.log(user.Correo);
                    
    //                 if (user.Correo === mail) {
    //                     //console.log("Correos iguales");
    //                     const hashedPassword = await bcrypt.hash(pass, 10);
    //                     db.query(queryInsert, [hashedPassword, user, mail])
    //                     return res.json({status:"Cambio de contraseña exitoso"});
                        
    //                 }else{
    //                     //console.log("Correos diferentes registrados");
    //                     return res.json({status:"Los correos no coinciden"});
                        
    //                 }
    //             }
    //         }else{
    //             return res.json({status:"No se encontro coincidencia"})
    //         }
    // })
})

app.post('/api/Register',async (req,res) =>{
    ////console.log("Entro registro")
    const { user , mail , pass , phone, style } = req.body

    const query = "INSERT INTO Usuario(NombreUsuario,Correo,pass,Telefono,Tipo,Aprendizaje) values (?,?,?,?,?,?)";
    if( user == '' || mail == '' || pass == ''){
            ////console.log(" Registro Vacios");
            return res.status(400).json({status:"Usuario o Contraseña vacios"})
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    db.query(query,[user,mail,hashedPassword,phone,/*req.body.type*/1,style],(err,result) =>{

        ////console.log("user: "+user)
        ////console.log("mail: "+mail)
       // //console.log("hashedpass: "+hashedPassword)
        ////console.log("style: "+ style)

        if(err){
            ////console.log("Usuario no creado :"+err)
            return res.send({status:"Error Usuario no creado"})
        } 
        else{
            ////console.log("Usuario creado ") 
            ////console.log(result) 
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
    ////console.log("Entro ver usuarios")
    const query = "SELECT * FROM Usuario";
    db.query(query,(err,result) =>{
        if(err){
            ////console.log("Usuarios no enviados")
            return res.send({status:"Usuarios no recibidos"})
        } 
        else{
           // //console.log("Usuarios enviados:")
           // //console.log(result)
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
    ////console.log("Entro ver usuario")
    const query = "SELECT * FROM Usuario WHERE idUsuario = ?";
    db.query(query,idUser,(err,result) =>{
        if(err){
            ////console.log("Usuario no enviado")
            return res.send({status:"No enviado"})
        } 
        else{
           // //console.log("Usuario enviado:")
           // //console.log(result)
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
    ////console.log("Entro borrar usuario")
    const query = "DELETE FROM Usuario WHERE Correo = ?";
    db.query(query,req.body.mail,(err,result) =>{
        if(err){
           // //console.log("Error al eliminar el usuario")
            return res.send({status:"Error al consultar "})
        }
        else{ 
           // //console.log(result.affectedRows)
            if(result.affectedRows==0){
                ////console.log("El usuario no existo por lo tanto no se borro")
                res.send({status:" Usuario inexistente"})
            }
            else if (result.affectedRows==1){
                //console.log("Usuario eliminado correctamente")
                res.send({status:" Usuario Eliminado Correctamente"})
            }else{
                //console.log("Se afectaron : "+result.affectedRows+" elementos en bd, Algo anda mal")
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
    //console.log("Entro en actualizar usuario")
    const query = "UPDATE Usuario SET NombreUsuario = ?,Correo = ?,pass = ?,Telefono = ?,Tipo = ?,Tutor = ?,Aprendizaje = ? WHERE Correo = ?";
    const hashedPassword = await bcrypt.hash(req.body.newpass, 10);
    db.query(query,[req.body.newuser,req.body.newmail,hashedPassword,req.body.newphone,req.body.newtype,req.body.newtutor,req.body.newlearning,req.body.mail],(err,result) =>{
        //console.log("newuser: "+req.body.newuser)
        //console.log("mail: "+req.body.mail)
        //console.log("newmail: "+req.body.newmail)
        //console.log("newpass: "+req.body.newpass)
        //console.log("newTutor: "+req.body.newtutor)
        //console.log("newlearning: "+req.body.newlearning)
        //console.log("newType: "+req.body.newtype)
        //console.log("newhashedpass: "+hashedPassword)
        //console.log("newphone: "+req.body.newphone)
        if(err){
            //console.log(("Error al actualizar el usuario"))
            //console.log(err)
            return res.send({status:"Error"})
        } 
        else{ 
            //console.log(result.affectedRows)
            if(result.affectedRows==0){
                //console.log("El usuario no existo por lo tanto no se modifico")
                res.send({status:" Usuario inexistente"})
            }
            else if (result.affectedRows==1){
                //console.log("Usuario modificado correctamente")
                res.send({status:" Usuario modificado correctamente"})
            }else{
                //console.log("Se afectaron : "+result.affectedRows+" elementos en bd, Algo anda mal")
                return res.send({status:"Se actualizaron varios usuarios? jajaja"})
            }
        
        }
    })
});


//Usuario Actualiza contraseña
/*regresa un json{
        "status":(Aqui te da el mensaje de lo que ocurrio)
        }
*/
app.put('/api/Updatepass',async (req,res) =>{
    const{iduser,pass,newpass}=req.body
    //console.log("Entro en actualizar contraseña")
    //console.log("iduser: "+iduser)
    //console.log("pass: "+pass)
    //console.log("newpass: "+newpass)
    if(pass == "" || newpass == ""){
        //console.log("Vacios");
        return res.status(400).json({status:"Usuario o Contraseña vacios"})
    }  
    const check ="SELECT pass FROM Usuario WHERE idUsuario = ?"
    const query = "UPDATE Usuario SET pass = ? WHERE idUsuario = ?";
    db.query(check,iduser,(err,result)=>{
        if(err){
            //console.log(("Error al obtener la contraseña del usuario"))
            //console.log(err)
            return res.send({"status":"Error"})
        }else{
            const storedHash=result[0].pass
            // Verificar si la contraseña coincide con el hash
                bcrypt.compare(pass, storedHash, async (err, result) => {
                    if (err) {
                        console.error("Error al verificar el hash:", err);
                        return res.json({"status":"Termino"})
                    } else if (result) {

                        //console.log("¡La contraseña coincide!");
                        const hashedPassword = await bcrypt.hash(newpass, 10);
                        db.query(query,[hashedPassword,iduser],(err,result)=>{
                            if (err) {
                                console.error("Termino,no actualizo:", err);
                                return res.json({"status":"Termino,no actualizo"})
                            }else{
                                return res.json({"status":"Pass actualiza"})
                            }
                        });
                    } else {
                        //console.log("Contraseña incorrecta.");
                        return res.json({"status":"No coincide"})
                    }
                });
            
        }
    })
   /* db.query(query,[user,mail,aprendizaje,iduser],(err,result) =>{
        if(err){
            //console.log(("Error al actualizar el usuario"))
            //console.log(err)
            return res.send({"status":"Error"})
        } 
        else{ 
            //console.log(result.affectedRows)
            if(result.affectedRows==0){
                //console.log("El usuario no existo por lo tanto no se modifico")
                res.send({"status":" Usuario inexistente"})
            }
            else if (result.affectedRows==1){
                //console.log("Usuario modificado correctamente")
                res.send({"status":"Usuario modificado correctamente"})
            }else{
                //console.log("Se afectaron : "+result.affectedRows+" elementos en bd, Algo anda mal")
                return res.send({"status":"Se actualizaron varios usuarios? jajaja"})
            }
        
        }
    })*/
});

//Usuario Actualiza Usuario
/*regresa un json{
        "status":(Aqui te da el mensaje de lo que ocurrio)
        }
*/
app.put('/api/UUpdateU',async (req,res) =>{
    const{iduser,user,mail,aprendizaje}=req.body
    //console.log("Entro en actualizar usuario")
    //console.log("newuser: "+user)
    //console.log("mail: "+mail)
    //console.log("newlearning: "+aprendizaje)
    const query = "UPDATE Usuario SET NombreUsuario = ?,Correo = ?,Aprendizaje = ? WHERE idUsuario = ?";
    db.query(query,[user,mail,aprendizaje,iduser],(err,result) =>{
        if(err){
            //console.log(("Error al actualizar el usuario"))
            //console.log(err)
            return res.send({"status":"Error"})
        } 
        else{ 
            //console.log(result.affectedRows)
            if(result.affectedRows==0){
                //console.log("El usuario no existo por lo tanto no se modifico")
                res.send({"status":" Usuario inexistente"})
            }
            else if (result.affectedRows==1){
                //console.log("Usuario modificado correctamente")
                res.send({"status":"Usuario modificado correctamente"})
            }else{
                //console.log("Se afectaron : "+result.affectedRows+" elementos en bd, Algo anda mal")
                return res.send({"status":"Se actualizaron varios usuarios? jajaja"})
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
            //console.log(result)
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
    const query = "Select idLeccion,Titulo from Leccion where Materia=?";
    db.query(query,Materia,(err,result) =>{
        //console.log("materia: "+ Materia)
        if(err){
            return res.send("Error al enviar Lecciones")
        } 
        else {
            //console.log(result)
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
    //console.log(req.params);
    const {IdLeccion, Materia, Tipo} = req.params;
    
    const query = "Select * from Leccion where idLeccion= ? and Materia = ? and Tipo = ?";
    db.query(query, [IdLeccion, Materia, Tipo],(err,result) =>{
        //console.log("idLeccion: "+ IdLeccion)
        //console.log("Materia: "+ Materia)
        //console.log("Tipo: "+ Tipo)

        if(err){
            //console.log(err);
            
            return res.send("Error al enviar Lecciones")
        } 
        else {
            //console.log(result)
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
    const query = "Select * from Materia";
    db.query(query,(err,result) =>{
        if(err){
            return res.send("Error no se pudo obtener el numero de materias")
        } 
        else {
            //console.log(result)
            return res.send(result)
        }
    })
});

//Recuperar progreso
app.post('/api/Progreso',(req,res) =>{
    const query = "SELECT 	m.idMateria AS id, m.NombreMateria AS Materia, IFNULL((COUNT(CASE WHEN l.Tipo = 0 THEN p.idLeccion END) / COUNT(CASE WHEN l.Tipo = 0 THEN l.idLeccion END) * 100), 0) AS `PTeo`, IFNULL((COUNT(CASE WHEN l.Tipo = 1 THEN p.idLeccion END) / COUNT(CASE WHEN l.Tipo = 1 THEN l.idLeccion END) * 100), 0) AS `PPra`, IFNULL((COUNT(p.idLeccion) / COUNT(l.idLeccion) * 100), 0) AS `PTot` FROM Materia m LEFT JOIN Leccion l ON m.idMateria = l.Materia LEFT JOIN Progreso p ON l.idLeccion = p.idLeccion AND p.idUsuario IN (select idUsuario from Usuario where NombreUsuario=?) GROUP BY m.idMateria, m.NombreMateria";
    //console.log("materia: "+ req.body.materia, "usuario: ",req.body.usuario);
    db.query(query,[req.body.usuario],(err,result) =>{
        if(err){
            //console.log(err)
            return res.send("Error al calcular progreso")
        } 
        else {
            //console.log(result)
            res.send(result)
        }
    })
});

//insertar progreso
app.post('/api/insertProgress',(req,res)=>{
    const{idUser,idLeccion,idMateria,Leccion_Tipo,Completado,Puntaje,Rendimiento}=req.body;
    //console.log("ENTRO EN INSERTAR PROGRESO")
    const query ="INSERT INTO Progreso(idusuario,idLeccion,idMateria,Leccion_Tipo,Completado,Puntaje,Rendimiento) values (?,?,?,?,?,?,?)"

            db.query(query,[idUser,idLeccion,idMateria,Leccion_Tipo,Completado,Puntaje,Rendimiento],(err,result) =>{
                if(err){
                    //console.log("No se insertaron los datos o ya existian")
                    return res.json({ "error": "No se insertaron los datos o ya existian" });
                } else return res.json({"status": "Datos insertados correctamente"})
            })
})
//ops
/*app.get('/api/Pair/:User',(req,res) => {
    const { User } =req.params
    //console.log("Entro "+ User)
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
            //console.log("Error en la primera consulta no se encontro usuario")
            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
        } 
        if(result.length > 0){
            const idUser =result[0].idUsuario
            db.query(query2,idUser,(err,result) =>{
                if(err){
                    //console.log("Error en la primera consulta no se encontro usuario")
                    return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
                }else{

                }  
            })
            //console.log(result)
            return res.send(result)
        }
    })
});*/

//Emparejar
app.get('/api/Pair/:User/:Rendimiento/:idLeccion/:idMateria',(req,res) => {
    const { User,Rendimiento,idLeccion,idMateria } =req.params
    //console.log("Entra a buscar tutor")
    //console.log(User)
    //console.log(Rendimiento)
    //console.log(idLeccion)
    //console.log(idMateria)
    
    //Primero recuperamos los datos del usuario actual del sistema
    const querygetUser = "SELECT NombreUsuario,Aprendizaje,Tutor FROM Usuario WHERE idUsuario = ?"
    //Asignamos un tutor
    //Esta asigna un tutor considerando un rendimiento de Apoyo
    const queryemparejar1 = "SELECT u.idUsuario,u.NombreUsuario,u.Reputacion,u.Telefono,p.idLeccion FROM Usuario u INNER JOIN Progreso p ON u.idUsuario = p.idUsuario WHERE u.Tutorado IS NULL AND u.Tipo = 2 AND NOT p.idUsuario = ? AND u.Aprendizaje = ?  AND p.AcTutor = 1 AND p.rendimiento = 1 AND p.Leccion_Tipo = 1 AND p.idLeccion = ? AND (p.idLeccion, p.idMateria) IN (SELECT idLeccion, idMateria FROM Progreso WHERE rendimiento = 0 AND idUsuario = ? AND idLeccion = ? AND idMateria =? );";
    //Esta asigna un tutor considerando un rendimiento de Normal
    const queryemparejar2 = "SELECT u.idUsuario,u.NombreUsuario,u.Reputacion,u.Telefono,p.idLeccion FROM Usuario u INNER JOIN Progreso p ON u.idUsuario = p.idUsuario WHERE u.Tutorado IS NULL AND u.Tipo = 2 AND NOT p.idUsuario = ? AND p.AcTutor = 1 AND u.Aprendizaje = ?  AND (p.rendimiento = 1 OR p.rendimiento = 2) AND p.Leccion_Tipo = 1 AND p.idLeccion = ? AND (p.idLeccion, p.idMateria) IN (SELECT idLeccion, idMateria FROM Progreso WHERE rendimiento = 2 AND idUsuario = ? AND idLeccion = ? AND idMateria =? AND AcTutor = 1);";
    
    db.query(querygetUser,User,(err,result) =>{

        if(err){
            //console.log("Error en la primera consulta no se encontro usuario")
            return res.json({ "status": "Error en la primera consulta no se encontro usuario" });
        } 
        
        if(result.length > 0){
            const Aprendizaje = result[0].Aprendizaje
            const Tutor = result[0].Tutor
            ////console.log(User)
            ////console.log(Aprendizaje)
            //console.log("Aqui ID TUTOR")
            //console.log(Tutor)
            let random_index 
            let random_item = [] 
            if(Tutor != null) return res.json({"status":"Ya tiene un tutor asignado",
                                                "Tutor":Tutor
            })
            if (Rendimiento == 0){
                //console.log("Entro a rend 0")
                db.query(queryemparejar1,[User,Aprendizaje,idLeccion,User,idLeccion,idMateria],(err,result) =>{
                    if(err){
                        //console.log("Error en la segunda consulta no se encontro usuario")
                        return res.json({ "status": "Error en la segunda consulta no se encontro usuario" });
                    }if(result.length> 0){
                        const top3 = result
                        .sort((a, b) => b.reputacion - a.reputacion) // Ordenar de mayor a menor
                        .slice(0, 3); // Tomar los 3 primeros
                        //console.log(top3)
                        tam=top3.length
                        random_index=Math.floor(Math.random()*tam)
                        random_item =top3[random_index]
                        //console.log(random_item)
                        return res.json({"status":"Emparejado","item":random_item})
                    }else{
                        return res.json({ "status": "No hay tutor disponible" });
                    }  
                    
                })

            }else if (Rendimiento == 2){
                //console.log("Entro a rend 2")
                db.query(queryemparejar2,[User,Aprendizaje,idLeccion,User,idLeccion,idMateria],(err,result) =>{
                    if(err){
                        //console.log("Error en la segunda consulta no se encontro usuario")
                        return resjson({ "status": "Error en la segunda consulta no se encontro usuario" });
                    }if(result.length> 0){
                        tam=result.length
                        random_index=Math.floor(Math.random()*tam)
                        random_item =result[random_index]
                        //console.log(random_item)
                        return res.json({"status":"Emparejado","item":random_item})
                    } else{
                        return res.json({ "status": "Error en la segunda consulta no se encontro tutor" });
                    }  
                })
            }
        }
    })
});

//Ya hizo la leccion
app.get('/api/LecFinished/:User/:idLeccion/:idMateria',(req,res) => {
    const{User,idLeccion,idMateria} =req.params;
    //console.log(User)
    //console.log(idLeccion)
    //console.log(idMateria)
    query = "SELECT * FROM Progreso WHERE idUsuario = ? AND idLeccion = ? AND idMateria = ? "
    db.query(query,[User,idLeccion,idMateria],(err,result) =>{

        if(err){
            //console.log("Algo fallo en la consulta")
            return res.status(500).json({ "status": "Algo fallo en la consulta" });
        } if(result.length > 0){
            //console.log(result[0])
            return res.json({"status":"Existe"})
        }else{
            return res.json({"status":"NoExiste"})
        }
    })

})
//Eliminar progreso
app.delete('/api/DeleteProgress',(req,res) =>{
    const {idUser,idLeccion,idMateria} =req.body
    //console.log("Entro borrar progreso")
    //console.log(idUser)
    //console.log(idLeccion)
    //console.log(idMateria)
    const query = "DELETE FROM Progreso WHERE idUsuario = ? AND idLeccion = ? AND idMateria = ?";
    db.query(query,[idUser,idLeccion,idMateria],(err,result) =>{
        if(err){
            //console.log("Error al eliminar el progreso")
            return res.send({status:"Error al eliminar "})
        }
        else{ 
            //console.log(result)
            //console.log(result.affectedRows)
            if(result.affectedRows==0){
                //console.log("El progreso no existe por lo tanto no se borro")
               return res.send({status:" progreso inexistente"})
            }
            else if (result.affectedRows==1){
                //console.log("progreso eliminado correctamente")
                return res.send({status:"progreso Eliminado Correctamente"})
            }else{
                //console.log("Se afectaron : "+result.affectedRows+" elementos en bd, Algo anda mal")
               return res.send({status:" Varios progresos eliminados? jajaja"})
            }

        }
    })
});
//Desasignar tutor
app.get('/api/Pair/:idUser',(req,res)=> {
    const {idUser} = req.params;
    let Tutor="";

    //console.log("Aqui desemparejamos")
    //console.log(idUser)
    const querygetTutor ="SELECT Tutor FROM Usuario WHERE idUsuario = ? ";
    const queryUpuser = "UPDATE Usuario SET Tutor = null WHERE idUsuario = ? ";
    const queryUptutor = "UPDATE Usuario SET Tutorado = null WHERE idUsuario = ?  ";
    db.query(querygetTutor,[idUser],(err,result) =>{
        if(err){
            //console.log("Error ")
            return res.status(500).json({ error: "Error en la primera consulta de get usuario" });
        }else{
            
            Tutor=result[0].Tutor;
            //console.log(Tutor)
            db.query(queryUpuser,[idUser],(err,result) =>{
                if(err){
                    //console.log("Error ")
                    return res.status(500).json({ error: "Error en la primera consulta de update usuario" });
                }else{
                    //console.log("IDETUTOR")
                    //console.log(Tutor)
                    db.query(queryUptutor,[Tutor],(err,result) =>{
        
                        if(err){
                            //console.log("Error en la primera consulta no se Actualizo el usuario usuario")
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

    //console.log("Aqui desemparejamos")
    //console.log(idUser)
    const querygetTutor ="SELECT Tutorado FROM Usuario WHERE idUsuario = ? ";
    const queryUpuser = "UPDATE Usuario SET Tutorado = null WHERE idUsuario = ? ";
    const queryUptutor = "UPDATE Usuario SET Tutor = null WHERE idUsuario = ?  ";
    db.query(querygetTutor,[idUser],(err,result) =>{
        if(err){
            //console.log("Error ")
            return res.status(500).json({ error: "Error en la primera consulta de get usuario" });
        }else{
            
            Tutorado=result[0].Tutorado;
            //console.log(Tutorado)
            db.query(queryUpuser,[idUser],(err,result) =>{
                if(err){
                    //console.log("Error ")
                    return res.status(500).json({ error: "Error en la primera consulta de update usuario" });
                }else{
                    //console.log("IDETUTORADO")
                    //console.log(Tutorado)
                    db.query(queryUptutor,[Tutorado],(err,result) =>{
        
                        if(err){
                            //console.log("Error en la primera consulta no se Actualizo el usuario usuario")
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
    const queryUpuser = "UPDATE Usuario SET Tutor = ? WHERE idUsuario = ?  ";
    const queryUptutor = "UPDATE Usuario SET Tutorado = ? WHERE idUsuario = ?  ";
    db.query(queryUpuser,[idTutor,idUser],(err,result) =>{
        if(err){
            //console.log("Error ")
            return res.status(500).json({ error: "Error en la primera consulta de update usuario" });
        }else{
            db.query(queryUptutor,[idUser,idTutor],(err,result) =>{

                if(err){
                    //console.log("Error en la primera consulta no se encontro usuario")
                    return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
                } else return res.json({"status": "Emparejamiento exitoso"})
            })
        } 
    })
});
//Cargar tutor
app.get('/api/verTutor/:User',(req,res) =>{
    const{ User } = req.params
    ////console.log("Entro "+ User)
    const query = "SELECT Tutor FROM Usuario WHERE idUsuario = ?"

    const query2="SELECT Correo,NombreUsuario FROM Usuario WHERE idUsuario= ?"

    db.query(query,User,(err,result) =>{
        if(err){
            //console.log("Error en la primera consulta no se encontro usuario")
            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
        } 
        if(result.length > 0){
            const tutorId =result[0].Tutor
            ////console.log("Obtenido : " + tutorId)
            db.query(query2,tutorId,(err,result) =>{
                if(err){
                    ////console.log("Error en la segunda consulta no se encontro  tutor")
                    return res.status(500).json({ error: "Error en la segunda consulta no se encontro  tutor" });
                }else{
                    ////console.log("Obtenido : " + result[0].NombreUsuario + " "+result[0].Telefono)
                    return res.json({
                        "Nombre":result[0].NombreUsuario,
                        "Tutor":result[0].Correo
                    }) 
                } 

            })

        }
    })
})
//Cargar Usuario
app.get('/api/verUsuario/:User',(req,res) =>{
    const{ User } = req.params
    ////console.log("Entro "+ User)
    const query = "SELECT Tutorado FROM Usuario WHERE idUsuario = ?"

    const query2="SELECT Correo,NombreUsuario FROM Usuario WHERE idUsuario= ?"

    db.query(query,User,(err,result) =>{
        if(err){
            //console.log("Error en la primera consulta no se encontro usuario")
            return res.status(500).json({ error: "Error en la primera consulta no se encontro usuario" });
        } 
        if(result.length > 0){
            const usuarioId =result[0].Tutorado
            ////console.log("Obtenido : " + tutorId)
            db.query(query2,usuarioId,(err,result) =>{
                if(err){
                    ////console.log("Error en la segunda consulta no se encontro  tutor")
                    return res.status(500).json({ error: "Error en la segunda consulta no se encontro  tutor" });
                }else{
                    ////console.log("Obtenido : " + result[0].NombreUsuario + " "+result[0].Telefono)
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
    const {Tipo,idUser,idLeccion,idMateria} =req.body;
    //console.log(Tipo)
    //console.log(idUser)
    //console.log(idLeccion)
    //console.log(idMateria)
    const query3 ="UPDATE Progreso SET AcTutor = 1 WHERE idUsuario = ? AND idLeccion = ? AND idMateria = ?"
    const query2 ="UPDATE Usuario SET Tipo = ? WHERE idUsuario = ?"
    db.query(query3,[idUser,idLeccion,idMateria],(err,result) =>{
        if(err){
            //console.log("Error al actualizar la leccion a posible tutoria")
            return res.status(500).json({ error: "Error al actualizar la leccion a posible tutoria" });
        }else{

            db.query(query2,[Tipo,idUser],(err,result) =>{
                if(err){
                    
                    //console.log("Error al asignar tutor")
                    return res.status(500).json({ error: "Error al convertirlo en tutor" });

                } else{
                    
                    //console.log("Nuevo Tutor creado")
                    return res.status(200).json({Status:"Tutor Agregado"})
                }  
            })
        }

    })
})
//Consulta para asignar numero de telefono
app.post('/api/setTelefono',(req,res)=>{
    const {Telefono,idUser} =req.body;
    //console.log(Telefono)
    //console.log(idUser)
    const query ="UPDATE Usuario SET Telefono = ? WHERE idUsuario = ?"
    db.query(query,[Telefono,idUser],(err,result) =>{
        if(err){
            //console.log("Error al actualizar el número de teléfono")
            return res.status(500).json({ error: "Error al actualizar el número de teléfono" });
        }else{
            //console.log("Teléfono celular actualizado")
            return res.status(200).json({Status:"Telefono modificado"})
            }
    })
})

//Valorar Tutor
app.post('/api/Appreciate',(req,res)=>{
    const {action,idUsuario} =req.body;
    //console.log(action)
    //console.log(idUsuario)
    
    const querygetTutor ="SELECT Tutor FROM Usuario WHERE idUsuario = ?"
    const query1 ="UPDATE Usuario SET Reputacion=Reputacion+3 WHERE idUsuario = ?"
    const query2 ="UPDATE Usuario SET Reputacion=Reputacion-3 WHERE idUsuario = ?"
    db.query(querygetTutor,[idUsuario],(err,result) =>{
        if(err){
            //console.log("No se encontro Tutor")
            return res.json({ error: "No se encontro Tutor" });
        }else{
            //console.log("Tutor encontrado")
            let Tutor =result[0].Tutor
            if(action=="like"){
                db.query(query1,[Tutor],(err,result) =>{
                    if(err){
                        //console.log("No se cambio su reputacion")
                        return res.json({ "error": "No se cambio su reputacion" });
                    }else{
                        //console.log("Se cambio su reputacion like")
                        return res.json({"status":"Se cambio su reputacion"})
                        }
                })
            }else if(action=="dislike"){
                db.query(query2,[Tutor],(err,result) =>{
                    if(err){
                        //console.log("No se cambio su reputacion")
                        return res.json({ "error": "No se cambio su reputacion" });
                    }else{
                        //console.log("Se cambio su reputacion dislike ")
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
    //console.log(idLeccion)
    //console.log(Respuestas)
    //const answers={R1,R2,R3,R4,R5}
    let score = 0
    const results ={}
    const query = "SELECT Contenido FROM Leccion WHERE idLeccion = ? AND Materia = ? ";

    db.query(query,[idLeccion,Materia],async (err,result) =>{
        if(err) return res.send("Error obteniendo los datos")
        if(result.length >= 0){
            data = result[0]
            //console.log( "PREGUNTAS OBTENIDAS :\n")
            //console.log(data)
            for(const pregunta in Respuestas){
                data.Contenido.forEach((elemento,index) =>{
                    if(pregunta == elemento.Enunciado){
                         ////console.log(answers[`R${pos}`])
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
           // //console.log(answers)
            //console.log(score)
            //console.log(results)
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
            //console.log(predictionArray)
            // Enviar el resultado promedio de la predicción como respuesta
            // Obtener el índice del valor más alto
            const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));
            //console.log('Clase predicha:', maxIndex);
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

    query1="SELECT Aprendizaje FROM Usuario WHERE idUsuario = ? "
    query2= "SELECT Completado FROM Progreso WHERE idUsuario= ? AND idLeccion = ? AND idMateria = ?"
    //console.log("ENTRA PREDPY")
    //console.log(inputData)
    //console.log(user)
    //console.log(idLeccion)
    //console.log(parseInt(idLeccion)+1)
    //console.log(idMateria)
    db.query(query1,[user],async (err,result) =>{
        if(err){
            //console.log("Error al obtener aprendizaje de  usuario")
        }else{
            //console.log(result[0].Aprendizaje)
            inputData[2] =result[0].Aprendizaje
            //console.log(inputData[2])
            //console.log(inputData)
            db.query(query2,[user,parseInt(idLeccion)-1,idMateria,],async (err,result) =>{
                //console.log(result)
                if(err){
                    //console.log("Aun no ha revisado la teoria")
                        inputData[4] = 0
                }else if(result.length > 0 ) {
                    inputData[4] = 1
                }else inputData[4] = 0
                //console.log(inputData)
                //console.log(inputData[4])
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
    
    const pythonProcess = spawn('python3', ['CNNB169/NN.py', JSON.stringify(pred)]);

    let result = '';

    // Recoge la salida del script de Python
    pythonProcess.stdout.on('data', (data) => {
        result += data.toString();
        result =JSON.parse(result)
        ////console.log(result)
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
    
                ////console.log("Valor más alto:", maxPrediction);
                //console.log("Índice del valor más alto:", maxIndex);
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
        //console.log("materia: "+req.body.materia)
        if(err){
            return res.send("Error al calcular progreso")
        } 
        else {
            //console.log(result)
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
    //console.log(op);
    let  imagesrc= "";
    let alttext="";
    waApi.getFull(op).then((queryresult) => {
        const pods = queryresult.pods;
        //console.log(pods);
        pods.forEach((pod)=>{
            if(pod.title=="Result"||pod.title=="Exact result"){
                ////console.log(pod);
                ////console.log(pod.subpods[0]);
                imagesrc = pod.subpods[0].img.src;
                alttext = pod.subpods[0].img.alt;
            }
        });
        //console.log(imagesrc);
        //console.log(alttext);
        res.json({"imagesrc": imagesrc, "alttext": alttext});
      }).catch(console.error);
});

app.post('/api/Cesar',(req,res) => {
    const {Ptext,displ} =req.body;
    //console.log(Ptext + ", " + displ)
    result = Ptext.split('').map(char => {
        let code = char.charCodeAt(0);
        //console.log(code);
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
    //console.log(result);
    res.json({"result": result});
});

app.post('/api/Vigenere',(req,res) => {
    const {Ptext,key} =req.body;
    //console.log(Ptext + ", " + key)
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
    //console.log(result);
    res.json({"result": result});
});


app.listen(PORT,()=> console.log("Servidor iniciado escuchando en el puerto: ",PORT))