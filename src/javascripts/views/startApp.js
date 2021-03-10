// import home from '../components/home';
// import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
// import navigationEvents from '../events/navigationEvents';
import { showBoards, emptyBoards } from '../components/boards';
import { getBoards } from '../helpers/data/boardData';

const startApp = (userObject) => {
  domBuilder();
  navBar();
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  // navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // logoutButton();
  // home();
  // put all boards on the DOM
  getBoards(userObject.uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
