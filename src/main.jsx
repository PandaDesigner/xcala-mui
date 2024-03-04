import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, useTheme } from '@mui/material';
import { theme } from './theme.js';
import './index.css';
//import { RescuePages } from './components/RescateSection/pages/RescuePages.jsx';
//import { MyTransactionsPages } from './components/myTransaction/pages';
//import {NotificationsXcala} from './components/Notifications/NotificationsXcala.jsx'
//import { LoyoutMenu } from './components/Menu/Layouts/LoyoutMenu.jsx';
//import DetailView from './components/detailPortafolioView/pages/DetailView'
//import {ProductView} from './components/newViewPortafolio/ProductView.jsx'
//import {RescuePages} from './components/RescateSection/pages/RescuePages.jsx'
//import {InvertedPortfolioPage} from './components/InvertedPortfolioView/pages/InvertedPortfolioPage.jsx'
//import { NewDashboard } from './components/newDasborad/NewDashboard.jsx';
//import { Wallet } from './components/wallet/pages/Wallet.jsx';
//import { RechargeFromCash } from './components/rechargeFromCash/pages/RechargeFromCash.jsx';
//import { CashRescuePages } from './components/rechargeFromCash/pages/CashRescuePages.jsx';

import {
  InitialPerfilPages,
  RegisterPages,
} from './components/RegisterSection/page';
import { DefiningRiskProfile } from './components/RegisterSection/views/DefiningRiskProfile.jsx';
//import { CashRescuePages } from './components/rechargeFromCash/pages/CashRescuePages.jsx';
//import { MyDataPersonal } from './components/newMyData/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* 
      <InvertedPortfolioPage />
      <RescuePages />
      <ProductView />
      <Wallet />
       */}

      {/* 
      <CashRescuePages />
      <InitialPerfilPages />
    */}
      <RegisterPages />
      {/* <NotificationsXcala />
      <MyTransactionsPages /> */}
    </ThemeProvider>
  </React.StrictMode>
);
