import ReactDOM from 'react-dom'
import './App.css'
import React from 'react';
import Navbar from './components/nav';
import Main from './components/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark  } from '@fortawesome/free-solid-svg-icons';




function App() {

  return (
    <>
      <Navbar/>
      <Main/>
    </>
  )
}

export default App
