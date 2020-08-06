//import { ADD_TODO, DONE_TODO, DELETE_ALL, DELETE_TODO, WRITE_TODOS, GET_TODO, SEND_UPDATE, SEND_DATA } from "./types";

// export const addNewTodo = (todo) => ({ type: ADD_TODO, payload: todo });
// export const doneTodo = (id) => ({ type: DONE_TODO, payload: id});
// export const deleteSomeTodo = (id) => ({ type: DELETE_TODO, payload: id});
// export const deleteAll = () => ({ type: DELETE_ALL })
// export const writeTodos = (result) => ({ type: WRITE_TODOS, payload: result })
// export const getTodo = (id) => ({ type: GET_TODO, payload: id})
// export const sendUpdate = (todo) => ({ type: SEND_UPDATE, payload: todo})

// export const addTodo = (value) => async (dispatch) => {
  

//   try {
//     const response = await fetch("http://localhost:3003/addtodo", {
//       method: 'POST',
//       body: JSON.stringify({
//         todo: value,
//         status: false,
//         edit: false,
//         visible: true
//       }),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//   }) 
//   const resultId = await response.json();
//   const newTodo = [resultId];
//   console.log(newTodo)
//   dispatch(addNewTodo(newTodo));
//  } catch (err) {
//       console.log("Err", err);
// }}

// export const getTodos = () => async (dispatch) => {
//   try {
//     const response = await fetch("http://localhost:3003/getalltodos");
//     const result = await response.json();
//     dispatch(writeTodos(result))
//  } catch (err) {
//       console.log("Err", err);
// }}

// export const deleteTodo = (id) => async (dispatch) => {
//   dispatch(deleteSomeTodo(id));
//   try {
//     const response = await fetch(`http://localhost:3003/todo/${id}`, {
//     method: 'DELETE',
//   });
//  } catch (err) {
//       console.log("Err", err);
// }}

// export const editTodo = (id) => async (dispatch) => {
//   dispatch(doneTodo(id));
//   try {
//     const response = await fetch(`http://localhost:3003/todo/${id}`, {
//     method: 'PATCH',
//   });
//  } catch (err) {
//       console.log("Err", err);
// }}

// export const editOneTodo = (id) => async (dispatch) => {
//   dispatch(getTodo(id));
//   try {
//     const response = await fetch(`http://localhost:3003/todo/edit/${id}`, {
//     method: 'PATCH',
//   });
// } catch (err) {
//   console.log("Err", err);
// }}

// export const updateTodo = (id, value) => async (dispatch) => {
  

//   try {
//     const response = await fetch(`http://localhost:3003/todo/edit/${id}`, {
//       method: 'POST',
//       body: JSON.stringify({
//         todo: value
//       }),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//   })
//   const edited = await response.json();
//   dispatch(sendUpdate(edited));
//  } catch (err) {
//       console.log("Err", err);
// }}

export const sendSignup = (firstName, lastName, email, password) => async (dispatch) => {
  console.log(firstName, lastName, email, password)
  try {
    const response = await fetch(`http://localhost:3100/signup`, {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  }) 
  //const edited = await response.json();
  } catch (err) {
    console.log("Err", err)
  }
  
}

export const sendLogin = (email, password) => async (dispatch) => {
  console.log(email, password)
  try {
    const response = await fetch(`http://localhost:3100/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  }) 
  //const edited = await response.json();
  } catch (err) {
    console.log("Err", err)
  }
  
}
