import Axios from 'axios';
import { exhibihtorsApi, exhibihtorApi } from '../apiConfig';

// Action Types
export const GET_EXHIBITORS_LOADING = 'GET_EXHIBITORS_LOADING';
export const GET_EXHIBITORS = 'GET_EXHIBITORS';
export const GET_EXHIBITORS_SUCCESS = 'GET_EXHIBITORS_SUCCESS';
export const GET_EXHIBITORS_FAILURE = 'GET_EXHIBITORS_FAILURE';

export const DELETE_EXHIBITOR = 'DELETE_EXHIBITOR';
export const DELETE_EXHIBITOR_SUCCESS = 'DELETE_EXHIBITOR_SUCCESS';
export const DELETE_EXHIBITOR_FAILURE = 'DELETE_EXHIBITOR_FAILURE';

//Action Creators
export function getExhibitorsLoading(){
    return {
        type: GET_EXHIBITORS_LOADING
    }
}
export function getExhibitors(){
    const payload = Axios.get(exhibihtorsApi);
    return {
        type: GET_EXHIBITORS,
        payload
    }
}
export function getExhibitorsSuccess(exhibihtors){
    return {
        type: GET_EXHIBITORS_SUCCESS,
        exhibihtors
    }
}
export function getExhibitorsFailure(error){
    return {
        type: GET_EXHIBITORS_FAILURE,
        error
    }
}

export function deleteExhibitor(id){
    const payload = Axios.delete(exhibihtorApi(id))
    return{
        type: DELETE_EXHIBITOR,
        payload
    }
}
export function deleteExhibitorSuccess(id){
    return {
        type: DELETE_EXHIBITOR_SUCCESS,
        id
    }
    
}
export function deleteExhibitorFailure(error){
    return{
        type: DELETE_EXHIBITOR_FAILURE,
        error
    }
}
