import { Container } from '@mui/material';
import HeaderWallet from '../../HeaderWallet';
import { BodyTransactions } from '../../myTransaction/components/layouts/BodyTransactions';
import { BtnGroupCaja } from '../../BtnGroupCaja';
import { BtnGroupFix } from '../../BtnGroupFix';
import { HeaderTransactions } from '../../myTransaction/components/layouts/HeaderTransactions';

const currencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP'
});

const clpPrice = {
  type: 'number',
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(value),
  cellClassName: 'font-tabular-nums'
};
const column = [
  {
    field: 'fecha',
    headerName: 'Fecha',
    width: 120,
    flex: '0.5 1 120px',
    hide: true
  },
  {
    field: 'movimiento',
    headerName: 'Movimientos',
    flex: '0.6 2 80px',
    width: 160,
    cellClassName: 'super-app-theme--cell'
  },
  {
    field: 'monto',
    ...clpPrice,
    headerName: 'Monto',
    flex: '0.5 1 60',
    width: 120
  }
];

export const Wallet = () => {
  return (
    <>
      <HeaderTransactions />
      {/* 
      
      <HeaderWallet /> */}
      <Container
        maxWidth="1380px"
        sx={{
          marginTop: '0',
          //display: 'flex',
          //flexDirection: 'column',
          //justifyContent: 'center',
          alignItems: 'center',
          background: '#F2F2F2',
          paddingY: '60px'
        }}
      >
        <BtnGroupCaja />
        <BodyTransactions column={column} titleText={'Caja'} />
        <BtnGroupFix />
      </Container>
    </>
  );
};
