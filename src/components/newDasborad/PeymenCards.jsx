
/**ItemsPeymenBox */

import { Stack, Typography, styled } from "@mui/material";


const ItemsPeymenBox = styled(Stack)({
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '4px',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 16px',
    boxSizing: 'border-box',
    height: '48px',
    boxShadow: '0px 0px 12px rgba(61, 64, 75, 0.18)',
})

const ContainerCardsBox = styled(Stack)({
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px',
    boxSizing: 'border-box',
    margin: '0px',
    height: '40px',
    width: '60%',
});




export const PeymenCards = () => {
    return (
        <ItemsPeymenBox>

        </ItemsPeymenBox>
    )
}
