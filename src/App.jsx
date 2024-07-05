import { useState } from 'react'
import React from 'react'
import './App.css'
import Garage from "./components/Garage.jsx";
import Formulaire from "./components/Formulaire.jsx"
function App() {

  return (
      <div className="App">
          <div className="appItems">
              <Formulaire/>
          </div>
          <div className="appItem">
              <Garage/>
          </div>
      </div>
  )
}

export default App
