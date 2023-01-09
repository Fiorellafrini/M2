import {ADD_PERSONAJE, DELETE_PERSONAJE} from './actions_type'


export const addPersonaje = (id) => {
    return {type: ADD_PERSONAJE, payload: id}
}

export const deletePersonaje = (id) => {
    return { type: DELETE_PERSONAJE, payload: id}
}