import actions from "./types";

export const addTODO = (value) => ({ type: actions.ADD_TODO,  value });


export const addTask = (task) => async (dispatch) => {
  dispatch(addTODO(task));
};

export const sendSignup = (firstName, lastName, email, password) => async (dispatch) => {
  console.log(firstName, lastName, email, password);
  try {
    await fetch(`http://localhost:3100/signup`, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    //const edited = await response.json();
  } catch (err) {
    console.log("Err", err);
  }
};

export const sendLogin = (email, password) => async (dispatch) => {
  console.log(email, password);
  try {
    await fetch(`http://localhost:3100/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    //const edited = await response.json();
  } catch (err) {
    console.log("Err", err);
  }
};
