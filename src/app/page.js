'use client';

import { useEffect, useState } from 'react';

export default function ListaUsuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Llama a la API externa para obtener los usuarios
    fetch('http://localhost:8000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error al obtener los usuarios:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.edad}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #4caf50; /* Verde oscuro */
          color: black; /* Texto blanco */
        }
        td {
          background-color: #f9f9f9; /* Gris claro */
          color: black;
        }
      `}</style>
    </div>
  );
}