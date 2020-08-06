import actions from "./types";

export const addTODO = (value) => ({ type: actions.ADD_TODO,  value });


export const addTask = (task) => async (dispatch) => {
  dispatch(addTODO(task));
};


