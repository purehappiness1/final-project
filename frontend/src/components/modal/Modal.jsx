import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask} from '../../store/actions'

const Modal = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ isOpen: false, inputValue: '' });
  const { inputValue } = state;

  const openModal = async () => {
    setState({ isOpen: true });
  };

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setState((currentState) => {
      return {...currentState, [name]: value,}});
  }

  const submitHandler = () => {
    console.log('inputValue', inputValue);
    dispatch(addTask(inputValue));
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>Создать доску</button>
      {state.isOpen && (
        <div style={styles.modal}>
          <div style={styles1.modalBody}>
            <h1>Заполните поля</h1>
              <textarea placeholder="Краткое описание" onChange={onChangeHandler} name="inputValue" value={state.inputValue} /><br/>
              <button onClick = {()=>{submitHandler(); setState({ isOpen: false }) }} >Добавить(закрыть окно)</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

// const initialFormState = {title: '',name: '',phone: '',description: ''};
// const { title, name, phone,description } = state;

// <form>
//   <input placeholder="Заголовок" onChange={onChangeHandler} name="inputValue" value={state.title} /><br/>
//   <input placeholder="ФИО" onChange={onChangeHandler} name="inputValue" value={state.name} /><br/>
//   <input placeholder="Телефон" onChange={onChangeHandler} name="inputValue" value={state.phone} /><br/>
//   <textarea placeholder="Краткое описание" onChange={onChangeHandler} name="inputValue" value={state.description} /><br/>
//   <button onClick = {()=>{submitHandler(); setState({ isOpen: false }) }} >Добавить(закрыть окно)</button>          
// </form>

const styles = {
  modal: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    paddingTop: "5rem",
    zIndex: 1,
  },
};

const styles1 = {
  modalBody: {
    padding: "2rem",
    width: "400px",
    borderRadius: "5px",
    background: "#fff",
    height: "200px",
  },
};

export default Modal;
