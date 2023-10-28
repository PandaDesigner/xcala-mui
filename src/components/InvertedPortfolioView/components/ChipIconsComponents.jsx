import {Stack} from '@mui/material'

export const ChipIconsComponents = ({colorsItem = 'F57E7E'}) => {
  return (
    <Stack
      sx={{
        color: colorsItem,
        height: 'clamp(0.5rem, 0.0313rem + 1.5vw, 0.875rem)',
        width: 'clamp(0.5rem, 0.0313rem + 1.5vw, 0.875rem)',
        margin: '0px',
      }}
    >
      <svg
        width='10'
        height='11'
        viewBox='0 0 10 11'
        xmlns='http://www.w3.org/2000/svg'
        fill={colorsItem}
      >
        <g id='iconsCHips'>
          <circle cx='5' cy='5.5' r='4' fill={colorsItem} />
          <circle
            cx='5'
            cy='5.5'
            r='4.5'
            stroke={colorsItem}
            stroke-opacity='0.5'
          />
        </g>
      </svg>
    </Stack>
  )
}
