import { collection, query, getDocs, updateDoc, doc, addDoc, getDoc, deleteDoc } from "firebase/firestore";

import db from "../../config";
import { OEUVRE_TYPES } from "../types/oeuvre.types";


export const add_oeuvre = (oeuvre) => async dispatch => {
    try {

        dispatch({
            type: OEUVRE_TYPES.ADD_OEUVRE_START,
        });

        
        const docRef = await addDoc(collection(db, "oeuvres"), oeuvre);
        const docSnap = await getDoc(docRef);

        dispatch({
            type: OEUVRE_TYPES.ADD_OEUVRE_SUCCESS,
            payload: docSnap.data(),
        });

    } catch (e) {
        dispatch({
            type: OEUVRE_TYPES.ADD_OEUVRE_FAILURE,
            payload: e.message,
        });
    }
}

export const delete_oeuvre = (oeuvre) => async dispatch => {
    try {

        dispatch({
            type: OEUVRE_TYPES.DELETE_OEUVRE_START,
        });

        const docRef = doc(db, "oeuvres", oeuvre.id);
        await deleteDoc(docRef);

        dispatch({
            type: OEUVRE_TYPES.DELETE_OEUVRE_SUCCESS,
            payload: oeuvre,
        });

    } catch (e) {
        dispatch({
            type: OEUVRE_TYPES.DELETE_OEUVRE_FAILURE,
            payload: e.message,
        });
    }
}

export const modifier_oeuvre = (oeuvre) => async dispatch => {
    try {

        dispatch({
            type: OEUVRE_TYPES.MODIFIER_OEUVRE_START,
        });

        const docRef = doc(db, "oeuvres", oeuvre.id);
        await updateDoc(docRef, oeuvre);

        dispatch({
            type: OEUVRE_TYPES.MODIFIER_OEUVRE_SUCCESS,
            payload: oeuvre,
        });

    } catch (e) {
        dispatch({
            type: OEUVRE_TYPES.MODIFIER_OEUVRE_FAILURE,
            payload: e.message,
        });
    }
}

export const get_oeuvre_by_id = (oeuvre) => async dispatch => {
    try {

        dispatch({
            type: OEUVRE_TYPES.GET_OEUVRE_BY_ID_START,
        });

        const docRef = doc(db, "oeuvres", oeuvre.id);
        const docSnap = await getDoc(docRef);

        dispatch({
            type: OEUVRE_TYPES.GET_OEUVRE_BY_ID_SUCCESS,
            payload: docSnap.data(),
        });

    } catch (e) {
        dispatch({
            type: OEUVRE_TYPES.GET_OEUVRE_BY_ID_FAILURE,
            payload: e.message,
        });
    }
}

export const list_oeuvre = () => async dispatch => {
    try {

        dispatch({
            type: OEUVRE_TYPES.LIST_OEUVRE_START,
        });

        const q = query(collection(db, "oeuvres"));
        const querySnapshot = await getDocs(q);

        const oeuvres = [];
        querySnapshot.forEach((doc) => {
            oeuvres.push({ ...doc.data(), id: doc.id });
        });

        dispatch({
            type: OEUVRE_TYPES.LIST_OEUVRE_SUCCESS,
            payload: oeuvres,
        });

    } catch (e) {
        dispatch({
            type: OEUVRE_TYPES.LIST_OEUVRE_FAILURE,
            payload: e.message,
        });
    }
}

const list_mes_oeuvres = (user) => async dispatch => {
    try {

        dispatch({
            type: OEUVRE_TYPES.LIST_OEUVRE_START,
        });

        const q = query(collection(db, "oeuvres"), where("auteur", "==", user.email));
        const querySnapshot = await getDocs(q);

        const oeuvres = [];
        querySnapshot.forEach((doc) => {
            oeuvres.push({ ...doc.data(), id: doc.id });
        });

        dispatch({
            type: OEUVRE_TYPES.LIST_OEUVRE_SUCCESS,
            payload: oeuvres,
        });

    } catch (e) {
        dispatch({
            type: OEUVRE_TYPES.LIST_OEUVRE_FAILURE,
            payload: e.message,
        });
    }
}


