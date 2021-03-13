import { showPins } from '../components/pins';
import addPinForm from '../components/forms/addPinForm';
import {
  createPin, deletePin, getBoardPins, getSinglePin, updatePin
} from '../helpers/data/pinData';
import deleteBoardPins from '../helpers/data/boardPinsData';
import addBoardForm from '../components/forms/addBoardForm';
import { showBoards } from '../components/boards';
import { createBoard, getBoards } from '../helpers/data/boardData';
import formModal from '../components/forms/formModal';
import editPinForm from '../components/forms/editPinForm';

const domEvents = (uid) => {
  // SHOW BOARDS
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('boards-btn')) {
      e.preventDefault();
      // document.querySelector('#form-container').innerHTML = '';
      document.querySelector('#base').innerHTML = '';
      getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    }
    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('^^')[1];
        const boardId = e.target.id.split('^^')[2];
        deletePin(firebaseKey, boardId).then((pinsArray) => showPins(pinsArray));
      }
    }
    // DELETE BOARD and PINS
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete Board and Pins?')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId, uid).then((boardsArray) => showBoards(boardsArray));
        console.warn(boardId);
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A PIN
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        board_id: document.querySelector('#board').value,
        pinTitle: document.querySelector('#title').value,
        pin_img: document.querySelector('#image').value,
        uid,
      };
      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }
    // SHOW PINS
    if (e.target.id.includes('show-pins-btn')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('^^')[1];
      getBoardPins(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }

    // // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('^^')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
      deletePin(firebaseKey);
    }

    // // CLICK EVENT FOR EDITING A PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('^^')[1];
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
    // if (e.target.id.includes('delete-board')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     const firebaseKey = e.target.id.split('--')[1];
    //     deleteBoardPins(firebaseKey).then((boardsArray) => showBoards(boardsArray));
    //   }
    // }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        boardTitle: document.querySelector('#title').value,
        board_img: document.querySelector('#image').value,
        uid,
      };
      createBoard(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
    }
  // ADD CLICK EVENT FOR EDITING A BOARD
  });
};

export default domEvents;
