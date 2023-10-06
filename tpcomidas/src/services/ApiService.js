import { AxiosClient } from "./axiosClient";

export const LoginMail = async (user) => {
    return AxiosClient.post(`http://challenge-react.alkemy.org/`, user)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
}



export const BuscadorPlatos = async (title) => {
    if(title.length > 2){
    return AxiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f61ddc17364547588d946dc37df29d43&query=${title}`)
        .then((response) => {
            return response.data.results;
        })
        .catch((error) => {
            return false;
            
        });
    }
    else{
        return 2;
    }
}
export const Platos = async (id) => {
    return AxiosClient.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f61ddc17364547588d946dc37df29d43`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}