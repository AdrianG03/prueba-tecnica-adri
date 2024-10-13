import { useQuery } from '@tanstack/react-query';

function fetchAlumnos() {
  return fetch('/api/alumnos').then((res) => {
    if (!res.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    return res.json();
  });
}

function ListaAlumnos() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['alumnos'],
    queryFn: fetchAlumnos,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {data.map((alumno) => (
          <li key={alumno.id}>
            {alumno.nombre} {alumno.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAlumnos;