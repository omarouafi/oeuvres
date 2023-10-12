import { collection, query, where, getDocs, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

import db from "../../config";
import { USER_TYPES } from "../types/user.types";

export const userLogin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({
      type: USER_TYPES.LOGIN_START,
    });

    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.LOGIN_FAILURE,
        payload: "Utilisateur non trouvé",
      });
      return; 
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    console.log(userData)
    if (userData.password !== password) {
      dispatch({
        type: USER_TYPES.LOGIN_FAILURE,
        payload: "Mot de passe incorrect",
      });
      return; 
    }

    dispatch({
      type: USER_TYPES.LOGIN_SUCCESS,
      payload: userData,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.LOGIN_FAILURE,
      payload: e.message,
    });
  }
};

export const register_user = (user) => async dispatch => {
  try {

    dispatch({
      type: USER_TYPES.REGISTER_START,
    });

    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.REGISTER_FAILURE,
        payload: "Utilisateur déjà existant",
      });
      return;
    }

    await addDoc(collection(db, "users"), user);

    dispatch({
      type: USER_TYPES.REGISTER_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.REGISTER_FAILURE,
      payload: e.message,
    });

  }
}

export const logout_user = () => async dispatch => {
  dispatch({
    type: USER_TYPES.LOGOUT,
  });
}

export const modifier_user = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_TYPES.MODIFIER_START,
    });

    const q = query(collection(db, "users"), where("email", "==", user.old_email));
    console.log(user.id);
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.MODIFIER_FAILURE,
        payload: "Utilisateur non trouvé",
      });
      return;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    await updateDoc(doc(db, "users", userDoc.id), {
      email: user.email,
      password: user.password,
    });

    // update oeuvres if email changed
    if (user.email !== user.old_email) {
      const oeuvres = [];
      const q = query(collection(db, "oeuvres"), where("auteur", "==", user.old_email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        oeuvres.push({ ...doc.data(), id: doc.id });
      });

      for (const oeuvre of oeuvres) {
        await updateDoc(doc(db, "oeuvres", oeuvre.id), {
          auteur: user.email,
        });
      }
    }

    dispatch({
      type: USER_TYPES.MODIFIER_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.MODIFIER_FAILURE,
      payload: e.message,
    });
  }
};


export const admin_add_user = (user) => async dispatch => {
  try {

    dispatch({
      type: USER_TYPES.ADMIN_ADD_USER_START,
    });

    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.ADMIN_ADD_USER_FAILURE,
        payload: "Utilisateur déjà existant",
      });
      return;
    }

    await addDoc(collection(db, "users"), user);

    dispatch({
      type: USER_TYPES.ADMIN_ADD_USER_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.ADMIN_ADD_USER_FAILURE,
      payload: e.message,
    });

  }
}


export const admin_delete_user = (user) => async dispatch => {
  try {

    dispatch({
      type: USER_TYPES.ADMIN_DELETE_USER_START,
    });

    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.ADMIN_DELETE_USER_FAILURE,
        payload: "Utilisateur non trouvé",
      });
      return;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    await deleteDoc(doc(db, "users", userDoc.id));

    dispatch({
      type: USER_TYPES.ADMIN_DELETE_USER_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.ADMIN_DELETE_USER_FAILURE,
      payload: e.message,
    });

  }
}


export const admin_modifier_user = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_TYPES.ADMIN_MODIFIER_USER_START,
    });

    const q = query(collection(db, "users"), where("email", "==", user.old_email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.ADMIN_MODIFIER_USER_FAILURE,
        payload: "Utilisateur non trouvé",
      });
      return;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    await updateDoc(doc(db, "users", userDoc.id), {
      email: user.email,
      password: user.password,
    });

    // update oeuvres if email changed
    if (user.email !== user.old_email) {
      const oeuvres = [];
      const q = query(collection(db, "oeuvres"), where("auteur", "==", user.old_email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        oeuvres.push({ ...doc.data(), id: doc.id });
      });

      for (const oeuvre of oeuvres) {
        await updateDoc(doc(db, "oeuvres", oeuvre.id), {
          auteur: user.email,
        });
      }
    }

    dispatch({
      type: USER_TYPES.ADMIN_MODIFIER_USER_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.ADMIN_MODIFIER_USER_FAILURE,
      payload: e.message,
    });
  }
};


export const admin_list_user = () => async dispatch => {
  try {

    dispatch({
      type: USER_TYPES.ADMIN_LIST_USER_START,
    });

    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    dispatch({
      type: USER_TYPES.ADMIN_LIST_USER_SUCCESS,
      payload: users,
    });

  } catch (e) {
    dispatch({
      type: USER_TYPES.ADMIN_LIST_USER_FAILURE,
      payload: e.message,
    });
  }
}


export const get_user = (user) => async dispatch => {
  try {

    dispatch({
      type: USER_TYPES.GET_USER_START,
    });

    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.GET_USER_FAILURE,
        payload: "Utilisateur non trouvé",
      });
      return;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    dispatch({
      type: USER_TYPES.GET_USER_SUCCESS,
      payload: userData,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.GET_USER_FAILURE,
      payload: e.message,
    });
  }
}

export const reset_password = ({email, password}) => async dispatch => {
  try {

    dispatch({
      type: USER_TYPES.RESET_PASSWORD_START,
    });

    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      dispatch({
        type: USER_TYPES.RESET_PASSWORD_FAILURE,
        payload: "Utilisateur non trouvé",
      });
      return;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    await updateDoc(doc(db, "users", userDoc.id), {
      password: password,
    });

    dispatch({
      type: USER_TYPES.RESET_PASSWORD_SUCCESS,
      payload: userData,
    });
  } catch (e) {
    dispatch({
      type: USER_TYPES.RESET_PASSWORD_FAILURE,
      payload: e.message,
    });
  }
}


