import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CarreraTecnicaList } from './components/CarreraTecnicaList.jsx'

const CarrerasTecnicas = [
  {codigo: 1, nombre: 'programacion con java'},
  {codigo: 2, nombre: 'desarrollo de aplicaciones web'},
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarreraTecnicaList CarrerasTecnicas = {CarrerasTecnicas}/>
  </React.StrictMode>,
)
