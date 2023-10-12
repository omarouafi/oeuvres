import { OEUVRE_TYPES } from "../types/oeuvre.types";


const INITIAL_STATE = {
    oeuvre: null,
    loading: false,
    error: null,
    oeuvres : []
}


const oeuvre_reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OEUVRE_TYPES.ADD_OEUVRE_START:
            return {
                ...state,
                loading: true,
                error: null,
                success:false
            }
        case OEUVRE_TYPES.ADD_OEUVRE_SUCCESS:
            return {
                ...state,
                loading: false,
                oeuvre: action.payload,
                error: null,
                success:true
            }
        case OEUVRE_TYPES.ADD_OEUVRE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success:false
            }
        case OEUVRE_TYPES.DELETE_OEUVRE_START:
            return {
                ...state,
                loading: true,
                error: null,
                success:false

            }
        case OEUVRE_TYPES.DELETE_OEUVRE_SUCCESS:
            return {
                ...state,
                loading: false,
                oeuvre: action.payload,
                error: null,
                success:true
            }
        case OEUVRE_TYPES.DELETE_OEUVRE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success:false
            }
        case OEUVRE_TYPES.MODIFIER_OEUVRE_START:
            return {
                ...state,
                loading: true,
                error: null,
                success:false
            }
        case OEUVRE_TYPES.MODIFIER_OEUVRE_SUCCESS:
            return {
                ...state,
                loading: false,
                oeuvre: action.payload,
                error: null,
                success:true
            }
        case OEUVRE_TYPES.MODIFIER_OEUVRE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success:false
            }
        case OEUVRE_TYPES.GET_OEUVRE_BY_ID_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case OEUVRE_TYPES.GET_OEUVRE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                oeuvre: action.payload,
                error: null
            }
        case OEUVRE_TYPES.GET_OEUVRE_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case OEUVRE_TYPES.LIST_OEUVRE_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case OEUVRE_TYPES.LIST_OEUVRE_SUCCESS:
            return {
                ...state,
                loading: false,
                oeuvres: action.payload,
                error: null
            }
        case OEUVRE_TYPES.LIST_OEUVRE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default oeuvre_reducer;

