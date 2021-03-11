import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-pin-form" class="mb-4">
    <div class="form-group">
      <label for="pinTitle">Pin Title</label>
      <input type="text" class="form-control" id="pinTitle" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.pinTitle}" required>
    </div>
    <div class="form-group">
      <label for="image">Image URL</label>
      <input type="url" class="form-control" id="pin_img" placeholder="Image URL" required value="${pinObject.pin_img}">
    </div>
    <div class="form-group" id="select-board">
    </div>
    <button type="submit" id="update-pin^^${pinObject.firebaseKey}" class="btn btn-success">Update Pin</button>
  </form>`;
  selectBoard(pinObject);
};
export default editPinForm;
