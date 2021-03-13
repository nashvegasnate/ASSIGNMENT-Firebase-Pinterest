const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#base').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#base').innerHTML += `<div class="card">
    <img class="card-img-top" src=${item.pin_img} alt=${item.pinTitle} style="height: 300px;">
    <div class="card-body" style="height: 200px;">
    <h5 class="card-title">${item.pinTitle}</h5>
    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn^^${item.firebaseKey}">Edit Pin</button>
    <button class="btn btn-danger" id="delete-pin^^${item.firebaseKey}^^${item.board_id}">Delete Pin</button>
    </div>
  </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#base').innerHTML = '<h1>No Items</h1>';
};

export { showPins, emptyPins };
