import {useState} from 'react'
import {
  SearchFilter,
  FilterSection,
  ContentFilter,
} from './FilterSection.components.jsx'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
} from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const nameFilter = 'Filtrar por Fondo'
const nameProdut = 'Filtrar por Producto'

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //width: 250,
    },
  },
}

const filterFund = [
  'Fondos Conservadores',
  'Fondos Moderados',
  'Fondos Agresivos',
  'Inversiones en USD',
  'Inversiones en CPL',
]

const typeProduct = ['Fondo', 'Portafolios']

export const FilterShearch = () => {
  const [fundName, setFoundName] = useState([])
  const [produtName, setProdutName] = useState([])
  const [shearch, setShearch] = useState('')

  const handleChange = (event) => {
    const {
      target: {value},
    } = event
    setFoundName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }
  const handleChangeProduct = (event) => {
    const {
      target: {value},
    } = event
    setProdutName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <FilterSection>
      <SearchFilter>
        <TextField
          fullWidth
          sx={{width: '100%'}}
          id='outlined-basic'
          label='Search'
          variant='outlined'
          value={shearch}
          onChange={(e) => setShearch(e.target.value)}
          backgroundColor='rgba(255, 255, 255, 1)'
        />
      </SearchFilter>
      <ContentFilter>
        <FormControl sx={{m: 1, width: '50%'}}>
          <InputLabel id='demo-multiple-checkbox-label'>
            {`${nameFilter}`}
          </InputLabel>
          <Select
            labelId='demo-multiple-checkbox-label'
            id='demo-multiple-checkbox'
            multiple
            value={fundName}
            onChange={handleChange}
            input={<OutlinedInput label={`${nameFilter}`} />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {filterFund.map((fund) => {
              return (
                <MenuItem key={fund} value={fund}>
                  <Checkbox checked={fundName.indexOf(fund) > -1} />
                  <ListItemText primary={fund} />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <FormControl sx={{m: 1, width: '50%'}}>
          <InputLabel id='demo-multiple-checkbox-label'>
            {`${nameProdut}`}
          </InputLabel>
          <Select
            labelId='demo-multiple-checkbox-label'
            id='demo-multiple-checkbox-product'
            multiple
            value={produtName}
            onChange={handleChangeProduct}
            input={<OutlinedInput label={`${nameProdut}`} />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {typeProduct.map((fund) => {
              return (
                <MenuItem key={fund} value={fund}>
                  <Checkbox checked={produtName.indexOf(fund) > -1} />
                  <ListItemText primary={fund} />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </ContentFilter>
    </FilterSection>
  )
}
