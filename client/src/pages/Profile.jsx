import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get("http://localhost:5000/api/auth/profile", config);
      setProfile(data);
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleLogout = () => {
    logout();
  };

  

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
