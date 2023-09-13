import { AxiosClient } from "./axiosClient";

export const LoginMail = async (user) => {
    return AxiosClient.post(`http://challenge-react.alkemy.org/`, user)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
}

export const platosBD = async () => {
    return AxiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d7b77e670bee44a4b09219e883eef3f6`)
        .then((response) => {
            return response.data.results;
        }).catch((error) => {
            throw error;
        });
}

export const BuscadorPlatos = async (title) => {
    if(title.length >= 2)
    {
    return AxiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d7b77e670bee44a4b09219e883eef3f6=${title}`)
        .then((response) => {
            return response.data.Search;
        }).catch((error) => {
            throw error;
        });
    }
    else{
        return "no se puede";
    }
}

//d7b77e670bee44a4b09219e883eef3f6
// export const getMoviesById = async (id) => {
//     return AxiosClient.get(`/?apikey=d7b77e670bee44a4b09219e883eef3f6&i=${id}`)
//         .then((response) => {
//             return response.data;
//         }).catch((error) => {
//             throw error;
//         });
// }