const showBoards = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#base').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#base').innerHTML += `<div class="card">
    <img class="card-img-top" src=${item.board_img} style="height: 300px;">
    <div class="card-body" style="height: 150px;">
    <h5 class="card-title">${item.boardTitle}</h5>
    <hr>
    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="show-pins-btn^^${item.firebaseKey}">Show Pins</button>
    <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#base').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
