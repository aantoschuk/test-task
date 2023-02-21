import axios from 'axios';
import { useEffect, useState } from 'react';

import { fetchUsers } from '@/redux/user/actions';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';

import { UserList } from './components';

import './app.css';

function App() {
  const dispatch = useTypedDispatch();
  const usersState = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // when errors happens (promise rejected), user will see that message + error message
  if (usersState.error) {
    return <h1>There are error: {usersState.error}</h1>;
  }

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
