"use client"
import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import { User } from './components/types';
import styles from './components/Home.module.css';
import loaderStyle from './components/Loader.module.css'

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
};

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userlist}>
        {loading && <div className={loaderStyle.loader}></div>}
        {loading && <div>Loading.....</div>}
        {!loading && error && <div>{error}</div>}
        {!loading && !error && (
          <UserList users={users} selectedUserId={selectedUserId} onSelectUser={handleSelectUser} />
        )}
      </div>
      <div className={styles.userdetails}>
        <UserDetails user={users.find(user => user.id === selectedUserId) || null} />
      </div>
    </div>
  );
};

export default Home;
