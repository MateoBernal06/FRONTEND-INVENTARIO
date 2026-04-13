import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const loginUser = async (user) => {
    try {
      const response = await fetch(
        "https://backend-inventario-six.vercel.app/api/v1/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        },
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return data
      
    } catch (error) {
      console.log(error);
    }
  };
  
  const login = async(user) => {
    const session = await loginUser(user);
    if(session.data.role === 'admin'){
      setUser(session)
      navigate('/dashboard/admin', {
        replace: true
      })
    }
    else{
      setUser(session);
      navigate("/dashboard/user",{
        replace: true
      });
    }
  };

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
