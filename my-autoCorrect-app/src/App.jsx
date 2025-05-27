import { useState } from 'react'

import './App.css'
import { AutoCorrect } from './components/AutoCorrect';

function App() {
    const corrections = {
    "teh": "the",
    "recieve": "receive",
    "adress": "address",
    "wierd": "weird",
    "thier": "their"
  };
 
  return (
    <>
      <AutoCorrect corrections={corrections}/>
    </>
  )
}

export default App
