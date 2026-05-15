import { Button } from "./components/Button";
import Counter from "./components/Counter";
import PasswordField from "./components/PasswordField";

function App() {
  return (
    <div style={{ 
      padding: "40px 20px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", // Esto centra todos los componentes horizontalmente
      gap: "40px", 
      backgroundColor: "#f3f4f6", // Un gris muy claro de fondo
      minHeight: "100vh",
      fontFamily: "system-ui, sans-serif"
    }}>
      
      <h1 style={{ color: "#111827", marginBottom: "10px" }}>Mis Prácticas de React</h1>

      {/* Sección 1: Botones */}
      <section style={sectionStyle}>
        <h3 style={titleStyle}>1. Variantes de Botones (Props)</h3>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary">Normal</Button>
          <Button variant="outline" rounded>Redondeado</Button>
          <Button variant="destructive" rounded>Eliminar</Button>
        </div>
      </section>

      {/* Sección 2: Contador */}
      <section style={sectionStyle}>
        <h3 style={titleStyle}>2. Contador Dinámico (useState)</h3>
        <Counter />
      </section>

      {/* Sección 3: Campo de Contraseña */}
      <section style={sectionStyle}>
        <h3 style={titleStyle}>3. Toggle de Visibilidad (Reto)</h3>
        <PasswordField />
      </section>

    </div>
  );
}

// Estilos rápidos para las "tarjetas" de cada sección
const sectionStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "600px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const titleStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: "600",
  color: "#6b7280",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "20px",
  borderBottom: "1px solid #f3f4f6",
  paddingBottom: "10px"
};

export default App;