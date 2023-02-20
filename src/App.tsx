import { useEffect, useState } from 'react';

import './styles/app.css';
import { useTypedDispatch } from './redux/hooks';
import { selectValue, testAction } from './redux/testReducer';

function App() {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(testAction());
  }, []);

  return (
    <main>
      <h1>Users</h1>
      <section className="user-list-section">
        <div className="users-container">
          <p>Hello</p>
        </div>
      </section>
    </main>
  );
}

export default App;
