import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouters from "./routes/AppRoutes";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      {submitted ? 
      <Navbar user={user}> 
        <AppRouters submitted={submitted} user={user}/> 
      </Navbar> 
      : <Login setSubmitted={setSubmitted} setUser={setUser}/>}
    </BrowserRouter>
  );
}

export default App;