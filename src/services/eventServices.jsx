import API from "../config/axiosconfig";

//fama id yaml getpar id mfmch yaml getall automatiquement
export const get = (id) => {
    //on va tester si id est trouvable sinon yekhdhou null
    id = id || ''; 
    return API.get(`events/${id}`)
}
export const add = (body) => {
    return API.post(`events` , body)
}
export const update = (id, body) => {
    return API.put(`events/${id}`, body);
};

export const remove = (id) => {
    return API.delete(`events/${id}`);
};