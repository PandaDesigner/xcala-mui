import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ThemeProvider, useTheme} from '@mui/material'
import {theme} from './theme.js'
import {ProductView} from './components/newViewPortafolio/ProductView.jsx'
//import DetailView from './components/detailPortafolioView/pages/DetailView'
import './index.css'
//import {RescuePages} from './components/RescateSection/pages/RescuePages.jsx'
import {InvertedPortfolioPage} from './components/InvertedPortfolioView/pages/InvertedPortfolioPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <InvertedPortfolioPage />
      {/* <RescuePages />
      <ProductView />
       */}
    </ThemeProvider>
  </React.StrictMode>
)
