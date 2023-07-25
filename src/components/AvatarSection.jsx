import React from 'react';

import {
    styled
} from '@mui/material/styles';


import { Stack, Typography } from '@mui/material';
import AvatarIcon from '../assets/images/Avatar.svg';
import IconosPerfile from '../assets/images/Iconos-Perfiles.svg';

const AvatarSection1 = styled(Stack)({
    position: "relative",
    isolation: "isolate",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    boxSizing: "border-box",
    height: "100%",
    maxHeight: "120px",
    minHeight: "90px",
    width: "100%",
    maxWidth: "122px",
    minWidth: "92.83px",
});

const Avatar = styled(Stack)({
    position: "relative",
    isolation: "isolate",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    boxSizing: "border-box",
    width: "100%",
    minHeight: "90px",
    minWidth: "92.83px",
    margin: "0px",
});

const Avatar1 = styled("img")({
    //position: "absolute",
    width: "96px",
    height: "96px"

});

const IconosPerfiles = styled("img")({
    width: "68px",
    height: "68px",
    position: "absolute",
    left: "55px",
    top: "45px",
});



function AvatarSection() {
    return (
        <AvatarSection1>
            <Avatar>
                <Avatar1 src={AvatarIcon} loading='lazy' alt={"Avatar Icons"} />
                <IconosPerfiles src={IconosPerfile} loading='lazy' alt={"Iconos Perfile"} />
            </Avatar>

        </AvatarSection1>);
}

export default AvatarSection;
