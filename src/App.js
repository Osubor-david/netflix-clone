
import Home from "./pages/Home";
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
import SharedRoute from "./pages/SharedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from './pages/Signin'
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./componenets/ProtectedRoute";
function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SharedRoute/>}>
        <Route index element={<Home/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/account' element={<ProtectedRoute>
          <Account/>
          </ProtectedRoute>} />
      </Route>
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
  );
}

export default App;
