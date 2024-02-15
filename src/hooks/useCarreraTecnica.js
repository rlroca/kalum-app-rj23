import { useReducer, useState } from "react"
import { carrerasTecnicasReducer } from '../reducers/CarrerasTecnicasReducer';
import Swal from 'sweetalert2'
import { findAll, save, remove, update } from '../services/carreraTecnicaService';

const initialCarreraTecnicaForm = {
    carreraId: '',
    carreraTecnica: ''
}

const initialCarrerasTecnicas = []

export const useCarreraTecnica = () => {
    const [carrerasTecnicas, dispatch] = useReducer(carrerasTecnicasReducer, initialCarrerasTecnicas);
    const [carreraTecnicaSelected, setCarreraTecnicaSelected] = useState(initialCarreraTecnicaForm);
    const [visibleForm,setVisibleForm] = useState(false)

    const getCarrerasTecnicas = async() => {
        const response = await findAll();
        dispatch({
            type: 'loadingCarreras',
            payload: response.data
        });
    }

    const handlerAddCarreraTecnica = async(carreraTecnica) => {
        const response = await save(carreraTecnica)

        dispatch({
            type: 'addCarreraTecnica',
            payload: response.data.carreraTecnica
        });
        Swal.fire('Carreras tecnicas',response.data.mensaje,'success');
    }

    const handlerRemoveCarreraTecnica = async (id) => {
        const result = await Swal.fire({
            title:'esta seguro de eliminar el registro',
            text: 'cuidado la carrera tecnica sera eliminada',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#D33',
            confirmButtonText: 'Si, eliminar'
        });
        if (result.isConfirmed){
            const response = await remove(id);
            dispatch({
                type: 'removeCarreraTecnica',
                payload: id
            });
            Swal.fire('registro eliminado', response.data.mensaje);     
        }
        
       }

    const handlerUpdateCarreraTecnica = async(carreraTecnica) => {
        const response = await update(carreraTecnica);
        dispatch({
            type: 'updateCarreraTecnica',
            payload: carreraTecnica
        });
        Swal.fire('Carreras Tecnicas',response.data.mensaje,'success');
    }

    const handlerCarreraTecnicaSelectedForm = (carreraTecnica) => {
        setVisibleForm(true);
        setCarreraTecnicaSelected(carreraTecnica);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setCarreraTecnicaSelected(initialCarreraTecnicaForm)
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    return {
        initialCarreraTecnicaForm,
        handlerAddCarreraTecnica,
        handlerRemoveCarreraTecnica,
        handlerCarreraTecnicaSelectedForm,
        handlerUpdateCarreraTecnica,
        handlerCloseForm,
        handlerOpenForm,
        visibleForm,
        carreraTecnicaSelected,
        carrerasTecnicas,
        getCarrerasTecnicas
    }
}