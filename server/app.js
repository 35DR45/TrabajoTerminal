const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

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

//TODO Agregar la BD y modificar los campos
app.get('/',(req,res)=>{
    res.json({status: "INICIO"});
});
//LOGIN DE USUARIO

app.post('/api/Login',(req,res)=>{
    
    const query = "SELECT * FROM usuario WHERE NombreUsuario = ? AND pass = ?;";
    db.query(query,[req.body.user,req.body.password],(err,result) =>{
        console.log("recibido:"+req.body.user);
        console.log("recibido:"+req.body.password); 
        if(err) return res.send("Error al iniciar sesion")
        if(result.length > 0){
            return res.json({status:"Exitoso"})
        }else{
            return res.json({status:"Fallido"})
        }
    })

});

//TOUPDATE PASSWORD RECOVERY
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
//TOUPDATE REGISTRO y CREAR USUARIO

app.post('/api/Register',(req,res) =>{
    console.log("Entro registro")
    const query = "INSERT INTO usuario(NombreUsuario,Correo,pass,Telefono,Tipo,Aprendizaje) values (?,?,?,?,?,?)";
    db.query(query,[req.body.user,req.body.mail,req.body.pass,req.body.phone,/*req.body.type*/1,/*req.body.learning*/1],(err,result) =>{
        console.log(req.body.user)
        console.log(req.body.mail)
        console.log(req.body.pass)
        console.log(req.body.phone)
        if(err){
            console.log("Usuario no creado :"+err)
            return res.send({status:"Error"})
        } 
        else{
            console.log("Usuario creado ") 
            console.log(result) 
            return res.send({status:"Creado"})
        } 
        
    })
});

//TOUPDATE ver usuarios
app.get('/api/SeeUsers',(req,res) =>{
    console.log("Entro ver usuarios")
    const query = "SELECT * FROM usuario";
    db.query(query,(err,result) =>{
        console.log(result)
        if(err){
            console.log("Usuarios no enviados")
            return res.send({status:"No enviados"})
        } 
        else{
            console.log("Usuarios enviados:")
            console.log(result)
            return res.send(retult)
        } 
        
    })
});

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

app.delete('/api/DeleteU',(req,res) =>{
    console.log("Entro borrar usuario")
    const query = "DELETE FROM usuario WHERE idUsuario = ?";
    db.query(query,req.body.idUser,(err,result) =>{
        if(err){
            console.log("Error al eliminar el usuario")
            return res.send({status:"Error"})
        }
        else{ 
            console.log("Usuario Eliminado")
            console.log(result)
            res.send({status:"Eliminado"})

        }
    })
});

//TOUPDATE Actualizar Usuario
app.put('/api/UpdateU',(req,res) =>{
    console.log("Entro en actualizar usuario")
    const query = "UPDATE usuario SET NombreUsuario = ?,Correo = ?,Pass = ?,Telefono = ?,Tipo = ?,Aprendizaje = ? WHERE idUsuario = ?";
    db.query(query,[req.body.user,req.body.mail,req.body.pass,req.body.phone,/*req.body.type*/1/*,req.body.tutor*/,/*req.body.learning*/1,req.body.idUser],(err,result) =>{

        if(err){
            console.log(("Error al actualizar el usuario"))
            return res.send({status:"Error"})
        } 
        else{ 
            console.log("El usuario se ha actualizado")
            console.log(result)
            return res.send({status:"Actualizado"})
        }
    })
});

//TOUPDATE REGISTRO y CREAR USUARIO
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
//TOUPDATE ver lecciones Statistical tools for data analytics
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