import { Box, Stack, Typography } from '@mui/material';
import {
  BackgroundColor,
  ContentApp
} from '../../detailPortafolioView/components/PorfolioSections.components';
import AvatarSection from '../../AvatarSection';
import { HeadTitle } from '../../newDasborad/CardsPorfolio/HeadContainerCardsPorfolio';
import { CoinCash, ContentCash, TitleCash } from './ChangeBtn.components';

export const HeaderFromCash = ({
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
          justifyContent={'space-between'}
          alignItems={{ md: 'center', xs: 'center' }}
          sx={{ width: '100%', maxWidth: '1380px' }}
          gap={0.5}
        >
          <Stack
            flexDirection={{
              xs: 'column',
              md: 'row',
              justifyContent: { xs: 'center' },
              alignItems: 'center'
            }}
            width={'80%'}
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
          <ContentCash>
            <CoinCash
              sx={{
                textAlign: { md: 'end', xs: 'center' },
                fontSize: 'clamp(1.5rem, -0.875rem + 6vw, 2.5rem)',
                marginTop: 'clamp(1rem, 2.25rem + -4vw, 0rem)'
              }}
            >{`$ ${90.005}`}</CoinCash>
            <TitleCash sx={{ textAlign: { md: 'end', xs: 'center' } }}>
              Total en Caja
            </TitleCash>
          </ContentCash>
        </Stack>
      </ContentApp>
    </BackgroundColor>
  );
};
