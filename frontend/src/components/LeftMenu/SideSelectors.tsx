import { Box, Circle } from "@chakra-ui/react";
import { SIDE_MENU } from "../../constants/menu";
import IconComponent from "../common/IconComponent";
interface SideSelectorProps {
	selected: string | null;
	handleClick: (x: string) => void;
}
const SideSelectors: React.FunctionComponent<SideSelectorProps> = (props) => {
	const { selected, handleClick } = props;
	return (
		<Box
			display={"flex"}
			overflow="auto"
			flexDir={"column"}
			background={"gray.200"}
			width={"20"}
			minW={"fit-content"}
			borderRadius={"base"}>
			{Object.keys(SIDE_MENU).map((value) => (
				<IconComponent
					isSelected={selected === value}
					handleClick={() => handleClick(value)}
					key={value}
					title={value}
					icon={
						<Circle
							size="5"
							background={SIDE_MENU[value].color}
							border={"1px solid"}
							borderColor={SIDE_MENU[value].borderColor}
						/>
					}
				/>
			))}
		</Box>
	);
};
export default SideSelectors;
