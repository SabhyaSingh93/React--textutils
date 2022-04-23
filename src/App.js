/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar title="TextUtils" />
      <Alert alert={alert}></Alert>
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
      />
    </>
  );
}

export default App;
