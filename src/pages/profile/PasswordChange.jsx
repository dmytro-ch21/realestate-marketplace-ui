function PasswordChange({
  showPasswordForm,
  onToggle,
  passwordForm,
  handlePasswordChange,
  passwordMessage,
  handlePasswordSubmit,
}) {
  return (
    <>
      <button className="btn btn-outline-secondary" onClick={onToggle}>
        {showPasswordForm ? "Cancel Password Change" : "Change Password"}
      </button>
      {showPasswordForm && (
        <form className="mt-3" onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            className="form-control mb-2"
            name="currentPassword"
            placeholder="Enter Current Password..."
            value={passwordForm.currentPassword}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            className="form-control mb-2"
            name="newPassword"
            placeholder="Enter New Password..."
            value={passwordForm.newPassword}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            className="form-control mb-2"
            name="confirmNewPassword"
            placeholder="Confirm New Password..."
            value={passwordForm.confirmNewPassword}
            onChange={handlePasswordChange}
          />
          <button className="btn btn-primary" type="submit">
            Change Password
          </button>
          {passwordMessage && <div className="mt-2">{passwordMessage}</div>}
        </form>
      )}
    </>
  );
}

export default PasswordChange;
