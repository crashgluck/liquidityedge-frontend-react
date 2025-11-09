import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout"; // Asegúrate de que AuthLayout maneje el fondo
import { useNavigate, Link } from 'react-router-dom';

export default function CreateCompanyProfile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // Validaciones básicas
    if (!name || !surname) {
      setError("Por favor, completa tu Nombre y Apellido.");
      return;
    }

    // Aquí podrías guardar estos datos en un estado global o localStorage
    // antes de navegar al siguiente paso del formulario (si "1/3" implica múltiples pasos).
    // Por ahora, simplemente simularemos un éxito y navegaremos.

    try {
      // Simular una operación de guardado o avance (e.g., a la parte 2 del formulario)
      console.log(`Nombre: ${name}, Apellido: ${surname}`);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simular carga
      
      // Redirigir al siguiente paso del proceso de creación de perfil o a otro lugar
      // Por ejemplo, podríamos ir a '/create-company-details' para el paso 2/3
      navigate('/company-profile-step-2'); // Cambia esto a tu ruta del siguiente paso
      
    } catch (err) {
      setError(err.detail || "Error al guardar el perfil inicial.");
    }
  }

  return (
    // AuthLayout debería ser el encargado de renderizar el fondo degradado
    <AuthLayout>
    

      {/* Tarjeta principal con el formulario */}
      <Card className="backdrop-blur-md bg-blue-950/70 text-white p-8 mx-3 border border-white/30 rounded-xl shadow-lg w-96">
        {/* Indicador de progreso */}
        <div className="flex items-center mb-6">
          <div className="flex space-x-2 mr-4">
            <span className="w-8 h-1 bg-white rounded-full"></span>
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
          </div>
          <p className="text-sm text-white/70">1/3</p>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-8 text-start">
          Let's get started by creating your company profile
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Campo Name */}
          <div className="my-4">
            <label htmlFor="name" className="text-start block text-white/80 text-sm mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Placeholder"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Campo Surname */}
          <div className="my-4">
            <label htmlFor="surname" className="text-start block text-white/80 text-sm mb-1">Surname <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Placeholder"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

          {/* Botón Next */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 mt-6 rounded-md hover:bg-blue-800 transition-colors font-semibold"
          >
            Next
          </button>

          {/* Enlace para cuentas existentes */}
          <div className="text-center p-2 mt-6">
            <p className="text-white/70">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">Sign in</Link>
            </p>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}