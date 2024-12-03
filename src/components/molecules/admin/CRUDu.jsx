import React, { useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
  Stack,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2'
export default function CRUDU() {
  const [users, setUsers] = useState([]); // Lista de usuarios
  const [editingUser, setEditingUser] = useState(null); // Usuario en edición
  const [user, setUser] = useState({
    NombreUsuario: '',
    Correo: '',
    Tipo: '',
    Aprendizaje: '',
    Reputacion: '',
  });
  const navigate = useNavigate();

  const servErrorAlert = async (error)=>{
    Swal.fire({
        title: 'Ocurrió un error en el servidor, regresando al inicio.',
        text: `${error}`,
        icon: 'error',
        background: '#811642',
        color: '#f2ffeb',
        timer:3000,
        allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
        timerProgressBar: true,
        didOpen: (popup) => {
            Swal.showLoading();
            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
            popup.style.borderRadius = '15px';  // Mostrar indicador de carga
        },
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            navigate('/')
        }
    })
}
const servSucces = async (error)=>{
    Swal.fire({
        title: 'Modificación realizada',
        text: `Cambios realizados`,
        icon: 'success',
        background: '#811642',
        color: '#f2ffeb',
        timer:3000,
        allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
        timerProgressBar: true,
        didOpen: (popup) => {
            Swal.showLoading();
            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
            popup.style.borderRadius = '15px';  // Mostrar indicador de carga
        },
    })
}
  // Obtener usuarios al cargar el componente
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/SeeUsers');
      const data = await response.json();
      setUsers(data);
     //console.log(data)
    } catch (error) {
        servErrorAlert()
      console.error('Error al obtener usuarios:', error);
    }
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        // Actualizar usuario existente
        console.log(editingUser.idUsuario)
        try{
            await fetch(`/api/UpdateU/${editingUser.idUsuario}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            });
            servSucces()
        }catch(error){
            servErrorAlert(error)
        }   
      } else {
        try{
            // Crear un nuevo usuario
            await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            });
            servSucces()
        }catch(error){
            servErrorAlert(error)   
        }
        
      }
      fetchUsers(); // Refrescar lista
      setUser({ NombreUsuario: '',
        Correo: '',
        Tipo: '',
        Aprendizaje: '',
        Reputacion: ''}); // Limpiar formulario
      setEditingUser(null); // Salir del modo edición
    } catch (error) {
        servErrorAlert()
      console.error('Error al guardar usuario:', error);
    }
  };



  
  const handleDelete = async (id) => {
        Swal.fire({
            title: '¿Seguro que quieres eliminar al usuario?',
            text: 'Presiona en el botón aceptar para continuar.',
            background: '#811642',
            color: '#f2ffeb',
            cancelButtonText: 'Terminar',
            showCancelButton: true,
            confirmButtonColor: '#f2ffeb',
            confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
            allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
            didOpen: (popup) => {
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
            },
        }).then(async (result) =>{
            try{
                    if(result.isConfirmed){
                        await fetch(`/api/DeleteU/${id}`, {
                            method: 'DELETE',
                          });
                           // Refrescar lista
                           fetchUsers();
                          servSucces() 
                    }
                }catch(error){
                    servErrorAlert(error)
                }
        })
        
    
      
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUser(user);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setUser({ NombreUsuario: '',
        Correo: '',
        Tipo: '',
        Aprendizaje: '',
        Reputacion: '',});
  };

  return (
<Container>
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    sx={{ color: 'black' }}
  >
    Administración de Usuarios
  </Typography>

  {/* Formulario */}
  <Box
    component="form"
    onSubmit={handleCreateOrUpdate}
    sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px' }}
  >
    <Stack spacing={2}>
      {/* Campo Nombre */}
      <TextField
        fullWidth
        label="Nombre"
        name="name"
        value={user.NombreUsuario}
        onChange={(e) => setUser({ ...user, NombreUsuario: e.target.value })}
        required
        InputLabelProps={{ style: { color: 'black' } }}
      />

      {/* Campo Email */}
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={user.Correo}
        onChange={(e) => setUser({ ...user, Correo: e.target.value })}
        required
        type="email"
        InputLabelProps={{ style: { color: 'black' } }}
      />

      {/* Campo Tipo */}
      <TextField
        fullWidth
        label="Tipo"
        name="tipo"
        value={user.Tipo}
        onChange={(e) => setUser({ ...user, Tipo: e.target.value })}
        required
        InputLabelProps={{ style: { color: 'black' } }}
      />

      {/* Campo Aprendizaje */}
      <TextField
        fullWidth
        label="Aprendizaje"
        name="aprendizaje"
        value={user.Aprendizaje}
        onChange={(e) => setUser({ ...user, Aprendizaje: e.target.value })}
        required
        InputLabelProps={{ style: { color: 'black' } }}
      />

      {/* Campo Reputación */}
      <TextField
        fullWidth
        label="Reputación"
        name="reputacion"
        value={user.Reputacion}
        onChange={(e) => setUser({ ...user, Reputacion: e.target.value })}
        required
        InputLabelProps={{ style: { color: 'black' } }}
      />

      {/* Botón Crear/Actualizar */}
      <Button
        type="submit"
        variant="contained"
        disabled={!editingUser && (!user.NombreUsuario || !user.Correo)} // Bloquea en modo "Crear"
        fullWidth
        sx={{ backgroundColor: '#800020', color: 'white', '&:hover': { backgroundColor: '#a00030' } }}
      >
        {editingUser ? 'Actualizar' : 'Crear'}
      </Button>

      {/* Botón Cancelar */}
      {editingUser && (
        <Button
          variant="outlined"
          fullWidth
          onClick={handleCancel}
          sx={{ color: '#800020', borderColor: '#800020', '&:hover': { backgroundColor: '#f5e4e9' } }}
        >
          Cancelar
        </Button>
      )}
    </Stack>
  </Box>

  {/* Tabla */}
  <TableContainer component={Paper} sx={{ border: '2px solid #800020', borderRadius: '8px' }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell sx={{ color: 'black', fontWeight: 'bold' }}>Nombre</TableCell>
        <TableCell sx={{ color: 'black', fontWeight: 'bold' }}>Email</TableCell>
        <TableCell sx={{ color: 'black', fontWeight: 'bold' }}>Tipo</TableCell>
        <TableCell sx={{ color: 'black', fontWeight: 'bold' }}>Aprendizaje</TableCell>
        <TableCell sx={{ color: 'black', fontWeight: 'bold' }}>Reputación</TableCell>
        <TableCell sx={{ color: 'black', fontWeight: 'bold' }}>Acciones</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.idUsuario}>
          <TableCell sx={{ color: 'black' }}>{user.NombreUsuario}</TableCell>
          <TableCell sx={{ color: 'black' }}>{user.Correo}</TableCell>
          <TableCell sx={{ color: 'black' }}>{user.Tipo}</TableCell>
          <TableCell sx={{ color: 'black' }}>{user.Aprendizaje}</TableCell>
          <TableCell sx={{ color: 'black' }}>{user.Reputacion}</TableCell>
          <TableCell>
            {/* Botón Editar */}
            <IconButton
              onClick={() => handleEdit(user)}
              sx={{
                color: '#800020',
                '&:hover': {
                  backgroundColor: '#fbe4e9', // Fondo claro al hacer hover
                },
              }}
            >
              <EditIcon />
            </IconButton>
            {/* Botón Eliminar */}
            <IconButton
              onClick={() => handleDelete(user.idUsuario)}
              sx={{
                color: '#a00030',
                '&:hover': {
                  backgroundColor: '#f8d1d9', // Fondo claro al hacer hover
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
<Box sx={{ height: '50px' }} />
</Container>

    );
}