import { useContext } from "react"
import { CarreraTecnicaRow } from "./CarreraTecnicaRow"
import { CarreraTecnicaContext } from "../../context/carreraTecnicaContext"

export const CarreraTecnicaList = () => {

    const {carrerasTecnicas} = useContext(CarreraTecnicaContext);

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Carrera Tecnica</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    carrerasTecnicas.map(({carreraId,carreraTecnica}, index) => (
                        <CarreraTecnicaRow index = {++index} key={carreraId} carreraId={carreraId} carreraTecnica={carreraTecnica}/>
                    ))
                }
            </tbody>
        </table>
    )
}