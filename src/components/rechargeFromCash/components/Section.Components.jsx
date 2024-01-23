import { Box, Button, Stack, Typography, styled } from '@mui/material';

export const SectionRechargeCash = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  //maxHeight: '650px',
  maxWidth: '916px',
  margin: '0 auto',
  marginTop: '-80px',
  gap: '21px'
});
export const SectionPrintView = styled(Stack)({
  background:
    'linear-gradient(-114.33deg, rgba(68, 73, 216, 1) 10.579930066407215%, rgba(25, 28, 86, 1) 187.74901051500464%)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  boxSizing: 'border-box',
  width: '100%',
  margin: '0px'
});

export const SoloFaltaQueRealices = styled(Typography)({
  width: '100%',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(223, 224, 243, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  //fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});

export const SectionDescription = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '100%',
  margin: '21px 0px 0px 0px'
});
export const SectionInfo = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '8px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px'
});

export const TitleProperty = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});
export const TextValue = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});

export const ButtonCopy = styled(Button)({
  backgroundColor: 'rgba(244, 244, 251, 1)',
  borderRadius: '4px',
  position: 'relative',
  isolation: 'isolate',
  padding: '9px 32px',
  boxSizing: 'border-box'
});

export const BtnTitle = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});

export const MsnAlert = styled(Stack)({
  border: '1px solid rgba(209, 45, 53, 1)',
  boxSizing: 'border-box',
  borderRadius: '8px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  //height: '96px',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '10px 8px',
  gap: '16px'
});

export const TitleAlert = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  height: '24px',
  width: '100%'
});
export const WarningAmber = styled(Box)({
  width: '24px',
  height: '24px',
  margin: '0px'
});
export const TextImportante = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(209, 45, 53, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  width: '115.5px',
  margin: '0px 0px 0px 16px'
});

export const ParrafoAlert = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  alignSelf: 'stretch',
  margin: '0px auto'
});

//!SECTION Icons importants

export const IconsCopy = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="content_copy" clipPath="url(#clip0_7950_1196)">
        <path
          id="Vector"
          d="M10.5 1.125H3C2.3125 1.125 1.75 1.6875 1.75 2.375V11.125H3V2.375H10.5V1.125ZM12.375 3.625H5.5C4.8125 3.625 4.25 4.1875 4.25 4.875V13.625C4.25 14.3125 4.8125 14.875 5.5 14.875H12.375C13.0625 14.875 13.625 14.3125 13.625 13.625V4.875C13.625 4.1875 13.0625 3.625 12.375 3.625ZM12.375 13.625H5.5V4.875H12.375V13.625Z"
          fill="#1E22AA"
        />
      </g>
      <defs>
        <clipPath id="clip0_7950_1196">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconsWarnning = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="warning_amber">
        <g id="Vector">
          <path
            d="M12.3044 6.49L19.8344 19.5H4.77444L12.3044 6.49ZM12.3044 2.5L1.30444 21.5H23.3044L12.3044 2.5Z"
            fill="#D12D35"
          />
          <path d="M13.3044 16.5H11.3044V18.5H13.3044V16.5Z" fill="#D12D35" />
          <path d="M13.3044 10.5H11.3044V15.5H13.3044V10.5Z" fill="#D12D35" />
        </g>
      </g>
    </svg>
  );
};

//Molecula

export const BtnCopy = ({
  text = 'Copiar datos bancarios para transferir'
}) => {
  <Button startIcon={<IconsCopy />} sx={{ width: '80%', padding: '16px' }}>
    <BtnTitle>{text}</BtnTitle>
  </Button>;
};
