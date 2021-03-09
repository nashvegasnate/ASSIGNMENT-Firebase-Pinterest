const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="base"></div>
  </div>`;
};

export default domBuilder;
