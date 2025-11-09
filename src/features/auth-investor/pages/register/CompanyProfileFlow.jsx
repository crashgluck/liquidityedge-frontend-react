import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate } from 'react-router-dom';

// Importa los componentes de cada paso
import CompanyProfileStep1 from './CompanyProfileStep1';
import CompanyProfileStep2 from './CompanyProfileStep2';
// import CompanyProfileStep3 from './CompanyProfileStep3';

export default function CompanyProfileFlow() {
  const [currentStep, setCurrentStep] = useState(2); // Asegúrate de que este estado sea correcto (2 para la imagen)
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  
  // Función para avanzar al siguiente paso
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinalSubmission();
    }
  };

  // Función para retroceder al paso anterior
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Función para actualizar los datos recolectados
  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  // Función de envío final
  const handleFinalSubmission = async () => {
    console.log("Datos finales listos para enviar:", formData);
    try {
      // Lógica de API
      alert("Registro completado. Redirigiendo...");
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Error en el envío final:", error);
    }
  };

  // Renderiza el componente de paso actual
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CompanyProfileStep1 
                 formData={formData} 
                 updateFormData={updateFormData} 
                 nextStep={nextStep} 
                 prevStep={prevStep} 
               />;
      case 2:
        return <CompanyProfileStep2 
                 formData={formData} 
                 updateFormData={updateFormData} 
                 nextStep={nextStep} 
                 prevStep={prevStep} 
               />;
      case 3:
        // return <CompanyProfileStep3 ... />;
        return <p className="text-xl p-8">Paso 3 pendiente.</p>;
      default:
        return null;
    }
  };
  
  // Estilos del indicador de progreso
  const getIndicatorStyle = (step) => ({
    backgroundColor: step <= currentStep ? 'white' : 'rgba(255, 255, 255, 0.3)',
  });
  
  return (
    <AuthLayout>
    
      {/* 🛑 EL BLOQUE DEL LOGO FUE ELIMINADO YA QUE ESTÁ EN AuthLayout 🛑 */}

      {/* Tarjeta principal con el formulario */}
      <Card className="backdrop-blur-md bg-blue-950/70 text-white p-8 mx-3 border border-white/30 rounded-xl shadow-lg w-96">
        
        {/* Indicador de progreso 1/3, 2/3, 3/3 */}
        <div className="flex items-center mb-6">
          <div className="flex space-x-2 mr-4">
            <span className="w-8 h-1 rounded-full" style={getIndicatorStyle(1)}></span>
            <span className="w-8 h-1 rounded-full" style={getIndicatorStyle(2)}></span>
            <span className="w-8 h-1 rounded-full" style={getIndicatorStyle(3)}></span>
          </div>
          <p className="text-sm text-white/70">{currentStep}/3</p>
        </div>

        {/* Título (se mantiene igual para todos los pasos) */}
        <h2 className="text-2xl font-bold mb-8 text-start">
          Let's get started by creating your company profile
        </h2>

        {/* CONTENIDO DINÁMICO DEL PASO */}
        {renderStep()}
        
        {/* Enlace para cuentas existentes */}
        <div className="text-center p-2 mt-6">
          <p className="text-white/70">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">Sign in</Link>
          </p>
        </div>
      </Card>
    </AuthLayout>
  );
}