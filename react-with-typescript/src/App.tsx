import "./App.css";
import User from "./User.tsx";
function App() {
  return (
    <>
      <h1>Users</h1>
      <User name="anuj" age={21} />
      <User name="Shreeya" age={23} />
    </>
  );
}

export default App;
