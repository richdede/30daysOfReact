import React from 'react';
import ProfileCard from './ProfileCard'; 

const App = () => {
  const profile = {
    profilePic: 'path_to_profile_pic.jpg',
    titleName: 'Dee Prince',
    skills: ['Web Development', 'Software Engineering', 'UI/UX Design']
  };

  return (
    <div className="App">
      <ProfileCard 
        profilePic={profile.profilePic} 
        titleName={profile.titleName} 
        skills={profile.skills} 
      />
    </div>
  );
};

export default App;
