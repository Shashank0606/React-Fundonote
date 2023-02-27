import "./App.css";
import Signin from "./Pages/Sigin/SignIn";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SignUp from "./Pages/Signup/SignUp";
import "./Pages/Signup/signup.css";
import "./Pages/Sigin/signin.css";
import Dashboard from "./Pages/Dashboard/dashboard";
import "../src/Pages/Dashboard/dashboard.css";
import Dashboard1 from "../src/Pages/Dashboard/dashboard1";
import "../src/Pages/Component/Header/header.css";
import "../src/Pages/Component/Takenote1/takenote1.css";
import "./Pages/Component/takenote2/takenote2.css";
import "./Pages/Component/Sidebar/sidebar.css";

function App() {
  return (
    <div className="App">
      {/* <Signin /> */}
      {/* <SignUp /> */}
      {/* <Dashboard /> */}
      <Dashboard1 />
    </div>
  );
}

export default App;
