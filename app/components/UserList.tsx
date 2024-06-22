import React from 'react';
import { User } from './types';
import UserListmodule from './UserList.module.css'

interface UserListProps {
  users: User[];
  selectedUserId: string | null;
  onSelectUser: (userId: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, selectedUserId, onSelectUser }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className={user.id === selectedUserId ? 'selected' : ''} onClick={() => onSelectUser(user.id)}>
            <img src={user.avatar} alt={user.name} />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
