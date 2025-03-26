import React from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import { useState } from "react";

const Settings = () => {

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    profilePicture: null,
  });

  const [account, setAccount] = useState({
    username: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    const { name, value, files } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", profile);
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    console.log("Account Data:", account);
  };

  return (
    <>

<Header />
<Sidebar/>
    <main id="content" role="main" className="main">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <h1 className="page-header-title text-dark">Settings</h1>
            </div>
          </div>
        </div>

        <div className="row chat-sec align-items-center">
          <div className="col-lg-6 mt-4">
            <h3>Profile Settings</h3>
            <div className="card p-3">
              <form onSubmit={handleProfileSubmit}>
                <div className="mb-3">
                  <label className="form-label">Profile Picture</label>
                  <input
                    type="file"
                    className="form-control"
                    name="profilePicture"
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <h3>Account Settings</h3>
            <div className="card p-3">
              <form onSubmit={handleAccountSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="johndoe"
                    name="username"
                    value={account.username}
                    onChange={handleAccountChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Change Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    name="newPassword"
                    value={account.newPassword}
                    onChange={handleAccountChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={account.confirmPassword}
                    onChange={handleAccountChange}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Update Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer mt-4">
          <div className="row justify-content-between align-items-center">
            <div className="col text-center">
              <p className="fs-6 mb-0">&copy; 2025 Skill Tricks.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Settings;
