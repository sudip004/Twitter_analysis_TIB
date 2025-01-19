import { lazy, Suspense } from 'react'
import { useAppContext } from './context/AppContext'
import { Routes, Route } from "react-router-dom"
import './utils/index.css'

import Loading from './utils/lodding/Loading';


import LandingPage from './pages/LandingPart/LandingPage';
import LoginPage from './pages/Login/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnalyzePage from './pages/Analyze/AnalyzePage';



export const App = () => {
  const { state } = useAppContext();
  console.log(state);

  return (
    <>
      <div className='main-appContainer'>
        <Suspense fallback={<Loading />}>
        <Header/>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/analyze" element={<AnalyzePage/>} />
          </Routes>
          <Footer/>
        </Suspense>
      </div>

    </>
  )
}

