import axios from "axios";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const postOptions = (body) => ({
  method: "POST",
  headers: myHeaders,
  credentials: "include",
  redirect: "follow",
  body: JSON.stringify(body),
});

/* Session Routes */
export function login(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`api/session`, data, {
        withCredentials: true,
      });
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
export function logout() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`api/session`, {
        withCredentials: true,
      });
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

/* User */
export function register(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`api/user`, data, {
        withCredentials: true,
      });
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
export function passwordResetToken(params = {}) {
  console.log(params);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/user/passwordReset`,
        {
          params: params,
          withCredentials: true,
        }
      );
      const result = await response.data;
      console.log(result);
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
export function passwordReset(data) {
  console.log(data);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/user/passwordReset`,
        data
      );
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
export function getUsers() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/user`, {
        withCredentials: true,
      });
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
