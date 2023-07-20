

import { Typography, Stack, Button, styled, Box } from "@mui/material"

import Header from "./components/Header.jsx"
import { BtnGroupCaja } from "./components/BtnGroupCaja.jsx";
import { BtnGroupFix } from "./components/BtnGroupFix.jsx";

const BtnXcala = styled(Button)({
  //color: '#1E22AA',

});

const propsHeader = {
  totalCaja: "100.050",
  disponibleCaja: "80.500",
  transitoCaja: "10.200"
}

const { totalCaja, disponibleCaja, transitoCaja } = propsHeader

function App() {


  return (
    <>
      <Header totalCaja={totalCaja} disponibleCaja={disponibleCaja} transitoCaja={transitoCaja} />
      <BtnGroupCaja />



      <BtnGroupFix />
    </>
  )
}

export default App
