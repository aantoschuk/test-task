import { useState } from "react";

import "./styles/app.css";

function App() {
  const [count, setCount] = useState(0);

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
