import React, { Suspense, lazy } from 'react'
import { HashRouter as RouterProvider, Routes, Route } from 'react-router-dom'
import NavbarMain from './components/NavbarMain'
import InfoPage from './pages/InfoPage'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import { AlertProvider } from './context/AlertContext'
import AlertMessage from './components/AlertMessage'
import ObservedDataPage from './pages/ObservedDataPage'





const ForecastDataPage = lazy(() => import('./pages/ForecastDataPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));


const App = () => {
  return (
    <RouterProvider>
      <AlertProvider>
       <NavbarMain/>
       <AlertMessage />
       <Suspense fallback={<Preloader />}>

      <Routes>
        <Route path='/' element={<ObservedDataPage/>}/>
        <Route path='/forecast' element={<ForecastDataPage/>}/>
        <Route path='/info' element={<InfoPage/>}/>
  

        <Route path='/contact' element={<ContactUsPage/>}/>
        
      </Routes>

      </Suspense>
        <ScrollToTop/>
        </AlertProvider>
    </RouterProvider>
    
  )
}

export default App