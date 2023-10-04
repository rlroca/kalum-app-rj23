import { CarreraTecnicaRow } from "./CarreraTecnicaRow"

export const CarreraTecnicaList = ({CarrerasTecnicas}) => {
    const CarrerasTecnicas2 = [{codigo:"1",nombre:"carrera"}]
    console.log(CarrerasTecnicas);
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>carrera Tecnica</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    CarrerasTecnicas.map(({codigo,nombre}) => (
                        <CarreraTecnicaRow key={codigo} codigo={codigo} nombre={nombre}/>
                    ))
                }
            </tbody>
        </table>
    )
}