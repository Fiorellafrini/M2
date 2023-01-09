import {ADD_PERSONAJE, DELETE_PERSONAJE} from './actions_type'

const initialState={
    myFavorites:[],
}

const rootReducer = (state=initialState, actions)=>{
    switch(actions.type){
        case ADD_PERSONAJE:
            return {
                ...state,
                myFavorites:actions.payload
            }
        case DELETE_PERSONAJE:
            return {
                ...state,
                myFavorites:state.myFavorites.filter((personaje)=>{
                    return personaje.id !== actions.payload
                })
            }
        default :
             return{...state}
    }
}
export default rootReducer;