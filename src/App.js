
//React Admin Dashboard------------------------------------>
import Home from './Dashboard/pages/Home/Home';

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
            <Route path='form' element={<Form />} />
            <Route exact path="edit/:id" element={<Edit/>} />
        
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App

