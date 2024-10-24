const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 3000;
////////TODOO

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true,
}));

const db=mysql.createConnection({
    host:"localhost",
    user: "root",
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
    
    const query = "SELECT * FROM usuario WHERE NombreUsuario = ?";

    db.query(query,[req.body.user,req.body.pass],async (err,result) =>{

        console.log("recibido usuario:"+req.body.user);
        console.log("recibido contrasena:"+req.body.pass); 

        if(err) return res.send("Error al iniciar sesion")

        if(result.length > 0){
            
            const user = result[0];
            const match = await bcrypt.compare(req.body.pass, user.pass);
            if(match){
                return res.json({status:"Inicio de Sesión Exitoso"});
            }else{
                return res.json({status:"Inicio de Sesión Fallido"});
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
    const query = "INSERT INTO usuario(NombreUsuario,Correo,pass,Telefono,Tipo,Aprendizaje) values (?,?,?,?,?,?)";

    const hashedPassword = await bcrypt.hash(req.body.pass, 10);

    db.query(query,[req.body.user,req.body.mail,hashedPassword,req.body.phone,/*req.body.type*/1,/*req.body.learning*/1],(err,result) =>{

        console.log("user: "+req.body.user)
        console.log("mail: "+req.body.mail)
        console.log("pass: "+req.body.pass)
        console.log("hashedpass: "+hashedPassword)
        console.log("phone: "+req.body.phone)

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
app.get('/api/SeeLC',(req,res) =>{
    const query = "Select idLeccion,Titulo from leccion where Materia=?";
    db.query(query,req.body.Materia,(err,result) =>{
        console.log("materia: "+req.body.Materia)
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
        "Materia": id de la materia a la que pertenece la leccion,
        "Tipo": Tipo de  contenido 1 es ejercicio 0 es ejercicios,
    }
*/
app.get('/api/ContentLC',(req,res) =>{
    const query = "Select * from leccion where idLeccion= ? and Materia = ? and Tipo = ?";
    db.query(query,req.body.idLeccion,req.body.Materia,req.body.Tipo,(err,result) =>{
        console.log("idLeccion: "+req.body.idLeccion)
        console.log("Materia: "+req.body.Materia)
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
app.get('/api/ProgV',(req,res) =>{
    const query = "select (select (select count(idLeccion) from Progreso where idMateria=? & idUsuario=?) / (select count(idLeccion) from leccion where Materia=?)) * 100";
    db.query(query,req.body.materia,req.body.usuario,req.body.materia,(err,result) =>{
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

app.listen(PORT,()=> console.log("Servidor iniciado escuchando en el puerto: ",PORT))