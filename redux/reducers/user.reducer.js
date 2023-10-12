import { USER_TYPES } from "../types/user.types"

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: null,
    users:[],
    success: false
}


const user_reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_TYPES.LOGIN_START:
            return {
                ...state,
                error:null,
                loading: true,
                success: false,
            }
        case USER_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                user: action.payload,
                success: false,
            }
        case USER_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,
            }
        case USER_TYPES.LOGOUT:
            return {
                ...state,
                user: null,
                error:null,
                loading: false,
                success: false,
            }
        case USER_TYPES.REGISTER_START:
            return {
                ...state,
                error:null,
                loading: true,
                success: false,
            }
        case USER_TYPES.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                user: action.payload,
                success: true,
            }
        case USER_TYPES.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,
            }
        case USER_TYPES.MODIFIER_START:
            return {
                ...state,
                error:null,
                loading: true,
                success: false,
            }
        case USER_TYPES.MODIFIER_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                user: action.payload,
                success: true,
            }
        case USER_TYPES.MODIFIER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,
            }
        
        case USER_TYPES.ADMIN_ADD_USER_START:
            return {
                ...state,
                error:null,
                loading: true,
                success: false,
            }
        case USER_TYPES.ADMIN_ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                success: true
            }

        case USER_TYPES.ADMIN_ADD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false
            }
        case USER_TYPES.ADMIN_DELETE_USER_START:
            return {
                ...state,
                loading: true,
                error:null,
                success: false
            }
        
        case USER_TYPES.ADMIN_DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                success: true
            }
        case USER_TYPES.ADMIN_DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false
            }
        case USER_TYPES.ADMIN_MODIFIER_USER_START:
            return {
                ...state,
                loading: true,
                error:null,
                success: false
            }
        case USER_TYPES.ADMIN_MODIFIER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                success: true
            }
        case USER_TYPES.ADMIN_MODIFIER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false
            }
        case USER_TYPES.ADMIN_LIST_USER_START:
            return {
                ...state,
                loading: true,
                error:null,
              
            }
        case USER_TYPES.ADMIN_LIST_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error:null,
            }
        case USER_TYPES.ADMIN_LIST_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                
            }

        case USER_TYPES.GET_USER_START:
            return {
                ...state,
                error:null,
                success: false,
                loading: true
            }
        case USER_TYPES.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                success: true,
                error:null,
            }
        case USER_TYPES.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }            

        case USER_TYPES.RESET_PASSWORD_START
            :
            return {
                ...state,
                error:null,
                success: false,
                loading: true
            }
        case USER_TYPES.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error:null,
            }
        case USER_TYPES.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            

        default:
            return state;
    }
}

export default user_reducer;