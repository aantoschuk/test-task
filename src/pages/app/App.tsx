import axios from 'axios';
import { useEffect, useState } from 'react';

import { fetchUsers } from '@/redux/reducers/userReducer';

import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';

import './app.css';
import { UserList } from './components';

function App() {
  const dispatch = useTypedDispatch();
  const usersState = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main>
      <section className="user-list-section">
        <div className="users-container">
          {/* display loading something if request is pending */}
          {usersState.loading ? (
            <p>Loading...</p>
          ) : (
            // otherwise display data
            <UserList users={usersState.users} />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
