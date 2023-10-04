import { useState } from "react";
import { CarreraTecnicaList } from "./components/CarreraTecnicaList";

const initCarrerasTecnicas = [
    {codigo: '1', nombre: 'programacion con java'},
    {codigo: '2', nombre: 'Desarrollo de aplicaciones web'}
]

export const App = () => {
    const [CarrerasTecnicas,setCarrerasTecnicas] = useState(initCarrerasTecnicas)

    return (
        <>
            <h1>Carreras Tecnicas</h1>
            <CarreraTecnicaList CarrerasTecnicas = {initCarrerasTecnicas}></CarreraTecnicaList>

        </>
    )
}