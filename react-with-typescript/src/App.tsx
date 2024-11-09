import "./App.css";
import User from "./User.tsx";
import { UserContextProvider } from "./UserContext.tsx";
function App() {
  return (
    <UserContextProvider>
      <h1>Users</h1>
      <User name="anuj" age={21} />
      <User name="Shreeya" age={23} />
    </UserContextProvider>
  );
}

export default App;
