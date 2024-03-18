import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profilePic, titleName, skills }) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2 className="title-name">{titleName}</h2>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
