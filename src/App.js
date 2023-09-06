
import './App.css';
import Listarticles from './componenets/articlesRedux/Listarticles';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import NavScroll from './componenets/navScroll/NavScroll';
import Listscategories from './componenets/scategoriesRedux/Listscategories';

function App() {
  return (
    <div className="App">
    <Router>
      <NavScroll/>
      <Routes>
              <Route path='/' element={<Listarticles/>}/>
              <Route path='/scategories' element={<Listscategories/>}/>
              <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
           


     </Routes>
  </Router>
    </div>
  );
}

export default App;
