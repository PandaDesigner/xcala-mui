import {Stack} from '@mui/material'
import iconWarnin from '../../../assets/images/perfiles/ProfilePorfolio/warning_amber.svg'
import {
  InvestmentRiskProfile,
  WarningAmber,
} from './PorfolioSections.components'

export const DisclaimerPerfil = ({riskProfile = 'Conservador'}) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      spacing={2}
      backgroundColor={'#FFF1EE'}
      padding={'16px'}
      borderRadius={'8px'}
      border={'1px solid #D12D35'}
      margin={'0 2rem'}
    >
      <WarningAmber src={iconWarnin} alt={'Warning'} />
      <InvestmentRiskProfile>
        Este fondo supera el riesgo definido en tu perfil {riskProfile}
      </InvestmentRiskProfile>
    </Stack>
  )
}
