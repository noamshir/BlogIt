import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import { Home } from './screens/home'
import { MainHeader } from './components/general/main-header'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      //loader: rootLoader,
      children: [],
    },
  ])

  return (
    <React.Fragment>
      <ThemeProvider>
        <MainHeader />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export { App }
