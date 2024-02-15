import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { CarreraTecnicaContext } from "../../context/carreraTecnicaContext"

export const CarreraTecnicaForm = ({carreraTecnicaSelected, handlerCloseForm}) =>{

    const {
            initialCarreraTecnicaForm, 
            handlerAddCarreraTecnica,
            handlerUpdateCarreraTecnica
        } = useContext(CarreraTecnicaContext);

    const [CarreraTecnicaForm, setCarreraTecnicaForm] = useState(initialCarreraTecnicaForm);
    
    const {carreraId, carreraTecnica} = CarreraTecnicaForm;

    useEffect(() => {setCarreraTecnicaForm(carreraTecnicaSelected)}, [carreraTecnicaSelected]);

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setCarreraTecnicaForm({
            ...CarreraTecnicaForm,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!carreraTecnica){
            Swal.fire('Error de validacion',
            'Debe completar los campos del formulario',
            'error');
            return;
        }

        if(carreraId) {
            handlerUpdateCarreraTecnica({carreraId,carreraTecnica})
        } else{
            handlerAddCarreraTecnica(CarreraTecnicaForm);
        }
        
        setCarreraTecnicaForm(initialCarreraTecnicaForm);
        handlerCloseForm();
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setCarreraTecnicaForm(initialCarreraTecnicaForm);
    }

    return (
        <form onSubmit = {onSubmit}>
            <input className="form-control my-3 w-75" placeholder="Carrera Tecnica" name="carreraTecnica" value={carreraTecnica} onChange={onInputChange}/>
            <button className="btn btn-primary" type="submit">{carreraId.length > 0 ? 'Guardar': 'Crear'}</button>
            <button className='btn btn-primary mx-2' onClick={() => {onCloseForm()}}>Cerrar</button>
        </form>

        // 17 min restantes
    )
}