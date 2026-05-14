import { Button } from "./components/Button";

function App() {
  return (
    <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
      {/* Botón normal */}
      <Button variant="primary">Normal</Button>

      {/* Botón redondeado (Actividad) */}
      <Button variant="outline" rounded>Redondeado</Button>

      {/* Botón redondeado rojo (destructive) */}
      <Button variant="destructive" rounded>Eliminar</Button>
    </div>
  );
}

export default App;