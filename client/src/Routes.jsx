import { lazy, Suspense } from 'react'
import { useAppContext } from './context/AppContext'
import { Routes, Route } from "react-router-dom"
import './utils/index.css'

import Loading from './utils/lodding/Loading';


import LandingPage from './pages/LandingPart/LandingPage';
import LoginPage from './pages/Login/LoginPage';



export const App = () => {
  const { state } = useAppContext();
  console.log(state);

  return (
    <>
      <div className='main-appContainer'>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </Suspense>
      </div>

    </>
  )
}

