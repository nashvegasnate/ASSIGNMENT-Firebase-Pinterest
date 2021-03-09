const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" width="30" height="30" alt="pinterest logo">PINTEREST
  </a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <div class="navbar-nav">
      <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#" id="boards">Boards</a>
      <a class="nav-link" href="#" id="pins">Pins</a>
    </div>
  </div>
  <div id="login-form-container">
  <div id="logout-button"></div>
  </div>
</nav>`;
};

export default navBar;
