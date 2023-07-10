import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './TextUtils/Navbar';
import Textform from './TextUtils/Textform';
import About from './TextUtils/About';
import { useState } from 'react';

function App() {
  let [mode, setMode] = useState("light")
  let [btnTxt, setBtnTxt] = useState("Enable DarkMood")

  let togglemod = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "#04213e"
      setBtnTxt("Enable LightMood")
    }
    else {
      setMode("light")
      document.body.style.background = "white"
      setBtnTxt("Enable DarkMood")
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} togglemod={togglemod} btnTxt={btnTxt} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={
              <Textform heading="Enter The Text Analyze Below" mode={mode} />
            } />
            <Route path='about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App;
