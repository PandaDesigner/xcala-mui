import { Button, Stack } from '@mui/material';
import {
  ButtonContained,
  RescueContentContent,
  SectionSelectRescue,
  SelectContent,
  TitleSectionRescue
} from './Rescue.component';
import { SelectRescueItem } from './SelectRescueItem';

export const CardsContinersRescue = ({
  title = '¿Cuanto deseas rescatar?',
  btnContent = 'Rescate fondo de Inversión',
  mountFund,
  lableParcialRescue,
  lableTotalRescue,
  displaySection
}) => {
  return (
    <Stack sx={{ width: '90%', margin: '0 auto', alignItems: 'center' }}>
      <RescueContentContent
        width={{ md: '50%', sx: '80%' }}
        height={{ md: '300px', sx: '400' }}
        minWidth={{ md: '740px', sx: '' }}
        mb={9}
      >
        <SelectContent>
          <TitleSectionRescue>{title}</TitleSectionRescue>
          <SectionSelectRescue>
            <SelectRescueItem
              mountFund={mountFund}
              lableParcialRescue={lableParcialRescue}
              lableTotalRescue={lableTotalRescue}
              displaySection={displaySection}
            />
          </SectionSelectRescue>
        </SelectContent>
      </RescueContentContent>

      <ButtonContained
        sx={{
          mt: 1,
          mr: 1,
          ':hover': { backgroundColor: 'rgba(2, 31, 86, 1)' },
          textDecoration: 'none'
        }}
        type="submit"
      >
        {btnContent}
      </ButtonContained>
    </Stack>
  );
};
