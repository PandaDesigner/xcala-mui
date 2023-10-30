import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material'

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1E22AA',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}))

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(
  timeInverted,
  fundName,
  investmentMovement,
  Amountinvested
) {
  return {timeInverted, fundName, investmentMovement, Amountinvested}
}

const rows = [
  createData(
    '28-oct-2023',
    'Nombre del fondo',
    'Inversión Inicial',
    '$26.000,00'
  ),
  createData(
    '15-sep-2023',
    'Nombre del fondo',
    'Dividendos Pagados',
    '$ 4.820,01'
  ),
  createData(
    '01-may-2023',
    'Nombre del fondo',
    'Rescate Parcial',
    '$ 51.001,00'
  ),
  createData(
    '18-feb-2023',
    'Nombre del fondo',
    'Dividendos Pagados',
    '$ 5.020,56'
  ),
  createData('12-dic-2022', 'Nombre del fondo', 'Re Inversion', '$ 50.020,56'),
]

export const TabletInverted = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 520}} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Fecha</StyledTableCell>
              <StyledTableCell rowSpan='2'>Fondo</StyledTableCell>
              <StyledTableCell>Movimiento</StyledTableCell>
              <StyledTableCell align='right'>Monto</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(
              ({
                timeInverted,
                fundName,
                investmentMovement,
                Amountinvested,
              }) => (
                <StyledTableRow key={timeInverted}>
                  <StyledTableCell component='th' scope='row'>
                    {timeInverted}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {fundName}
                  </StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {investmentMovement}
                  </StyledTableCell>
                  <StyledTableCell align='right' component='th' scope='row'>
                    {Amountinvested}
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
