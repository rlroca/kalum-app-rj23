// import { useEffect, useState } from "react"
// import { JornadasForm } from "../components/Jornadas/JornadasForm"
// import { CarreraTecnicaList } from "../components/Jornadas/JornadasList"
// import axios, { Axios } from "axios"

// export const Jornadas = () => {

//     const [Jornadas,setJornadas] = useState([]);

//     useEffect(() => {
//         const getJornadas = async() => {
//             const {data: result} = await axios.get('http://localhost:9000/kalum-management/v1/carreras-tecnicas');
//             setJornadas(result);
//         }
//         getJornadas();
//     },[]);

//     return (
//         <>
//             <div className="container mt-4 my-4">
//                 <h2><span className="badge bg-success">Jornadas</span></h2>
//                 <div className="row">
//                     <div className="col">
//                         <JornadasForm/>
//                     </div>
//                     <div className="col">
//                         <JornadasList carrerasTecnicas={Jornadas}/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }