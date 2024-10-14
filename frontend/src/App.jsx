import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [color, setColor] = useState('gray');
  const navigate = useNavigate();

  return (
    <div style={{width: screen, textAlign: 'center', padding: 5}}>
      <h1>Prueba Técnica</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ width: 200, height: 200, backgroundColor: color, borderRadius: '50%'}}></div>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setColor('green')}>Verde</button>
        <button onClick={() => setColor('yellow')}>Amarillo</button>
        <button onClick={() => setColor('red')}>Rojo</button>
      </div>
      
      <br />
      <button onClick={() => navigate('/alumnos')}>Ir a lista de alumnos</button>
    </div>
  );
}

export default App;