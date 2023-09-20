import startIcons from "../../../assets/images/start-icons.svg";
import { HeadCards, HeadChips, HeadTitel, HmcText, MotivacionesGenerarl, Start, StartIcons } from "./HeadComponent";



export const HeadContainerCards = ({ fundName, fundPerfile }) => {
	return (
		<>
			<HeadCards>
				<HeadChips>
					<MotivacionesGenerarl>
						<HmcText>HMC</HmcText>
					</MotivacionesGenerarl>
					{fundPerfile && (
						<Start>
							<StartIcons src={startIcons} alt="start-icons" />
						</Start>
					)}
				</HeadChips>
				<HeadTitel>{fundName}</HeadTitel>
			</HeadCards>
		</>
	);
};
