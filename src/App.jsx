import { useState } from 'react'
import './App.css'
// Components
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  )
}