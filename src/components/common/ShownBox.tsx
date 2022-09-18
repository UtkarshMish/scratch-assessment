import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface ShownBoxProps {
	isShown: boolean;
	toggleChange: () => void;
}
const ShownBox: React.FunctionComponent<ShownBoxProps> = ({
	isShown,
	toggleChange
}) => {
	return (
		<Box display={"flex"} flexWrap={"wrap"}>
			<Button
				padding={0}
				border={isShown ? "1px solid #3373cc" : "1px solid #00000026"}
				borderRadius={"none"}
				onClick={() => toggleChange()}
				color={isShown ? "#3373cc" : "initial"}>
				<AiFillEye size={"1rem"} />
			</Button>
			<Button
				padding={0}
				border={!isShown ? "1px solid #3373cc" : "1px solid #00000026"}
				borderRadius={"none"}
				onClick={() => toggleChange()}
				color={isShown ? "initial" : "#3373cc"}>
				<AiFillEyeInvisible size={"1rem"} />
			</Button>
		</Box>
	);
};
export default ShownBox;
