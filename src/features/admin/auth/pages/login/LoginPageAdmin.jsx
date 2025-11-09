import { useState } from "react";
import Card from "../../../../../shared/components/Card";
import AdminAuthLayout from "../../../layouts/AdminAuthLayout";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function LoginPageAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  if (!password) {
    setError("The password is required");
    return;
  }

  if (password.length < 6) {
    setError("That password doesn’t seem right. Please try again or reset it.");
    return;
  }

  // Si pasa validaciones, hacer "login"
  try {
    await login(email, password); // tu función mock
    navigate('/admin/verify-2-FA'); 
  } catch (err) {
    setError(err.detail || "Error de autenticación");
  }
}


  async function login(email, password) {
  // Simular un login exitoso después de 500ms
  return new Promise((resolve) => setTimeout(resolve, 500));
  }


  return (
    <AdminAuthLayout>
      <Card >
  
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-8 ">Admin Log in</h1>
        <p>Welcome back! Log in to access your tender opportunities.</p>
        </div>


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
            <label htmlFor="password" className="text-start block">Password*</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full p-2 mb-2 rounded"
            />
            <div className="text-end p-2">
              <p className="cursor-pointer hover:underline"><Link to="/forgot-password">Forgot password?</Link></p>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 mt-2 rounded-xl hover:bg-blue-800 transition-colors"
          >
            Continue
          </button>

          <div className="text-center p-2 my-2">
            <p>
              New here?{" "}
              <Link to="/company-profile-step-1">Create an account</Link>
            </p>
          </div>
        </form>
      </Card>
    </AdminAuthLayout>
  );
}
