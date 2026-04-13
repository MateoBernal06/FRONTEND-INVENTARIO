import { Dashboard } from "./pages/Dashboard.jsx";
import { Login } from "./pages/login.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./context/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/admin" roles={['admin']} element={<Dashboard />}>
              <Route path="products" element={<h2>Products Admin</h2>} />
              <Route path="categories" element={<h2>Categories Admin</h2>} />
              <Route path="tables" element={<h2>Tables Admin</h2>} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/user" roles={['user']} element={<Dashboard />}>
              <Route path="products" element={<h2>Products</h2>} />
              <Route path="categories" element={<h2>Categories</h2>} />
              <Route path="tables" element={<h2>Tables</h2>} />
            </Route>
          </Route>
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
