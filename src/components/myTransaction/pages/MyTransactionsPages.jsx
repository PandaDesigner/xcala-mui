import { Container, Stack, Typography } from '@mui/material'
import { HeaderTransactions } from '../components/layouts/HeaderTransactions'
import { BodyTransactions } from '../components/layouts/BodyTransactions'


export const MyTransactionsPages = () => {
  return (
  <>
    <HeaderTransactions/>
    <Container maxWidth='1380px' sx={{marginTop:'-120px', display:'flex', justifyContent:'center' }}>
    <BodyTransactions/>
    </Container>
  </>
  )
}
