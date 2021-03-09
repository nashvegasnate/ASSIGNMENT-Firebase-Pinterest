// import { emptyBooks, showBooks } from '../components/books';
// import home from '../components/home';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
// import { getBooks } from '../helpers/data/bookData';
// import { showAuthors } from '../components/authors';
// import { getAuthors } from '../helpers/data/authorData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // put all pins on the DOM
//   getPins(userObject.uid).then((pinssArray) => {
//     if (pinssArray.length) {
//       showPins(pinsArray);
//     } else {
//       emptyPins();
//     }
//   });
// };
};
export default startApp;
