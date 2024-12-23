import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Layout from './component/Layout';
import Loader from './component/Loader/Loader';
import Booking from './component/Booking/Booking';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const Explore = lazy(() => import('./pages/ExplorePage'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Upload = lazy(() => import('./pages/Upload'));
const Signup = lazy(() => import('./pages/Signup'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Delete = lazy(() => import('./pages/Delete'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='explore' element={<Explore />} />
              <Route path='about' element={<About />} />
              <Route path='login' element={<Login />} />
              <Route path='upload' element={<Upload />} />
              <Route path='signup' element={<Signup />} />
              <Route path='gallery' element={<Gallery />} />
              <Route path='delete' element={<Delete />} />
              <Route path='booking' element={<Booking />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
