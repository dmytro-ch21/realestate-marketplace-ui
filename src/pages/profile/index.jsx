import { useState } from "react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import "./Profile.css";
import ProfileEditForm from "./ProfileEditForm";
import ProfileDisplay from "./ProfileDisplay";
import PasswordChange from "./PasswordChange";
import PropertyDeleteModal from "./PropertyDeleteModal";
import PropertyListings from "./PropertyListings";
import PropertyModal from "./PropertyModal";

function Profile() {
  // STATE ACCESS
  const { store } = useGlobalStore();
  // COMPONENT STATE
  const [editMode, setEditMode] = useState(false);

  // PROFILE DATA
  const [profile, setProfile] = useState({
    ...store.user_information,
    ...store.user_information.profile_information,
  });

  // FORM DATA
  const [form, setForm] = useState({
    email: profile.email,
    username: profile.username,
    avatar_url: profile.avatar_url,
    bio: profile.bio,
    city: profile.city,
    first_name: profile.first_name,
    last_name: profile.last_name,
    phone_number: profile.phone_number,
    state: profile.state,
    zip_code: profile.zip_code,
  });

  // HANDLERS
  // onChange
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //onSave
  const handleOnSave = (e) => {
    setProfile({
      ...profile,
      email: form.email,
      username: form.username,
      avatar_url: form.avatar_url,
      bio: form.bio,
      city: form.city,
      first_name: form.first_name,
      last_name: form.last_name,
      phone_number: form.phone_number,
      state: form.state,
      zip_code: form.zip_code,
    });
    setEditMode(false);
  };

  // PASSWORD STATE AND HANDLERS
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [passwordMessage, setPasswordMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("password form: ", passwordForm);
    if (!passwordForm.currentPassword || !passwordForm.newPassword) {
      console.log(
        "Checking if current password is entered: ",
        passwordForm.currentPassword
      );
      console.log(
        "Checking if new password is entered: ",
        passwordForm.newPassword
      );
      setPasswordMessage("Please fill all the password fields.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      setPasswordMessage("New Passwords do not match");
      return;
    }

    setPasswordMessage("Password Successfully Changed!");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setShowPasswordForm(false);
  };

  // Properies Listings
  const [ownedProperties, setOwnedProperties] = useState(
    store.user_information.owned_listings
  );

  const [propToDelete, setPropToDelete] = useState(null);

  const openDeleteModal = (property) => {
    setPropToDelete(property);
  };

  const confirmDelete = () => {
    setOwnedProperties((prev) => prev.filter((p) => p.id !== propToDelete.id));
    setPropToDelete(null);
  };

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="container py-4">
      {editMode ? (
        <ProfileEditForm
          form={form}
          handleChange={handleChange}
          handleOnSave={handleOnSave}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <>
          <ProfileDisplay profile={profile} onEdit={() => setEditMode(true)} />
          <PasswordChange
            passwordForm={passwordForm}
            onToggle={() => setShowPasswordForm(!showPasswordForm)}
            showPasswordForm={showPasswordForm}
            handlePasswordChange={handlePasswordChange}
            passwordMessage={passwordMessage}
            handlePasswordSubmit={handlePasswordSubmit}
          />
        </>
      )}
      <PropertyListings
        ownedProperties={ownedProperties}
        onDelete={openDeleteModal}
        onAdd={() => setShowAddModal(true)}
      />
      <PropertyDeleteModal
        propToDelete={propToDelete}
        onConfirm={confirmDelete}
      />
      {showAddModal && (
        <PropertyModal
          setShowAddModal={setShowAddModal}
          profile={profile}
          setProfile={setProfile}
          setOwnedProperties={setOwnedProperties}
        />
      )}
    </div>
  );
}

export default Profile;
