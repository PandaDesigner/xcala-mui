import {Image} from '@mui/icons-material'

export const AvatarIcons = ({url, ...resProps}) => {
  return (
    <>
      <Image src={url} sx={{width: '100%', height: '100%'}} {...resProps} />
    </>
  )
}
