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

export  const handelBgColorFund = (color) =>{
	const newColors = color.split(',').map(item => item === '1)'? item.replace(' 1)',' 0.5)'):item)
   return newColors.join(',')
   }

export const  handelHexToRgb = (hex) => {
	const r = parseInt(hex.substring(1,3), 16);
	const g = parseInt(hex.substring(3,5), 16);
	const b = parseInt(hex.substring(5,7), 16);
	return `rgba(${r}, ${g}, ${b}, 1)`
  }