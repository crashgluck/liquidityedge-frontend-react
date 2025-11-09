import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

export default function Verify2FAPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(null);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) { // Solo permite un dígito
      const newCode = [...code];
      newCode[index] = val;
      setCode(newCode);

      // Mover foco al siguiente input
      if (val && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setError(null);

    const fullCode = code.join("");
    if (fullCode.length < 6) {
      setError("Ingresa los 6 dígitos del código");
      return;
    }

    // Mock de verificación
    setTimeout(() => {
      navigate("/forgot-password");
    }, 500);
  };

  return (
    <AuthLayout>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-white border border-white/20 w-96 text-center mx-auto mt-20">
        <h1 className="text-2xl font-bold mb-4">Verificación de seguridad</h1>
        <p className="mb-4 text-sm">
          Se ha enviado un código a tu correo. Ingresa el código para continuar.
        </p>

        <form onSubmit={handleVerify} className="flex flex-col items-center">
          <div className="flex gap-2 mb-4">
            {code.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                ref={(el) => (inputsRef.current[i] = el)}
                className="w-12 h-12 text-center rounded border border-white/30 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Verificar
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
