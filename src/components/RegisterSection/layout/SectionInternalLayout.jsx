import { Box, Stack, Typography, styled } from '@mui/material';

const HeaderLayout = styled(Stack)({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  backgroundColor: '#1E22AA',
  borderRadius: '0px 0px 24px 24px',
  minHeight: '369px',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  overflow: 'hidden',
});

const HeaderContainers = styled(Box)({
  width: '90%',
  margin: '0 auto',
  maxWidth: '1200px',
  boxSizing: 'border-box',
});

const AroYellowsBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        zIndex: -0,
      }}
      maxHeight='clamp(21.875rem, 9.4792rem + 52.8889vw, 29.3125rem)'
      right={'clamp(-26rem, -40.3636rem + 48.4848vw, 0rem)'}
    >
      <svg
        //width="460"
        height='469'
        viewBox='0 0 460 469'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.1447 469H160.376C132.35 427.452 115.989 377.387 115.989 323.5C115.989 179.624 232.624 62.9891 376.5 62.9891C405.705 62.9891 433.788 67.7949 460 76.6588V0H183.773C73.7106 65.7117 0 185.998 0 323.5C0 375.08 10.3722 424.237 29.1447 469Z'
          fill='#F7DB52'
        />
      </svg>
    </Box>
  );
};

const LogoXcala = () => {
  return (
    <Stack
      height={'clamp(3rem, -0.3333rem + 14.2222vw, 5rem)'}
      width={'clamp(6.271875rem, -0.775rem + 30.0667vw, 10.5rem)'}
      sx={{
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <svg
        width='168'
        height='80'
        viewBox='0 0 168 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.3098 51.0238H28.9629V43.6769H36.3098V51.0238Z'
          fill='white'
        />
        <path
          d='M72.9752 21.4573H58.3945V6.87657H72.9752V21.4573Z'
          fill='white'
        />
        <path
          d='M19.1348 43.667H28.9664V33.8353H19.1348V43.667Z'
          fill='white'
        />
        <path
          d='M36.3057 43.667H46.1373V33.8353H36.3057V43.667Z'
          fill='white'
        />
        <path
          d='M46.1418 51.0101H36.3018V60.8499H46.1418V51.0101Z'
          fill='white'
        />
        <path
          d='M58.4242 60.8373H46.1382V73.1233H58.4242V60.8373Z'
          fill='white'
        />
        <path
          d='M19.1484 51.0329H28.9808V60.8652H19.1484V51.0329Z'
          fill='white'
        />
        <path
          d='M6.87646 60.8283H19.1453V73.0972H6.87646V60.8283Z'
          fill='white'
        />
        <path
          d='M6.87646 21.4638H19.1453V33.7327H6.87646V21.4638Z'
          fill='white'
        />
        <path
          d='M46.1509 21.4638H58.4197V33.7327H46.1509V21.4638Z'
          fill='white'
        />
        <path
          d='M71.6863 33.6473C78.2009 33.6473 82.4473 36.8806 83.9432 42.4784H78.0079C77.0911 39.9207 74.9677 38.2801 71.6863 38.2801C67.247 38.2801 64.3033 41.5615 64.3033 47.3522C64.3033 53.1911 67.247 56.4724 71.6863 56.4724C74.9677 56.4724 76.9944 55.0249 78.0079 52.2739H83.9432C82.4473 57.4857 78.2009 61.105 71.6863 61.105C64.062 61.105 58.6572 55.7002 58.6572 47.3522C58.6572 39.0521 64.062 33.6473 71.6863 33.6473Z'
          fill='white'
        />
        <path
          d='M103.089 38.4251C98.9868 38.4251 95.0296 41.5132 95.0296 47.2559C95.0296 52.9981 98.9868 56.328 103.089 56.328C107.239 56.328 111.147 53.0947 111.147 47.3525C111.147 41.6581 107.239 38.4251 103.089 38.4251ZM101.93 33.6476C106.418 33.6476 109.506 35.771 111.147 37.9425V34.0821H116.697V61.0208H111.147V56.714C109.458 58.9818 106.273 61.1052 101.834 61.1052C94.9332 61.1052 89.3838 55.4592 89.3838 47.2559C89.3838 39.0524 94.9332 33.6476 101.93 33.6476'
          fill='white'
        />
        <path
          d='M123.681 23.4305H129.182V61.0208H123.681V23.4305Z'
          fill='white'
        />
        <path
          d='M146.769 38.4251C142.667 38.4251 138.71 41.5132 138.71 47.2559C138.71 52.9981 142.667 56.328 146.769 56.328C150.919 56.328 154.828 53.0947 154.828 47.3525C154.828 41.6581 150.919 38.4251 146.769 38.4251ZM145.611 33.6476C150.099 33.6476 153.187 35.771 154.828 37.9425V34.0821H160.377V61.0208H154.828V56.714C153.139 58.9818 149.954 61.1052 145.515 61.1052C138.614 61.1052 133.064 55.4592 133.064 47.2559C133.064 39.0524 138.614 33.6476 145.611 33.6476'
          fill='white'
        />
      </svg>
    </Stack>
  );
};

const TitelHeader = ({ text }) => {
  return (
    <Typography
      sx={{
        fontSize: 'clamp(0.875rem, 0.0417rem + 3.5556vw, 1.375rem);',
      }}
    >
      {text}
    </Typography>
  );
};

const TitleSectionName = ({ name, description }) => {
  return (
    <Box
      width={'clamp(15.6875rem, -1.8125rem + 74.6667vw, 26.1875rem);'}
      sx={{
        zIndex: '9',
      }}
    >
      <Typography
        fontSize={'clamp(1.5rem, -0.1667rem + 7.1111vw, 2.5rem);'}
        lineHeight={'clamp(1.5rem, -0.1667rem + 7.1111vw, 2.5rem)'}
        fontFamily={'Museo'}
        component={'p'}
      >
        <Typography
          fontWeight={'bold'}
          color={'#5AC4B1'}
          component={'span'}
          fontSize={'clamp(1.2rem, -0.1667rem + 6.1111vw, 2rem)'}
          lineHeight={'clamp(1.8rem, -0.1667rem + 7.1111vw, 2.5rem)'}
        >
          {name}{' '}
        </Typography>{' '}
        {description}
      </Typography>
    </Box>
  );
};

const TitleStepe = ({
  name = 'Rafael',
  description = '¿A qué plazo te gustaría invertir? En otras palabras, ¿cuánto tiempo estás dispuesto a esperar para obtener ganancias de tu inversión?',
}) => {
  return (
    <box>
      <Typography
        textAlign={'center'}
        fontSize={'clamp(0.875rem, -0.1667rem + 4.4444vw, 1.6rem);'}
      >
        Mi Perfil de inversiones
      </Typography>
      <Typography
        fontSize={'clamp(0.95rem, -0.0833rem + 3.4556vw, 1.25rem)'}
        lineHeight={'clamp(1.05rem, -0.0833rem + 3.5556vw, 1.45rem)'}
        fontFamily={'Museo'}
        textAlign={'center'}
        component={'p'}
      >
        <Typography
          fontWeight={'bold'}
          color={'#5AC4B1'}
          //textAlign={'center'}
          component={'span'}
          fontSize={'clamp(0.95rem, -0.0833rem + 3.4556vw, 1.25rem)'}
          lineHeight={'clamp(1.05rem, -0.0833rem + 3.5556vw, 1.45rem)'}
        >
          {name}
        </Typography>
        {description}
      </Typography>
    </box>
  );
};

const SteperContent = styled(Stack)({
  borderRadius: '20px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  //width: '100%',
  width: { xs: '300px', md: '444px' },
  height: '8px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  gap: '0.5rem',
});

const RectangleContent = styled(Box)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  height: '8px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
});
const Rectangle = styled(Box)({
  width: '100%',
  height: '8px',
  position: 'absolute',
  left: '0px',
  top: '0px',
});

const StepItem = ({ active = false }) => {
  return (
    <RectangleContent>
      <Rectangle
        active
        sx={{
          backgroundColor: !active ? 'rgba(255, 255, 255, 0.25)' : '#5AC4B1',
        }}
      />
    </RectangleContent>
  );
};

const Step = styled(StepItem)({
  alignSelf: 'stretch',
  flex: '1',
  margin: '0px',
});

export const SectionInternalLayout = ({
  name,
  headerSteep = true,
  children,
}) => {
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <HeaderLayout>
        {!headerSteep ? (
          <HeaderContainers>
            <LogoXcala />
            <TitelHeader text={'Mi Perfil de inversiones'} />
            <TitleSectionName
              name={'Rafael '}
              description={'tu perfil de inversionista no está definido'}
            />
          </HeaderContainers>
        ) : (
          <HeaderContainers zIndex={'1'}>
            <Stack
              width={'80%'}
              margin={'0 auto'}
              justifyContent={'center'}
              flexDirection={'column'}
              alignItems={'center'}
              maxWidth={'clamp(15.875rem, -6.8333rem + 118.2222vw, 35.5rem)'}
              marginTop={'clamp(-3.375rem, -27rem + 66.6667vw, 0rem)'}
            >
              <LogoXcala />
              <TitleStepe />
              <Box
                sx={{
                  margin: ' 0px auto',
                  marginTop: {
                    xs: 'clamp(1.8rem, 4.4313rem + -6.1069vw, 1.5rem)',
                    md: '16px',
                  },
                  width: '100%',
                  maxWidth: '444px',
                }}
              >
                <SteperContent>
                  <Step active />
                  <Step active />
                  <Step />
                  <Step />
                  <Step />
                  <Step />
                  <Step />
                  <Step />
                  <Step />
                </SteperContent>
              </Box>
            </Stack>
          </HeaderContainers>
        )}
        <AroYellowsBackground />
      </HeaderLayout>
      <Box
        sx={{
          width: '90%',
          maxWidth: '1200px',
          height: '100%',
          minHeight: '300px',
          margin: '0 auto',
          marginTop: '-60px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
