import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import {useState} from 'react'

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

export const SelectRescueItem = () => {
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
            value={true}
            control={<Radio />}
            label='Rescate parcial 50% del valor del Portafolio'
          />
          <FormControlLabel
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
      </FormControl>
    </form>
  )
}
