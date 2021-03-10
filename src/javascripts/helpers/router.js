import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../components/home';
import loginButton from '../components/buttons/loginButton';
import startApp from '../views/startApp';
import firebaseConfig from './auth/apiKeys';
import logoutButton from '../components/buttons/logoutButton';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
      logoutButton();
    } else {
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
