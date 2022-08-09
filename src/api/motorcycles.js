import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllMotorcycles = () => {
    return axios(`${apiUrl}/motorcycles`)
}

// READ => SHOW
export const getOneMotorcycle = (id) => {
    return axios(`${apiUrl}/motorcycles/${id}`)
}

// CREATE
export const createMotorcycle = (user, newMotorcycle) => {

    return axios({
        url: apiUrl + '/motorcycles',
        method: 'POST',

        data: { motorcycle: newMotorcycle }
    })
}

// UPDATE
export const updateMotorcycle = (user, updatedMotorcycle) => {

    return axios({
        url: `${apiUrl}/motorcycles/${updatedMotorcycle.id}`,
        method: 'PATCH',

        data: { motorcycle: updatedMotorcycle }
    })
}

// DELETE
export const removeMotorcycle = (user, motorcycleId) => {
    return axios({
        url: `${apiUrl}/motorcycles/${motorcycleId}`,
        method: 'DELETE',

    })
}