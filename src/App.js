import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [themeMode, setthemeMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // show Aleart function
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Toggle theme of Website - Dark or Light
  const toggleThemeMode = () => {
    if (themeMode === "light") {
      setthemeMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode is Enable.", "success");
    } else {
      setthemeMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode is Enable.", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      {/* navbar component */}
      <Navbar
        title="TextUtils"
        themeMode={themeMode}
        toggleThemeMode={toggleThemeMode}
      />
      {/* alert component */}
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm
          title="Enter The Text to Analyze"
          themeMode={themeMode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
