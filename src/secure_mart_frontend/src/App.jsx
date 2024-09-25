import { AuthProvider, useAuth } from './use-auth-client';
import Login from "./pages/auth/login"
import UserDashboard from "./dashboards/UserDashboard"

function App() {
  const { isAuthenticated} = useAuth()
  return (
    <main>
      {isAuthenticated ? <UserDashboard/> :  <Login/>}
    </main>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);;
