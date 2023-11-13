import {PersonAddDisabledTwoTone} from '@mui/icons-material'
import {Box} from '@mui/material'
import {DataGrid, GridToolbar} from '@mui/x-data-grid'
/*
2"Pending"
4"Poste"
*/

const row = [
  {
    id: 1,
    fecha: '23/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 46561112,
  },
  {
    id: 2,
    fecha: '24/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Completado',
    cuota: 42.3525,
    monto: 46561112,
  },
  {
    id: 3,
    fecha: '25/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 46561112,
  },
  {
    id: 4,
    fecha: '26/10/2023',
    movimiento: 'Rescate',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 46561112,
  },
  {
    id: 5,
    fecha: '27/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Completado',
    cuota: 42.3525,
    monto: 6561112,
  },
  {
    id: 6,
    fecha: '28/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 86561112,
  },
  {
    id: 7,
    fecha: '29/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Completado',
    cuota: 42.3525,
    monto: 26561112,
  },
  {
    id: 8,
    fecha: '30/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 146561112,
  },
  {
    id: 9,
    fecha: '31/10/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 36561112,
  },
  {
    id: 10,
    fecha: '01/11/2023',
    movimiento: 'Retiro de dinero',
    producto: 'Renta Global test texto largo de mucho contenido',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 46566112,
  },
  {
    id: 11,
    fecha: '02/11/2023',
    movimiento: 'Aporte',
    producto: 'Portfolio CLP',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 46561112,
  },
  {
    id: 12,
    fecha: '03/11/2023',
    movimiento: 'Aporte',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 46561112,
  },
  {
    id: 13,
    fecha: '04/11/2023',
    movimiento: 'Recarga de caja',
    producto: 'Renta Global',
    estado: 'Pendiente',
    cuota: 42.3525,
    monto: 46561112,
  },
]

const currencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

const clpPrice = {
  type: 'number',
  width: 130,
  valueFormatter: ({value}) => currencyFormatter.format(value),
  cellClassName: 'font-tabular-nums',
}

const column = [
  {field: 'fecha', headerName: 'Fecha', width: 80, flex: 0.5, hide: true},
  {
    field: 'movimiento',
    headerName: 'Movimientos',
    flex: 0.8,
    width: 160,
    cellClassName: 'super-app-theme--cell',
  },
  {field: 'producto', headerName: 'Productos', flex: 1, width: 350},
  {field: 'estado', headerName: 'Estado', flex: 0.6, width: 130},
  {field: 'cuota', headerName: 'Cuotas', flex: 0.6, width: 130},
  {field: 'monto', ...clpPrice, headerName: 'Monto', flex: 0.6, width: 130},
]

export const TabletGridDesktop = () => {
  return (
    <Box
      sx={{
        height: '400px',
        width: '100%',
        '& .font-tabular-nums': {
          fontVariantNumeric: 'tabular-nums',
        },
      }}
    >
      <DataGrid
        rowHeight={30}
        columns={column}
        rows={row}
        sx={{
          '.MuiDataGrid-columnHeaders': {
            backgroundColor: '#1E22AA',
            color: '#fff',
            fontSize: {md: '16px', xs: '12px'},
          },
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            borderRadius: '8px',
          },
          '.MuiDataGrid-row': {
            fontSize: {md: '16px', xs: '10px'},
            textAlign: 'left',
            justifyContent: 'center',
          },
          '& .super-app-theme--cell': {
            width: '100%',
            color: '#1E22AA',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          },
          '.MuiDataGrid-footerContainer': {
            fontSize: {md: '16px', xs: '12px'},
          },
        }}
        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        lots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  )
}
