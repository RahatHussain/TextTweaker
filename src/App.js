import "./App.css"
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"
// import About from "./Components/About"
import React, { useState } from "react"
import Allert from "./Components/Allert"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#6c757d"
      showAlert("Dark Mode has been Enabled Successfully", "success")
      document.title = "TextTwaeker - Dark Mode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been Enabled Successfully", "success")
      document.title = "TextTwaeker - Light Mode"
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar tittle="TextTweaker" mode={mode} toggleMode={toggleMode} />
      <Allert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text to Analyze Bellow "
          mode={mode}
        />
        {/* <Routes> */}
        {/* <Route
              path="/"
              element={
                
              }
            ></Route>
            <Route exact path="/About" element={<About />}></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
