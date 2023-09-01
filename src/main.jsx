import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, useTheme } from '@mui/material'
import { theme } from './theme.js'
//import { NewDashboard } from './components/newDasborad/NewDashboard.jsx'
import { ProductView } from './components/newViewPortafolio/ProductView.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <ProductView/>

    </ThemeProvider>
  </React.StrictMode>,
)
