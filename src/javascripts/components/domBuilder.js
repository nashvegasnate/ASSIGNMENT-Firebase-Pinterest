const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div class="d-flex flex-wrap justify-content-around" id="base"></div>
  </div>`;
};

export default domBuilder;
