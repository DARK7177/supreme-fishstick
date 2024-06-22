import React from 'react';
import { User } from './types';

interface UserDetailsProps {
  user: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  if (!user) {
    return <div className="user-details">No user selected</div>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div>
        <img src={user.avatar} alt={user.name} />
        <h3>{user.name}</h3>
        <p>Job Title: {user.jobTitle}</p>
        <p>Bio: {user.bio}</p>
        <p>Created At: {user.createdAt}</p>
      </div>
    </div>
  );
};

export default UserDetails;
