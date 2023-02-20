import axios from 'axios';
import { useEffect, useState } from 'react';

import { fetchUsers } from './redux/reducers/userReducer';

import { useTypedDispatch, useTypedSelector } from './redux/hooks';

import './styles/app.css';

function App() {
  const dispatch = useTypedDispatch();
  const usersState = useTypedSelector((state) => state.user);

  // dispatch after mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main>
      <h1>Users</h1>
      <section className="user-list-section">
        <div className="users-container">
          {/* display loading something if request is pending */}
          {usersState.loading ? (
            <p>Loading...</p>
          ) : (
            // otherwise display data
            usersState.users.map((user) => <p>{user.name}</p>)
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
