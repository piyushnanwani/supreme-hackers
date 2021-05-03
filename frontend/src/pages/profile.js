import { Header } from "../components";
import { getProfileData } from "../api";
import React, { useState, useEffect } from "react";

export default function Profile(props) {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    let data = getProfileData(props.id);
    setProfileData(data[0]);
  }, []);
  return (
    <div className="profile-container">
      <Header title="Profile" type="header-1" />
      <div className="profile">
        <div>
          {profileData ? (
            <div>
              <img src={ profileData.profile_link} width={100} height={100}></img>
              <div>
                <div>ID: {profileData.id}</div>
                <div>Name: {profileData.name}</div>
                <div>Overall Rank : {profileData.overall_rank}</div>
                <div>C++ Percentile : {profileData[`c++-percentile`]}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
