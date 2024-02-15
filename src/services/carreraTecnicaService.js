import axios from "axios";

// import kalumApi from "../apis/kalumApi";

const BASE_URL = 'http://localhost:9000/kalum-management/v1';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJhZG1pbiIsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTcwNzMyMDc0MywiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiIyZTZkZmQ1OS0yMzA3LTRjNWEtODQ1OS1jNzYzNTkwNzkwNDkiLCJlbWFpbCI6ImFkbWluQGthbHVtLmVkdS5ndCIsImNsaWVudF9pZCI6ImthbHVtLWFwcCIsIm5vbWJyZXMiOiJhZG1pbiIsImlkZW50aWZpY2F0aW9uSWQiOiIwIn0.kUc1tA8dKy41PnHdsba2ZIhv6E9pT3ycC5s4tXpvUlc"


export const findAll = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/carreras-tecnicas`);
        return response;
    }catch (error) {
        console.log(error);
    }
    return null;
}

export const save = async({carreraTecnica}) => {
    
    let config = {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }

    try{
        return await axios.post(`${BASE_URL}/carreras-tecnicas`,{carreraTecnica},config);
    }catch(error){
        console.log(error);
    }
    return null;
}

export const remove = async(carreraId) => {
    let config = {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }

    try{
        return await axios.delete(`${BASE_URL}/carreras-tecnicas/${carreraId}`, config); 
    }catch(error){
        console.log(error);
    }
    return null;
}

export const update = async({carreraId,carreraTecnica}) => {
    let config = {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }

    try{
        return await axios.put(`${BASE_URL}/carreras-tecnicas/${carreraId}`, {carreraTecnica}, config); 
    }catch(error){
        console.log(error);
    }
    return null;
}