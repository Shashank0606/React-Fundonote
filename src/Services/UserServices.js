import axios from "axios";

const baseUrl = "http://localhost:9090/api/v1/";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

// User Registration
export const registerUser = async (data) => {
  return axios.post(baseUrl + "users/", data);
  // let response = await axios.get(baseUrl + "users");
  // return response
};

// Login
export const logIn = async (data) => {
  return axios.post(baseUrl + "users/login", data);
};

// get all note
export const getNotes = async () => {
  return axios.get(baseUrl + "notes", headerConfig);
};

// get all Trash note
export const getTrashedNotes = async () => {
  return axios.get(baseUrl + "notes/trash", headerConfig);
};

// get all from Archive
export const getArchiveNotes = async () => {
  return axios.get(baseUrl + "notes/archive", headerConfig);
};

// send to TRASH
export const sendToTrash = async (id) => {
  return axios.get(baseUrl + `notes/${id}/trash`, headerConfig);
};

// send to Archive
export const sendToArchive = async (id) => {
  return axios.get(baseUrl + `notes/${id}/archive`, headerConfig);
};


// Create note
export const postNotes = async (obj) => {
  let response = await axios.post(baseUrl + "notes", obj, headerConfig);
  console.log(response);
  return response.data.data;
};


// color Updatating
export const updateColor = async (obj, id) => {
  let response = await axios.put(`${baseUrl}/notes/${id}`, obj, headerConfig);
  console.log(response);
  return response.data.data;
};
