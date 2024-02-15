import { useContext } from "react"
import { CarreraTecnicaContext } from "../../context/carreraTecnicaContext";


export const CarreraTecnicaRow = ({carreraId,carreraTecnica,index}) =>{

    const {handlerRemoveCarreraTecnica,handlerCarreraTecnicaSelectedForm} = useContext(CarreraTecnicaContext);
    return (
        <tr>
            <td>{index}</td>
            <td>{carreraTecnica}</td>
            <td><button onClick={() => handlerCarreraTecnicaSelectedForm({carreraId,carreraTecnica})} className="btn btn-primary btn-sm">Update</button></td>
            <td><button onClick={() => handlerRemoveCarreraTecnica(carreraId)} className="btn btn-danger btn-sm">Eliminar</button></td>
        </tr>
    )
}