import { GET_EXHIBITORS_LOADING, GET_EXHIBITORS_SUCCESS, GET_EXHIBITORS_FAILURE,
 DELETE_EXHIBITOR_SUCCESS, DELETE_EXHIBITOR_FAILURE} from '../actions/exhibitors';

const INITIAL_STATE = {
    exhibihtors: [],
    loading: false,
    error: null
}

export default function(currentState = INITIAL_STATE, action){
    switch (action.type) {
        case GET_EXHIBITORS_LOADING:
            return { ...currentState, loading: true }
        break;
        case GET_EXHIBITORS_SUCCESS:
            var newex = action.exhibihtors;
            console.log("in reducer", newex);
            return {...currentState, exhibihtors: newex, loading: false };

        break;
        case GET_EXHIBITORS_FAILURE:
            return { ...currentState, error: action.error, loading: false }
        break;

        case DELETE_EXHIBITOR_SUCCESS:
            var newExhibitors = currentState.exhibihtors.filter(exhibitor => {
                return exhibitor.id !== action.id
            })
            return {...currentState, exhibihtors: newExhibitors}
        break;
        case DELETE_EXHIBITOR_FAILURE:
            return{ ...currentState, error: action.error }
        break;
        default:
            return currentState;
    }
}
