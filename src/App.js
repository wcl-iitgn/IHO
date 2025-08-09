import React, { Suspense, lazy } from 'react'
import { HashRouter as RouterProvider, Routes, Route } from 'react-router-dom'
import NavbarMain from './components/NavbarMain'
import InfoPage from './pages/InfoPage'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'



import RainfallPage from './pages/RainfallPage'
import EvapotranpirationPage from './pages/EvapotranpirationPage'
import RunoffPage from './pages/RunoffPage'
import TempPage from './pages/TempPage'
import RelativeWetnessPage from './pages/RelativeWetnessPage'
import StreamflowNetworkPage from './pages/StreamflowNetworkPage'
import StreamflowGaugePage from './pages/StreamflowGaugePage'


// import ObservedDataPage from './pages/ObservedDataPage'
// const ForecastDataPage = lazy(() => import('./pages/ForecastDataPage'));
// const EvapotranpirationPage = lazy(() => import('./pages/EvapotranpirationPage'));
// const RunoffPage = lazy(() => import('./pages/RunoffPage'));
// const TempPage = lazy(() => import('./pages/RunoffPage'));
// const RelativeWetnessPage = lazy(() => import('./pages/RunoffPage'));
// const StreamflowNetworkPage = lazy(() => import('./pages/RunoffPage'));
// const StreamflowGaugePage = lazy(() => import('./pages/RunoffPage'));


const App = () => {
  return (
    <RouterProvider>

       <NavbarMain/>

       <Suspense fallback={<Preloader />}>

      <Routes>
      <Route path='/' element={<RainfallPage/>}/>
      <Route path='/et' element={<EvapotranpirationPage/>}/>
      <Route path='/runoff' element={<RunoffPage/>}/>
      <Route path='/temp' element={<TempPage/>}/>
      <Route path='/ro' element={<RelativeWetnessPage/>}/>
      <Route path='/sm' element={<StreamflowNetworkPage/>}/>
      <Route path='/stnq' element={<StreamflowGaugePage/>}/>
      
      
        {/* <Route path='/' element={<ObservedDataPage/>}/> */}
        {/* <Route path='/forecast' element={<ForecastDataPage/>}/> */}
        <Route path='/info' element={<InfoPage/>}/>
  

        
      </Routes>

      </Suspense>
        <ScrollToTop/>

    </RouterProvider>
    
  )
}

export default App