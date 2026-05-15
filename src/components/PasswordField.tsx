import { useState } from "react";

export default function PasswordField() {
  // Creamos un estado booleano: false significa oculto, true significa visible
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar el estado entre true y false
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="w-full max-w-md m-10 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Campo de Contraseña</h2>
      <div className="relative">
        <input
          // 💡 Aquí está la magia: si showPassword es true, el tipo es "text", si no, es "password"
          type={showPassword ? "text" : "password"}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200"
          placeholder="Contraseña"
        />
        <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors cursor-pointer ${
            showPassword ? "text-orange-500" : "text-gray-500"
            }`}
            >
            {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        </button>
      </div>
    </div>
  );
}