import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { AuthProvider } from "./context/Auth";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import CustomerDetail from "./customer/CustomerDetail";
import Eligible from "./customer/Eligible";
import Rejected from "./customer/Rejected";
import Loanstatus from "./customer/Loanstatus";
import Adminpage from "./admin/Adminpage";
import AdminRoute from "./components/Routes/AdminRoute";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPasssword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/customer/create" element={<PrivateRoute />}>
              <Route path="" element={<CustomerDetail />} />
            </Route>
             <Route path="/eligible" element={<PrivateRoute />}>
              <Route path="" element={<Eligible />} />
            </Route>
             <Route path="/rejected" element={<PrivateRoute />}>
              <Route path="" element={<Rejected />} />
            </Route>
            <Route path="/status" element={<PrivateRoute />}>
              <Route path="" element={<Loanstatus />} />
            </Route> 
            <Route path="/admin" element={<AdminRoute />}>
              <Route path="" element={<Adminpage/>} />
            </Route> 
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
