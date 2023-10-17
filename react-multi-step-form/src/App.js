import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/lazy/Home'
import { Navbar } from './components/lazy/Navbar'
const LazyAbout = React.lazy(() => import('./components/lazy/About'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='about'
          element={
            <Suspense fallback='Loading...'>
              <LazyAbout />
            </Suspense>
          }
        />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App;
