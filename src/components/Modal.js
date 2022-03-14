export default function Modal(props) {
  return (
    <div className="modal">
      <h2>Are you sure?</h2>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}
