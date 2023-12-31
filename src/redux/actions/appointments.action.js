import {   deleteApi, getApi, postApi, putApi,} from "../../api";
import { createAppointmentUrl, deleteAppointmentUrl, getAllAppointmentsUrl, getAppointmentsUrl, updateAppointmentUrl } from "../../constants/networkUrls";
import parseError from "../../utils/parseError";
import { CREATE_APPOINTMENT, DELETE_APPOINTMENT, GET_APPOINTMENTS, UPDATE_APPOINTMENT } from "../types/appointments.types";


export const createAppointmentAction = (details) => async (dispatch) => {
    dispatch({ type: CREATE_APPOINTMENT.REQUEST });
    try {
        const { data } = await postApi(createAppointmentUrl, details);
        dispatch({
            type: CREATE_APPOINTMENT.SUCCESS,
            payload: data.appointment,
        });
        return { success: true };
    } catch (error) {
        dispatch({
            type: CREATE_APPOINTMENT.FAIL,
        });
        return {
            success: false,
            message: parseError(error),
        };
    }
};

export const getAppointmentsAction = (id, type="", params={}) => async (dispatch) => {
    dispatch({ type: GET_APPOINTMENTS.REQUEST });
    try {
        const { data } = await getApi(type==="all"?getAllAppointmentsUrl():getAppointmentsUrl(id), params);
        dispatch({
            type: GET_APPOINTMENTS.SUCCESS,
            payload: data.appointments,
        });
    } catch (error) {
        dispatch({
            type: GET_APPOINTMENTS.FAIL,
            payload: parseError(error),
        });
    }
};

export const updateAppointmentAction = (details, id) => async (dispatch) => {
    dispatch({ type: UPDATE_APPOINTMENT.REQUEST });
    try {
        await putApi(updateAppointmentUrl(id) ,details );
        dispatch({
            type: UPDATE_APPOINTMENT.SUCCESS,
        });
        return { success: true };
    } catch (error) {
        dispatch({
            type: UPDATE_APPOINTMENT.FAIL,
            payload: parseError(error),
        });
        return {
            success: false,
            message: parseError(error),
        };
    }
};

export const deleteAppointmentAction = (id) => async (dispatch) => {
    dispatch({ type: DELETE_APPOINTMENT.REQUEST });
    try {
        await deleteApi(deleteAppointmentUrl(id));
        dispatch({
            type: DELETE_APPOINTMENT.SUCCESS,
        });
        return { success: true };
    } catch (error) {
        dispatch({
            type: DELETE_APPOINTMENT.FAIL,
            payload: parseError(error),
        });
        return {
            success: false,
            message: parseError(error),
        };
    }
};