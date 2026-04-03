import Login from "./pages/login.jsx"
import {AuthContextProvider} from "./context/AuthContext.jsx"

function App() {
  return (
    <AuthContextProvider>
      <Login/>
    </AuthContextProvider>
  )
}

export default App
