import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import { showBoards, emptyBoards } from '../components/boards';
import { getBoards } from '../helpers/data/boardData';

const startApp = (userObject) => {
  domBuilder();
  domEvents(userObject.uid);
  navBar();
  getBoards(userObject.uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
