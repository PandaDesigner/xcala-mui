import { Box, Stack } from '@mui/material';
import iconRiskNoDenifed from '../../../assets/images/changePerfilDefination.png';
import { IconsRiskProfile } from './DefiningRiskProfile';

export const ContainerRiskDefault = ({ children }) => {
  return (
    <Stack
      sx={{
        width: { md: '60%' },
        mx: 'auto',
        boxSizing: 'border-box',
        flexDirection: 'column',
        padding: 'clamp(1rem, -1.8571rem + 12.1905vw, 2rem);',
        bgcolor: '#fff',
        borderRadius: '1rem',
        boxShadow: '0px 0px 1rem 0px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
      gap={1}
    >
      <Box>
        <IconsRiskProfile
          sx={{
            width: 'clamp(5.1875rem, 1.4375rem + 16vw, 10.4375rem);',
          }}
          src={iconRiskNoDenifed}
        />
      </Box>
      <Stack
        sx={{
          width: '100%',
          flexDirection: 'column',
          gap: 2,
          marginBottom: '1rem',
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
