import {Button, Stack, styled} from '@mui/material'

const BtnContent = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '50%',
  minWidth: '200px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  height: '50px',
})

export const BtnGroup = () => {
  return (
    <BtnContent gap={3}>
      <Button fullWidth variant='outlined'>
        Simular
      </Button>
      <Button fullWidth variant='contained'>
        Invertir
      </Button>
    </BtnContent>
  )
}
