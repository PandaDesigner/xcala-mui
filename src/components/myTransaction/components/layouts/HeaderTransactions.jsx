import { Box, Stack, Typography } from '@mui/material';
import {
  BackgroundColor,
  ContentApp
} from '../../../detailPortafolioView/components/PorfolioSections.components';
import AvatarSection from '../../../AvatarSection';
import { HeadTitle } from '../../../newDasborad/CardsPorfolio/HeadContainerCardsPorfolio';

export const HeaderTransactions = ({
  nameUser = 'Nombre del Usuario',
  emailUser = 'nameuser@correo.com',
  acountUser = '******** 1233'
}) => {
  return (
    <BackgroundColor>
      <ContentApp
        direction={{ md: 'row', xs: 'column' }}
        justifyContent="center"
        padding={'40px 0'}
      >
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent={'start'}
          alignItems={{ md: 'center', xs: 'center' }}
          sx={{ width: '100%', maxWidth: '1380px' }}
          gap={1}
        >
          <AvatarSection />
          <Box>
            <HeadTitle
              textAlign={{ md: 'left', xs: 'center' }}
              fontSize={'26px'}
            >
              {nameUser}
            </HeadTitle>
            <Typography
              color={'#fff'}
              fontWeight={'100'}
              textAlign={{ md: 'left', xs: 'center' }}
              fontSize={'18px'}
            >
              {emailUser}
            </Typography>
            <Typography
              color={'#fff'}
              fontWeight={'100'}
              textAlign={{ md: 'left', xs: 'center' }}
              fontSize={'18px'}
            >
              {acountUser}
            </Typography>
          </Box>
        </Stack>
      </ContentApp>
    </BackgroundColor>
  );
};
