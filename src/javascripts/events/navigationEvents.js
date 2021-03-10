import { emptyBoards, showBoards } from '../components/boards';
// import signOut from '../helpers/auth/signOut';
import { getBoards } from '../helpers/data/boardData';

const navigationEvents = (uid) => {
  console.warn(uid);
  // LOGOUT BUTTON
  // document.querySelector('#logoutButton').addEventListener('click', signOut);

  document.querySelector('#boards').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents;
