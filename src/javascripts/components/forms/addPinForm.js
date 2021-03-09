import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#base').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form id="submit-pin-form" class="mb-4">
    <div class="form-group">
      <label for="pinTitle">Pin Title</label>
      <input type="text" class="form-control" id="PinTitle" aria-describedby="pinTitle" placeholder="Enter Pin Title" required>
    </div>
    <div class="form-group">
      <label for="pin_img">Image URL</label>
      <input type="url" class="form-control" id="pin_img" placeholder="Image URL" required>
    </div>
    <div class="form-group" id="select-board">
    </div>
    <button type="submit" id="submit-pin" class="btn btn-primary">Submit Pin</button>
  </form>`;

  selectBoard();
};
export default addPinForm;
