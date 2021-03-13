const boardInfo = (boardObject) => {
  document.querySelector('#add-button').innerHTML += `<h1 class="text-white">${boardObject.boardTitle}</h1>`;
};

export default boardInfo;
