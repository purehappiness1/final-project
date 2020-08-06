

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
