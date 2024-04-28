const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extender:true}));
app.use(express.json)

////////TODOO
/*app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true,
}));
*/
const db=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "1234",
    database: "name_db",
});

app.listen(PORT,()=> console.log("Servidor iniciado"))

//TODO Agregar la BD y modificar los campos

//LOGIN DE USUARIO
app.post('/api/Login',(req,res)=>{
    const query = "SELECT * FROM usuario WHERE NombreUsuario = ? AND PassUsuario = ?;";
    db.query(query,[req.body.user,req.body.password],(err,result) =>{
        if(err) return res.send("Error al iniciar sesion")
        if(result.length > 0){
            return res.json({status:"Exitoso"})
        }else{
            return res.json({status:"Fallido"})
        }
    })

});
//TOUPDATE PASSWORD RECOVERY
app.get('/api/Recovery',(req,res)=>{
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

//TOUPDATE REGISTRO y CREAR USUARIO
app.post('/api/Register',(req,res) =>{
    const query = "INSERT INTO usuario(NombreUsuario,Correo,Pass,Telefono,Tipo,Tutor,Aprendizaje) values (?,?,?,?,?,?,?)";
    db.query(query,[req.body.user,req.body.email,req.body.password,req.body.phone,req.body.type,req.body.tutor,req.body.learning],(err,result) =>{
        if(err){
            return res.send("Error al crear usuario")
        } 
        else return res.send("Usuario creado")
        
    })
});

//TOUPDATE ver usuarios
app.get('/api/SeeUsers',(req,res) =>{
    const query = "SELECT * FROM usuario";
    db.query(query,(err,result) =>{
        if(err){
            return res.send("Error al enviar usuarios")
        } 
        else return res.send("Usuarios enviados")
        
    })
});

//TOUPDATE Eliminar Usuario
app.delete('/api/DeleteU',(req,res) =>{
    const query = "DELETE FROM usuario WHERE idUsuario = ?";
    db.query(query,req.body.idUser,(err,result) =>{
        if(err) return res.send("Error al eliminar el usuario")
        else res.send("Eliminado")
    })
});

//TOUPDATE Actualizar Usuario
app.put('/api/UpdateU',(req,res) =>{
    const query = "Update usuario SET NombreUsuario = ?,Correo = ?,Pass = ?,Telefono = ?,Tipo = ?,Tutor = ?,Aprendizaje = ? WHERE NombreUsuario = ?";
    db.query(query,req.body.name,req.body.email,req.body.password,req.body.phone,req.body.type,req.body.tutor,req.body.learning,req.body.PreviousUser,(err,result) =>{
        if(err) return res.send("Error al actualizar el usuario")
        else res.send("Usuario Actualizado")
    })
});

//TOUPDATE REGISTRO y CREAR USUARIO
app.post('/api/CreateL',(req,res) =>{
    const query = "INSERT INTO Leccion(Titulo,Materia,Tipo,Contenido) values (?,?,?,?)";
    db.query(query,[req.body.title,req.body.subject,req.body.type,req.body.content],(err,result) =>{
        if(err){
            return res.send("Error al crear Leccion")
        } 
        else return res.send("Leccion creada")
        
    })
});

//TOUPDATE ver usuarios
app.get('/api/SeeL',(req,res) =>{
    const query = "SELECT * FROM Leccion";
    db.query(query,(err,result) =>{
        if(err){
            return res.send("Error al enviar Lecciones")
        } 
        else return res.send("Lecciones enviadas")
        
    })
});

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

