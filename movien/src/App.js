import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import { AuthContextProvider } from "./Context/AuthContext";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";



function App() {
  return (
    <>
    <AuthContextProvider>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
