import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import ErrorPage from './components/ErrorPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' 
      element={<RootLayout></RootLayout>}
      >

        <Route
        index
        element={<Home></Home>}
        ></Route>

        <Route
        path='about'
        element={<About></About>}
        ></Route>

        <Route
        path='contact'
        element={<ContactLayout></ContactLayout>}
        >

          <Route path='info' element={<ContactInfo></ContactInfo>}></Route>

          <Route path='form' element={<ContactForm></ContactForm>}></Route>

        </Route>

        <Route
        path='products'
        element={<Products></Products>}
        ></Route>

        <Route path='jobs' 
        element={<JobsLayout></JobsLayout>}
        errorElement={<ErrorPage></ErrorPage>}
        >

          <Route index element={<Jobs></Jobs>} 
          loader={jobsLoader}
          ></Route>

          <Route path=':id' element={<JobDetails></JobDetails>}
          loader={jobDetailsLoader}
          ></Route>

        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App