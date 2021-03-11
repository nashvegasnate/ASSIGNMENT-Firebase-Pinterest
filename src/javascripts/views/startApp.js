import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import { showBoards } from '../components/boards';
import { getBoards } from '../helpers/data/boardData';

const startApp = (userObject) => {
  domBuilder();
  navBar();
  domEvents(userObject.uid);
  getBoards(userObject.uid).then((boardsArray) => showBoards(boardsArray));
};

export default startApp;
