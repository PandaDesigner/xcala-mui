import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import {useState} from 'react'
import styled from 'styled-components'

import iconBoxSeciurity from '../../../assets/images/Symbol/iconsBox.gif'

const handleRadioChange = (event) => {
  setValue(event.target.value)
  setHelperText(' ')
  setError(false)
}

const handleSubmit = (event) => {
  event.preventDefault()

  if (value) {
    setHelperText('You got it!')
    setError(false)
  } else if (value === 'worst') {
    setHelperText('Sorry, wrong answer!')
    setError(true)
  } else {
    setHelperText('Please select an option.')
    setError(true)
  }
}

const handleColorValue = (value, minimalValue, valueSurcess, valuerInfo) => {
  return value >= minimalValue ? valueSurcess : valuerInfo
}

const BoxSectionPymen = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  //width: '178px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 0px',
  boxSizing: 'border-box',
  //height: '37.48px',
})
const BoxContent = styled(Stack)({
  backgroundColor: '#D7FCF4',
  display: 'flex',
  borderRadius: '8px',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  width: '32px',
  height: '32px',
  margin: '0px',
})
const AtomoGraficaIconCaja = styled('img')({
  width: '24px',
  height: '24px',
  //position: 'absolute',
})
const MuntPymenValue = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(90, 196, 177, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px 0px 0px 10px',
})

export const SelectRescueItem = ({mountFund = 10000}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')
  return (
    <form onSubmit={handleSubmit} style={{width: '100%'}}>
      <FormControl sx={{width: '100%'}} variant='standard'>
        <RadioGroup
          aria-labelledby='demo-error-radios'
          name='quiz'
          onChange={handleRadioChange}
        >
          <FormControlLabel
            sx={{color: '#848484'}}
            value={true}
            control={<Radio />}
            label='Rescate parcial 50% del valor del Portafolio'
          />
          <FormControlLabel
            sx={{color: '#848484'}}
            value={false}
            control={<Radio />}
            label='Rescate total'
          />
        </RadioGroup>

        <TextField
          hiddenLabel
          id='filled-hidden-label-normal'
          //defaultValue='Normal'
          variant='standard'
          label='Monto a Rescatar'
        />
        <BoxSectionPymen flexDirection={'row'} gap={1}>
          <BoxContent
            sx={{
              backgroundColor: handleColorValue(
                mountFund,
                10000,
                '#D7FCF4',
                '#FEEBCA'
              ),
            }}
          >
            <AtomoGraficaIconCaja src={iconBoxSeciurity} />
          </BoxContent>
          <MuntPymenValue
            sx={{
              color: handleColorValue(
                mountFund,
                10000,
                '#rgba(90, 196, 177, 1)',
                '#FFB020'
              ),
            }}
            fontSize={'0.9rem'}
          >{`$${mountFund.toLocaleString()} Disponible`}</MuntPymenValue>
        </BoxSectionPymen>
      </FormControl>
    </form>
  )
}
