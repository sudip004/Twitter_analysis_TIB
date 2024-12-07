import { lazy, Suspense } from 'react'
import { useAppContext } from './context/AppContext'
import { Routes, Route } from "react-router-dom"

import Loading from './utils/lodding/Loading';
import Home from './pages/Home';

const HomePage = lazy(() => import('./pages/Home'));

export const App = () => {
  const { state } = useAppContext();
  console.log(state);

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Suspense>
      
    </>
  )
}

