import {Typography, Stack, Button, styled} from '@mui/material'
import CoinFlotin from './CoinFlotin.jsx'
import AvatarSection from './AvatarSection.jsx'

const Header = ({totalCaja, disponibleCaja, transitoCaja}) => {
  return (
    <Stack
      flexDirection={'column'}
      position={{xs: 'fixed', md: 'flex'}}
      sx={{top: '0', left: '0', right: '0'}}
    >
      <Stack
        direction={'column'}
        sx={{
          alignItems: 'center',
          justifyContent: {xs: 'space-evenly', sm: 'center'},
          backgroundColor: '#1E22AA',
          borderRadius: '0px 0px 16px 16px',
          width: '100%',
          minWidth: '90%',
          minHeight: '407px',
          position: 'absolute',
          left: '0px',
          top: '0px',
          padding: {xs: '0', sm: '0'},
          gap: '16px',
        }}
      >
        <Stack marginTop={'100px'}>
          <AvatarSection />
        </Stack>
        <Stack
          marginX={{xs: '0', sm: '100px'}}
          justifyContent={{xs: 'start', sm: 'center'}}
        >
          <Typography variant='h4' color='#fff'>{`$ ${totalCaja}`}</Typography>
          <Typography
            variant='body1'
            fontWeight={300}
            textAlign={{xs: 'center', sm: 'center'}}
            color='#fff'
          >
            Total en Caja
          </Typography>
        </Stack>

        <CoinFlotin
          disponibleCaja={disponibleCaja}
          transitoCaja={transitoCaja}
        />
      </Stack>
    </Stack>
  )
}

export default Header
