import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './componentes/Titulo'
import Clientes from './componentes/Clientes'
import Sobre from './componentes/Sobre'
import Principal from './componentes/Principal'

import {BrowserRouter,Routes,Link,Route} from "react-router-dom"
import './App.css'

function App() {

  //return <Titulo data = "07/10/2024" />
  /*
  const clientes = [
    {
      idClie: 1,
      nomeClie: "Gabi",
      emailClie: "gabi@gmail.com",
      dataNiverClie: "07/04/2004",
    },
    {
      idClie: 3,
      nomeClie: "Igor",
      emailClie: "igor@gmail.com",
      dataNiverClie: "26/11/1998",
    },
    {
      idClie: 3,
      nomeClie: "Theo",
      emailClie: "theo@gmail.com",
      dataNiverClie: "26/06/2019",
    }
  ]
  // exibindo dados como o map
  return(
    <div>
      {
         clientes.map((cliente, indice) => 
         (
            <div> {cliente.nomeClie} - {cliente.emailClie} - {cliente.dataNiverClie}</div>
         )
         )
      }
    </div>
  )
  */

  return(
    <div>
      <h1>Montando primeira aplicação com menu</h1>
      <BrowserRouter>
        <ul>
          <li><Link to = { "/Principal" }>Página Principal</Link></li>
          <li>Clientes</li>
          <li>Sobre</li>
        </ul>
      </BrowserRouter>
    </div>
  )

}

export default App