import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
// API CALLS FOR PINS

const dbUrl = firebaseConfig.databaseURL;

// GET PINS
const getBoardPins = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE PIN
const deletePin = (firebaseKey, boardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getBoardPins(boardId).then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

// CREATE PIN
const createPin = (pinObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getBoardPins(pinObject.board_id).then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});

// const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
//     .then(() => getPins(firebase.auth().currentUser.uid)).then((pinsArray) => resolve(pinsArray))
//     .catch((error) => reject(error));
// });

export {
  createPin, deletePin, getBoardPins
};
