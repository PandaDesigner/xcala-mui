import IconosPerfileConservador from "../../../assets/images/Iconos-Perfiles.svg";
import IconsPerfilModerado from "../../../assets/images/perfiles/Iconos-Perfiles-moderado.svg";
import IconsPerfilAgresivo from "../../../assets/images/perfiles/Iconos-Perfiles-agresivo.svg";



export const handlerInvestments = (typePeyment) =>{
    return typePeyment.toLowerCase() === 'usd' ? USD : PCL

}

export const handelPerfil = (perfil) => {
	return perfil.toLowerCase() === "conservador"
		? IconosPerfileConservador
		: perfil === "moderado"
		? IconsPerfilModerado
		: IconsPerfilAgresivo;
};
