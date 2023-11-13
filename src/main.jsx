import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ThemeProvider, useTheme} from '@mui/material'
import {theme} from './theme.js'
import './index.css'
import { MyTransactionsPages } from './components/myTransaction/pages'
//import DetailView from './components/detailPortafolioView/pages/DetailView'
//import {ProductView} from './components/newViewPortafolio/ProductView.jsx'
//import {RescuePages} from './components/RescateSection/pages/RescuePages.jsx'
//import {InvertedPortfolioPage} from './components/InvertedPortfolioView/pages/InvertedPortfolioPage.jsx'
//import {NewDashboard} from './components/newDasborad/NewDashboard.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* 
      <InvertedPortfolioPage />
      <RescuePages />
      <ProductView />
       */}
      <MyTransactionsPages />
    </ThemeProvider>
  </React.StrictMode>
)
