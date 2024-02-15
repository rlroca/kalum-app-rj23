import { useContext } from "react";
import { CarreraTecnicaContext } from "../../context/carreraTecnicaContext";
import { CarreraTecnicaForm } from "./CarreraTecnicaForm";

export const CarreraTecnicaModalForm = () => {
    const {carreraTecnicaSelected, handlerCloseForm} = useContext(CarreraTecnicaContext)

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{display: "block"}} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {carreraTecnicaSelected.carreraId.length > 0 ? 'editar':'crear'}
                            </h5>
                        </div>
                        <div className="modal-body">
                            <CarreraTecnicaForm carreraTecnicaSelected = {carreraTecnicaSelected} handlerCloseForm = {handlerCloseForm}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}