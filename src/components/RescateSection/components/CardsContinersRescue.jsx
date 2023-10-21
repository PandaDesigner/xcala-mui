import {Button, Stack} from '@mui/material'
import {
  ButtonContained,
  RescueContentContent,
  SectionSelectRescue,
  SelectContent,
  TitleSectionRescue,
} from './Rescue.component'
import {SelectRescueItem} from './SelectRescueItem'

export const CardsContinersRescue = () => {
  return (
    <Stack sx={{width: '90%', margin: '0 auto', alignItems: 'center'}}>
      <RescueContentContent width={{md: '100%', sx: '80%'}} mb={9}>
        <SelectContent>
          <TitleSectionRescue>¿Cuanto deseas rescatar?</TitleSectionRescue>
          <SectionSelectRescue>
            <SelectRescueItem />
          </SectionSelectRescue>
        </SelectContent>
      </RescueContentContent>

      <ButtonContained
        sx={{mt: 1, mr: 1, ':hover': {backgroundColor: 'rgba(2, 31, 86, 1)'}}}
        type='submit'
      >
        Rescate fondos de inversion
      </ButtonContained>
    </Stack>
  )
}
