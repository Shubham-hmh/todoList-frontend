
//React Admin Dashboard------------------------------------>
import Home from './Dashboard/pages/Home/Home';
import Login from './Dashboard/pages/Login/Login';
import List from './Dashboard/pages/List/List';
import Single from './Dashboard/pages/Single/Single';
import New from './Dashboard/pages/New/New';
import Form from './Dashboard/components/table/Form'
import Edit from './Dashboard/components/table/Edit';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='form' element={<Form />} />
            <Route exact path="edit/:id" element={<Edit/>} />
            <Route path='users' >
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>

            <Route path='products' >
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
              
            </Route>
           
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App

