import { Box, Circle } from "@chakra-ui/react";
import { SIDE_MENU } from "../../constants/menu";
import IconComponent from "../common/IconComponent";

export default function SideSelectors() {
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			background={"gray.200"}
			width={"20"}
			borderRadius={"base"}>
			{Object.keys(SIDE_MENU).map((value) => (
				<IconComponent
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
}
