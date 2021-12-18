import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children,  ...rest  }) {
  const {user, loading} = useSelector((state) => state.auth);

  let location = useLocation();

  if(loading) return <p>''''''Loading''''''</p>

   if (user?.email) {
    return children;
  } 
  return <Navigate to="/register" state={{ from: location }} />;
}

export default RequireAuth;
