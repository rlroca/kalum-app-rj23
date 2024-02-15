import { useCarreraTecnica } from "./hooks/useCarreraTecnica"
import { CarrerasTecnicasPage } from "./pages/CarrerasTecnicasPage"
import { CarreraTecnicaProvider } from "./context/carreraTecnicaProvider";


export const  App = () => {
    const {initialCarreraTecnicaForm, handlerAddCarreraTecnica, carrerasTecnicas} = useCarreraTecnica();

    return (
        <> <CarreraTecnicaProvider>
            <CarrerasTecnicasPage carrerasTecnicas = {carrerasTecnicas} handlerAddCarreraTecnica = {handlerAddCarreraTecnica} initialCarreraTecnicaForm = {initialCarreraTecnicaForm}/>
           </CarreraTecnicaProvider>
        </>
    )
}