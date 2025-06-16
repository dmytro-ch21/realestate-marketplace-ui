function ProfileEditForm({form, handleChange, handleOnSave, onCancel}) {
  return (
    <>
      <h2>Editing Mode Activated</h2>
      <div className="mb-2">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control text-muted"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control text-muted"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="first_name" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          className="form-control text-muted"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="last_name" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          className="form-control text-muted"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="phone_pumber" className="form-label">
          Phone Number:
        </label>
        <input
          type="text"
          className="form-control text-muted"
          name="phone_number"
          value={form.phone_number}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="bio" className="form-label">
          Bio:
        </label>
        <textarea
          type="text"
          className="form-control text-muted"
          name="bio"
          value={form.bio}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input
          type="text"
          className="form-control text-muted"
          name="city"
          value={form.city}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="state" className="form-label">
          State:
        </label>
        <input
          type="text"
          className="form-control text-muted"
          name="state"
          value={form.state}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="zip_code" className="form-label">
          Zip Code:
        </label>
        <input
          type="text"
          className="form-control text-muted"
          name="zip_code"
          value={form.zip_code}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-success me-2" onClick={handleOnSave}>
        Save
      </button>
      <button className="btn btn-secondary me-2" onClick={onCancel}>
        Cancel
      </button>
    </>
  );
}

export default ProfileEditForm;
