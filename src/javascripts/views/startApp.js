// import { emptyBooks, showBooks } from '../components/books';
// import home from '../components/home';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../components/events/domEvents';
import navigationEvents from '../components/events/navigationEvents';
// import { getBooks } from '../helpers/data/bookData';
// import { showAuthors } from '../components/authors';
// import { getAuthors } from '../helpers/data/authorData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // put all books on the DOM
  // getBooks(userObject.uid).then((booksArray) => {
  //   if (booksArray.length) {
  //     showBooks(booksArray);
  //   } else {
  //     emptyBooks();
  //   }
  // });
};

export default startApp;
