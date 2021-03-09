import home from '../components/home';
// import { emptyPins, showPins } from '../components/pins';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
// import { getPins } from '../helpers/data/pinData';
import { showBoards, emptyBoards } from '../components/boards';
import { getBoards } from '../helpers/data/boardData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT

  home();
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
