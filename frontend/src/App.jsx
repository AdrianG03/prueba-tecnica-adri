import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <h1>Prueba Técnica</h1>
      <div style={{ width: 100, height: 100, backgroundColor: color, borderRadius: '50%' }}></div>
      <button onClick={() => setColor('green')}>Verde</button>
      <button onClick={() => setColor('yellow')}>Amarillo</button>
      <button onClick={() => setColor('red')}>Rojo</button>
      <br />
      <button onClick={() => navigate('/alumnos')}>Ir a lista de alumnos</button>
    </div>
  );
}

export default App;