import { BrowserRouter, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouters from "./routes/AppRoutes";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);
  const [isPageRefreshed, setIsPageRefreshed] = useState(false);

  useEffect(() => {
    const isRefreshed = sessionStorage.getItem('isPageRefreshed');
    if (isRefreshed) {
      // This code runs ONLY if the page has just been reloaded
      
      localStorage.clear();
      setIsPageRefreshed(true);
      setSubmitted(false);
    } else {
      // This code runs on the very first load/navigation
      sessionStorage.setItem('isPageRefreshed', 'true');
    }

  }, []);

  return (
    <BrowserRouter>
      {submitted ? 
      <Navbar user={user} setSubmitted={setSubmitted}> 
        <AppRouters submitted={submitted} user={user}/> 
      </Navbar> 
      : <Login setSubmitted={setSubmitted} setUser={setUser} isPageRefreshed={isPageRefreshed}/>}
    </BrowserRouter>
  );
}

export default App;