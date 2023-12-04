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
				<HeadTitel fontSize={"clamp(0.96rem, 2vw, 1.8rem)"}>{fundName}</HeadTitel>
			</HeadCards>
		</>
	);
};
