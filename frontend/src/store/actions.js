import actions from "./types";

export const addTODO = (value) => ({ type: actions.ADD_TODO,  value });


export const addTask = (task) => async (dispatch) => {
  dispatch(addTODO(task));
};


export const addName = (firstName, lastName) => ({ type: actions.ADD_NAME,  firstName, lastName });

export const logOut = () => ({ type: actions.LOGOUT })

export const addDeal = (client, status) => ({ type: actions.ADD_DEAL, client, status})
