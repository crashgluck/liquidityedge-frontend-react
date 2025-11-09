import { Routes, Route } from 'react-router-dom';
import LoginPage from './features/auth-investor/pages/login/LoginPage.jsx';
import Verify2FAPage from './features/auth-investor/pages/login/Verify2FAPage.jsx';
import ForgotPassword from './features/auth-investor/pages/login/ForgotPassword.jsx';
import CompanyProfileStep1 from './features/auth-investor/pages/register/CompanyProfileStep1.jsx';

// Importa el nuevo componente de flujo
import CompanyProfileFlow from './features/auth-investor/pages/register/CompanyProfileFlow.jsx';
import CompanyProfileStep2 from './features/auth-investor/pages/register/CompanyProfileStep2.jsx';
import CompanyProfileStep3 from './features/auth-investor/pages/register/CompanyProfileStep3.jsx';
import VerifyCompanyEmail from './features/auth-investor/pages/register/VerifyCompanyEmail.jsx';
import CompanyEmailVerified from './features/auth-investor/pages/register/CompanyEmailVerified.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/verify-2-FA" element={<Verify2FAPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/company-profile-step-1" element={<CompanyProfileStep1 />} />
       <Route path="/company-profile-step-2" element={<CompanyProfileStep2 />} />
         <Route path="/company-profile-step-3" element={<CompanyProfileStep3 />} />
      <Route path="/create-account" element={<CompanyProfileStep1 />} />
       <Route path="/verify-company-email" element={<VerifyCompanyEmail />} />
        <Route path="/company-email-verified" element={<CompanyEmailVerified />} />
      
      
      {/*<Route path="*" element={<NotFound />} /> {/* Ruta por defecto si no existe */}
    </Routes>
  );
}

export default App;
