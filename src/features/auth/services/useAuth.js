import { useNavigate } from "react-router-dom";


export function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  async function login(email, password) {
    // Simulación de llamada a API
    const response = await fakeApiLogin(email, password);
    setUser(response.user);
    navigate("/2fa/verify");
}
}