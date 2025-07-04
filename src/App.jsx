import React from "react";
import Nombres from './components/Nombres'
import Datos from "./components/Datos";
import Estudios from "./components/Estudios";
import Cursos from "./components/Cursos";
import HabilidadesBlandas from "./components/HabilidadesBlandas";
import HabilidadesTecnicas from "./components/HabilidadesTecnicas";
import Contacto from "./components/Contacto";
import './App.css'

function App() {
  return (
    <>
      <div>
        <Nombres/>
        <Datos/>
        <Estudios/>
        <Cursos/>
        <HabilidadesBlandas/>
        <HabilidadesTecnicas/>
        <Contacto/>
      </div>
    </>
  )
}

export default App
