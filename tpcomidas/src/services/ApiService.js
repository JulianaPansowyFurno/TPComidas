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
    return AxiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0231713a9c154313856f7787dd1875fd&query=${title}`)
        .then((response) => {
            return response.data.results;
        })
        .catch((error) => {
            throw error;
        });
    }
    else{
        return false;
    }
}
export const Platos = async (id) => {
    if(title.length > 2){
    return AxiosClient.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=0231713a9c154313856f7787dd1875fd`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
    }
    else{
        return false;
    }
}