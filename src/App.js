
import './App.css';
import Listarticles from './componenets/articlesRedux/Listarticles';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import NavScroll from './componenets/navScroll/NavScroll';
import Listscategories from './componenets/scategoriesRedux/Listscategories';
import StripePayment from './componenets/articlesRedux/StripePayment';
import Cart from './componenets/articlesRedux/Cart';
import Logout from "./admin/components/Logout"
import Register from "./admin/components/Register"
import Login from "./admin/components/Login"
import { useSelector } from "react-redux";

import ProtectedRoutes from './admin/components/ProtectedRoute';
import Createarticle from './admin/components/articles/Createarticle';
import  Dashboard  from './admin/Dashboard';
import ForgotPassword from './admin/ForgotPassword';
import ResetPassword from './admin/ResetPassword';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@mui/material';

function App() {
 
  return (
    <>
  
    <ToastContainer/>
    
    
    <Router>
    <NavScroll/>
      <Routes>
      
          <Route path='/articles' element={<Listarticles/>}/>
          <Route path='/scategories' element={<Listscategories/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/> 
      
          <Route element={<ProtectedRoutes/>}>
          <Route path="/articles/add" element={<Listarticles/>}/>
          <Route path="/article/edit/:id" element={<Createarticle/>}/>  
          
          <Route path="/scategories/add" element={<Listscategories/>}/>
          <Route path="/scategories/edit/:id" element={<Listscategories/>}/> 
          <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='pay/:total' element={<StripePayment/>}/>

      </Route>          
         
          <Route path="/menu"  element={<Menu open={true}/>}/>  
                 
                     
          <Route path="*" element={<p>Page Not Found: 404!</p>} />
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/register' element={<Register/>}/>  
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>
     </Routes>

     </Router>
  
  </>
  );
}

export default App;
