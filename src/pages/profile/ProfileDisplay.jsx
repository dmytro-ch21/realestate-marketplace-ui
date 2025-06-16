function ProfileDisplay({profile, onEdit}) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bolder">Profile Page</h2>
        <div>
          <button
            className="btn btn-primary me-2"
            onClick={onEdit}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <img
              src={profile.avatar_url}
              alt="Avatar"
              className="avatar-image"
            />
            <div>
              <p className="mb-1">
                <strong>
                  {profile.first_name} {profile.last_name}
                </strong>
              </p>
              <p className="mb-0 text-muted">{profile.email}</p>
            </div>
          </div>
          <p>
            <strong>Username: </strong> {profile.username}
          </p>
          <p>
            <strong>Phone Number: </strong> {profile.phone_number}
          </p>
          <p>
            <strong>Bio: </strong> {profile.bio}
          </p>
          <p>
            <strong>City: </strong> {profile.city}
          </p>
          <p>
            <strong>State: </strong> {profile.state}
          </p>
          <p>
            <strong>Zip Code: </strong> {profile.zip_code}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDisplay;
