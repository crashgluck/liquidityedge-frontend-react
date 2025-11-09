import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout"; 
import { useNavigate } from 'react-router-dom';

export default function CompanyProfileStep2() {
  const navigate = useNavigate();

  // Estado de los campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  // Función para ir al paso anterior
  const prevStep = () => {
    navigate("/company-profile-step-1"); // Ajusta la ruta del paso 1
  };

  // Función para manejar submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validaciones
    if (!name || !email) {
      setError("Por favor, completa tu Nombre y Email de la organización.");
      return;
    }

    // Validar formato de email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("El email no es válido");
      return;
    }

    try {
      // Simular guardado
      console.log(`Nombre: ${name}, Email: ${email}`);
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Navegar al siguiente paso
      navigate("/company-profile-step-3"); // Ajusta a tu ruta del paso 3
    } catch (err) {
      setError("Error al guardar el perfil inicial.");
    }
  };

  return (
    <AuthLayout>
      <Card className="backdrop-blur-md bg-blue-950/70 text-white p-8 mx-3 border border-white/30 rounded-xl shadow-lg w-96">
        
        {/* Indicador de progreso */}
        <div className="flex items-center mb-6">
          <div className="flex space-x-2 mr-4">
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
            <span className="w-8 h-1 bg-white rounded-full"></span>
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
          </div>
          <p className="text-sm text-white/70">2/3</p>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-8 text-start">
          Let's get started by creating your company profile
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="my-4">
            <label htmlFor="org-name" className="text-start block text-white/80 text-sm mb-1">
              Name of your organisation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="org-name"
              placeholder="Placeholder"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="my-4">
            <label htmlFor="org-email" className="text-start block text-white/80 text-sm mb-1">
              Organisation Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="org-email"
              placeholder="Placeholder"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

          {/* Botones de navegación */}
          <div className="flex justify-between space-x-4 mt-8">
            <button
              type="button"
              onClick={prevStep}
              className="w-1/2 bg-blue-800/50 text-white p-3 rounded-md hover:bg-blue-800 transition-colors font-semibold"
            >
              Previous
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800 transition-colors font-semibold"
            >
              Next
            </button>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}
