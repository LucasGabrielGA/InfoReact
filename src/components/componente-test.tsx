import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');

function Compo(){
  return (
    <div>
      <h1 className="hello-title">Hola info!</h1>
      <button>Click me!</button>
    </div>
  );
}

if (!container) {
  throw new Error('Ese elemento no existe');
}

const root = createRoot(container);
root.render(<Compo />);

export default Compo