import { Suspense, lazy } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/lazy/ErrorFallback'
import { Home } from './components/lazy/Home'
import { Navbar } from './components/lazy/Navbar'
import SkeletonAbout from './components/lazy/skeletons/SkeletonAbout'

const LazyAbout = lazy(() => import('./components/lazy/About'))

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='about'
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
            >
              <Suspense fallback={<SkeletonAbout />}>
                <LazyAbout />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes> 
      <Navbar />
    </div>
  )
}

export default App
