import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './Pages/JobPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {
  // Add a new job to the database via API
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });
  return;
}
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} /> 
      <Route path='*' element={<NotFoundPage />} />
    </Route>
    )
  );
  
  return <RouterProvider router = {router}/>
}

export default App