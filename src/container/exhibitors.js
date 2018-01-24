import {connect} from 'react-redux';
import {getExhibitorsLoading, getExhibitors, getExhibitorsSuccess, getExhibitorsFailure,
 deleteExhibitor, deleteExhibitorSuccess, deleteExhibitorFailure } from '../actions/exhibitors';
import Exhibitors from '../components/Exhibitors';

const mapStateToProps = function(state){
    console.log("in container", state.exhibihtors.exhibihtors);
    return {
        exhibihtors: state.exhibihtors.exhibihtors,
        loading: state.exhibihtors.loading,
        error: state.exhibihtors.error
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getExhibitors: () =>{
            dispatch(getExhibitorsLoading());
            dispatch(getExhibitors()).then((response) => {
                console.log("in request", response.payload.data)
                if(response.payload.status < 400){
                    dispatch(getExhibitorsSuccess(response.payload.data))
                }else{
                    dispatch(getExhibitorsFailure(response.payload.error))
                }
            });
        },
        deleteExhibitor: (id) =>{
            dispatch(deleteExhibitor()).then((response) => {
                if(response.payload.status < 400){
                    dispatch(deleteExhibitorSuccess(response.payload.data))
                }else{
                    dispatch(deleteExhibitorFailure(response.payload.error))
                }
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exhibitors);