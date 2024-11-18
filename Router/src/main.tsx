import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Profile from './profile.tsx'
import NewProfile from './newProfile.tsx'
import NotFound from "./Notfound.tsx"
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<NotFound />
  },{
    path:'/profile',
    element:<Profile></Profile>
  },
  {
    path:'/profile/:profileId',
    element:<NewProfile></NewProfile>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
