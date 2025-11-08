import { Routes, Route } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage.jsx';
import Verify2FAPage from './features/auth/pages/Verify2FAPage.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/verify-2-FA" element={<Verify2FAPage />} />
      {/*<Route path="*" element={<NotFound />} /> {/* Ruta por defecto si no existe */}
    </Routes>
  );
}

export default App;
