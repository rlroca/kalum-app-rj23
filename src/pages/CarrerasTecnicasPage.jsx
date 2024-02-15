import {  useEffect, useContext } from 'react';
import { CarreraTecnicaList } from '../components/carreras-tecnicas/CarreraTecnicaList';
import { CarreraTecnicaContext } from '../context/carreraTecnicaContext';
import { CarreraTecnicaModalForm } from '../components/carreras-tecnicas/CarreraTecnicaModalForm';

export const CarrerasTecnicasPage = () => {

    const {getCarrerasTecnicas, visibleForm, handlerOpenForm} = useContext(CarreraTecnicaContext);

    useEffect(() => {
        getCarrerasTecnicas();
    },[]);

    return (
        <>
            {!visibleForm || <CarreraTecnicaModalForm/>}
            <div className="container my-4">
                <h2><span className="col-12 badge bg-success">Carreras Tecnicas</span></h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button onClick={handlerOpenForm} className='btn btn-primary my-2'>Nueva Carrera</button>}
                        <CarreraTecnicaList/>
                    </div>
                </div>
            </div>
        </>
    )
}