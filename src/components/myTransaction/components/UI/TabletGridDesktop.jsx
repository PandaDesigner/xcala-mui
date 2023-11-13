import {PersonAddDisabledTwoTone} from '@mui/icons-material'
import {Box, MenuItem} from '@mui/material'
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  useGridApiContext,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
} from '@mui/x-data-grid'
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

const getJson = (apiRef) => {
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef)
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef)

  const data = filteredSortedRowIds.map((id) => {
    const row = {}
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value
    })
    return row
  })

  return JSON.stringify(data, null, 2)
}

const exportBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()

  setTimeout(() => {
    URL.revokeObjectURL(url)
  })
}

function JsonExportMenuItem(props) {
  const apiRef = useGridApiContext()

  const {hideMenu} = props

  return (
    <MenuItem
      onClick={() => {
        const jsonString = getJson(apiRef)
        const blob = new Blob([jsonString], {
          type: 'text/json',
        })
        exportBlob(blob, 'data_xcala.json')
        hideMenu?.()
      }}
    >
      Export JSON
    </MenuItem>
  )
}

const csvOptions = {delimiter: ';'}

function CustomExportButton(props) {
  return (
    <GridToolbarExportContainer {...props}>
      <GridCsvExportMenuItem
        rintOptions={{fileName: 'Descargar informe'}}
        options={csvOptions}
      />
      {/*<JsonExportMenuItem />*/}
    </GridToolbarExportContainer>
  )
}

function CustomToolbar(props) {
  return (
    <GridToolbarContainer {...props}>
      <CustomExportButton />
    </GridToolbarContainer>
  )
}

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
          '.MuiDataGrid-toolbarContaine, .css-128fb87-MuiDataGrid-toolbarContainer':
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
            },
          '.MuiDataGrid-toolbarContainer>button': {
            color: '#475569',
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
          '.MuiButtonBase-root': {
            color: '#fff',
          },
        }}
        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        slots={{toolbar: CustomToolbar}}
      />
    </Box>
  )
}
