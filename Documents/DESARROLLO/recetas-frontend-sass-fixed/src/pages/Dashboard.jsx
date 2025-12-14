import { useEffect, useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/users', {
          headers: {
            Authorization: `Bearer ${user?.token}`
          }
        });
        setUsers(res.data);
      } catch (err) {
        console.error('Error al cargar usuarios:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  return (
    <div className="max-w-2x1 mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Usuarios Registrados</h1>
      
      {loading && <p className="text-gray-600">Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && users.length === 0 &&(
        <p className="text-gray-600">No hay usuarios registrados.</p>
      )}
      
      {!loading && users.length > 0 && (
        <ul className="divide-y divide-gray-200">
          {users.map((u, index) => (
            <li key={index} className="py-2">
              👤 {u.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
