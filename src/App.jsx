import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './componentes/Titulo'
import Clientes from './componentes/Clientes'
import Sobre from './componentes/Sobre'
import Principal from './componentes/Principal'
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap"

import {BrowserRouter,Routes,Link,Route} from "react-router-dom"
import './App.css'

function App() {
  return(
    <div>
      <h1>Montando primeira aplicação com menu</h1>
      <BrowserRouter>
      <Nav variant = "tabs">
        <Nav.Item>
          <Nav.Link as = { Link } to = "/Principal">Página Principal</Nav.Link>
          <Nav.Link as = { Link } to = "/Clientes">Clientes</Nav.Link>
          <Nav.Link as = { Link } to = "/Sobre">Sobre</Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path = "/Principal" element = { <Principal /> }></Route>
        <Route path = "/Clientes" element = { <Clientes /> }></Route>
        <Route path = "/Sobre" element = { <Sobre /> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App