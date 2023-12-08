import React from "react";
import Navbar from "./components/Navbar.jsx";

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        {/* Welcome */}
        <div className={"titleContainer"}>
          <div>Welcome!</div>
        </div>

        {/* SubTitle */}
        <div className="home_page">Sustainable Growth with Blockchain</div>
        <div className={"buttonContainer"}>
          <Link to="/login">
            <button>
              <input className={"inputButton"} type="button" value={"Log in"} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
