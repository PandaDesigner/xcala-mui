import React from 'react';

import {
    styled
} from '@mui/material/styles';


import { Stack } from '@mui/material';
import AvatarIcon from '../assets/images/Avatar.svg';
import IconosPerfile from '../assets/images/Iconos-Perfiles.svg';

const AvatarSection1 = styled(Stack)({
    position: `"relative"`,
    isolation: `"isolate"`,
    flexDirection: `"column"`,
    justifyContent: `"flex-start"`,
    alignItems: `"center"`,
    padding: `"0px"`,
    boxSizing: `"border-box"`,
    height: "100%",
    maxHeight: "120px",
    minHeight: "90px",
    width: "100%",
    maxWidth: "122px",
    minWidth: "92.83px",
});

const Avatar = styled(Stack)({
    position: "relative",
    isolation: `"isolate"`,
    flexDirection: `"row"`,
    justifyContent: `"flex-start"`,
    alignItems: `"flex-start"`,
    padding: `"0px"`,
    boxSizing: `"border-box"`,
    width: "100%",
    minHeight: "90px",
    minWidth: "92.83px",
    margin: `"0px"`,
});

const Avatar1 = styled("img")({
    position: `"absolute"`,
    left: "0px",
    top: "0px",
});

const IconosPerfiles = styled("img")({
    width: `"39px"`,
    height: "69px",
    position: "absolute",
    left: "38px",
    top: "40px",
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
