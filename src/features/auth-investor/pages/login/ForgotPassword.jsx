import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
  


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();


  async function handleSubmit(e) {
  e.preventDefault();
  setError(null); // Resetear errores anteriores

  // Validaciones básicas
  if (!email) {
    setError("Oops! We only accept work email addresses (like yourname@company.com).");
    return;
  }

  // Validar formato de email simplec
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Not a valid email format");
    return;
  }


  // Si pasa validaciones, hacer "login"
  try {
    await login(email); // tu función mock
    navigate('/verify-2-FA'); 
  } catch (err) {
    setError(err.detail || "Error de autenticación");
  }
}


  async function login(email) {
  // Simular un login exitoso después de 500ms
  return new Promise((resolve) => setTimeout(resolve, 500));
  }


  return (
    <AuthLayout>
      <Card >
        <h1 className="text-2xl font-bold mb-8 text-center">Forgot your password?</h1>

        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="email" className="text-start block">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full p-2 mb-2 rounded"
            />
          </div>

          <div>
  
   
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 mt-2 rounded-xl hover:bg-blue-800 transition-colors"
          >
            Send me a reset link
          </button>

          <div className="text-center p-2 my-2">
            <p>
              New here?{" "}
             <Link to="/create-account">Create an account</Link>
        
            </p>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}
