
import iconsAgresivo from "../assets/images/perfiles/ProfilCards/iconos-Perfiles-agresivo.svg";
import iconsConservador from "../assets/images/perfiles/ProfilCards/iconos-Perfiles-conservador.svg";
import iconsModerado from "../assets/images/perfiles/ProfilCards/iconos-Perfiles-moderado.svg";



export const HandlerCapital = (str) => {
    const resultStr = [...str]
        .map((leter, index) => {
            return index === 0 ? leter.toUpperCase() : leter.toLowerCase();
        })
        .join("");
    //console.log(resultStr);
    return resultStr;
};

export const handelProfileIcon = (ProfileCards) => {
    switch (ProfileCards) {
        case "Agresivo":
            return iconsAgresivo;
        case "Conservador":
            return iconsConservador;
        case "Moderado":
            return iconsModerado;
        default:
            return iconsConservador;
    }
};



