function PropertyDeleteModal({ propToDelete, onConfirm }) {
  console.log('propToDelete', propToDelete)
  console.log('onConfirm', onConfirm)
  return (
    <>
      {/* Delete Modal */}
      <div className="modal fade" id="deleteModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Listing?</h5>
              <button className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              Are you sure you want to delete property with title: <br />
              <strong>{propToDelete?.title}</strong>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={onConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDeleteModal;
