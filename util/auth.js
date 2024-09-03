import axios from "axios";

const API_KEY = "AIzaSyAZRqk7l-Jpfx7RCukEHO1IUnvyLXjlJjI";

async function authenticate(mode, email, password) {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(URL, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
