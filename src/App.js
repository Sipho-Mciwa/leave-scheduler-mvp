import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouters from "./routes/AppRoutes";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <BrowserRouter>
      {signedIn ? <Navbar> 
        <AppRouters signedIn={signedIn}/> 
        </Navbar> 
      : <Login setSignedIn={setSignedIn}/>}
    </BrowserRouter>
  );
}

export default App;