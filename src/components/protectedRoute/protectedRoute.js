import { Navigate } from "react-router";

const isLoggedIn = true;
const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
