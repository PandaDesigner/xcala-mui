

import { Typography, Stack, Button, styled } from "@mui/material"

import Header from "./components/Header.jsx"

const BtnXcala = styled(Button)({
  //color: '#1E22AA',

});

function App() {


  return (
    <>
      <Header />
      <Typography variant="h2" > Hola mundo </Typography>

    </>
  )
}

export default App
