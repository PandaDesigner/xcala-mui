
import { Typography, Stack, Button, styled } from "@mui/material"
import CoinFlotin from "./CoinFlotin.jsx"
import AvatarSection from "./AvatarSection.jsx"



const Header = () => {
    return (
        <>
            <Stack direction={{ xs: 'row', sm: "column" }} sx={{
                alignItems: 'center',
                justifyContent: { xs: 'space-evenly', sm: "center" },
                backgroundColor: "#1E22AA",
                borderRadius: "0px 0px 16px 16px",
                width: "100%",
                minWidth: "90%",
                minHeight: "407px",
                position: "absolute",
                left: "0px",
                top: "0px",
                padding: { xs: "0", sm: "0" },
                gap: "16px"
            }}>
                <Stack>
                    <AvatarSection />
                </Stack>
                <Stack marginX={{ xs: "0", sm: "100px" }} justifyContent={{ xs: "start", sm: "center" }}>
                    <Typography variant="h4" color="#fff">$ 100.050</Typography>
                    <Typography variant="body1" fontWeight={300} textAlign={{ xs: "left", sm: "center" }} color="#fff">Total en Caja</Typography>
                </Stack>

            </Stack>
            <CoinFlotin />
        </>
    )
}

export default Header