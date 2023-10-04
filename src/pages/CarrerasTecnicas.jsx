import { useEffect, useState } from "react"
import {CarreraTecnicaForm} from "../components/CarreraTecnicaForm"
import {CarreraTecnicaForm} from "../components/CarreraTecnicaList"
import axios from "axios"

export const CarrerasTecnicas = ({CarrerasTecnicas}) => {

    const [carrerasTecnicas,setCarrerasTecnicas] = useState([]);

    useEffect (() => {
        const getCarrerasTecnicas = async() => {
            const {data: result} = await axios.get('http://localhost:9000/kalum-management/v1/carreras-tecnicas');
            setCarrerasTecnicas(result);
        }
        getCarrerasTecnicas();
    },[]);

    return (
        <>
            <div className="container mt-4 my-4">
                <h2><span className="badge bg-success">Carreras Tecnicas</span></h2>
                <div className="row">
                    <div className="col">
                        <CarreraTecnicaForm/>
                    </div>
                    <div className="col">
                        <CarreraTecnicaList carrerasTecnicas = {carrerasTecnicas}/>
                    </div>
                </div>
            </div>
        </>
    )
}