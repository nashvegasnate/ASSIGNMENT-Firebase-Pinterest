const showBoards = (array) => {
  document.querySelector('#add-board-btn').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#base').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#base').innerHTML += `<div class="card">
    <img class="card-img-top" src=${item.board_img} style="height: 400px;">
    <div class="card-body" style="height: 180px;">
    <h5 class="card-title">${item.boardTitle}</h5>
    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-board-btn--${item.firebaseKey}">Edit Board</button>
    <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
    document.querySelector('#base').innerHTML += `${item}`;
  });
};

const emptyBoards = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#base').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
