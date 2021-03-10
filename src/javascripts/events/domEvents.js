import firebase from 'firebase/app';
import 'firebase/auth';
import { showPins } from '../components/pins';
import addPinForm from '../components/forms/addPinForm';
import {
  createPin, deletePin, updatePin, getSinglePin
} from '../helpers/data/pinData';
import addBoardForm from '../components/forms/addBoardForm';
import { showBoards } from '../components/boards';
import { createBoard, deleteBoard } from '../helpers/data/boardData';
import formModal from '../components/forms/formModal';
import editPinForm from '../components/forms/editPinForm';

const domEvents = (uid) => {
  console.warn(uid);
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A PIN
    if (e.target.id.includes('add-pin-btn')) {
      console.warn('CLICKED ADD PIN BUTTON', e.target.id);
      addPinForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pinTitle: document.querySelector('#title').value,
        pin_img: document.querySelector('#image').value,
        board_id: document.querySelector('#board').value,
        uid: firebase.auth().currentUser.uid
      };

      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // CLICK EVENT FOR EDITING A PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        pinTitle: document.querySelector('#title').value,
        pin_img: document.querySelector('#image').value,
        board_id: document.querySelector('#board').value,
      };
      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }

    // ADD CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
      }
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A BOARD
    if (e.target.id.includes('add-board-btn')) {
      console.warn('CLICKED ADD BOARD BUTTON', e.target.id);
      addBoardForm();
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_img: document.querySelector('#board_img').value,
        boardTitle: document.querySelector('#boardTitle').value,
        uid: firebase.auth().currentUser.uid
      };
      createBoard(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
    }
  // ADD CLICK EVENT FOR EDITING A BOARD
  });
};

export default domEvents;
