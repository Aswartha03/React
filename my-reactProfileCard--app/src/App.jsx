import { useState } from 'react'
import './App.css'
import { ProfileCard } from './components/ProfileCard'

function App() {
  
  let [name,setName] = useState("Aswartha")
  let [bio,setBio] = useState("Good Guy")
  return (
    <>
      <ProfileCard name="Chiru" age={20} bio="Intelligent boy"/>
      <ProfileCard name={name} age={21} bio={bio}/>
    </>
  )
}

export default App
