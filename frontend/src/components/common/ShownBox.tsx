import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface ShownBoxProps {
	isShown: boolean;
	disabled?: boolean;
	toggleChange: () => void;
}
const ShownBox: React.FunctionComponent<ShownBoxProps> = ({
	isShown,
	disabled = false,
	toggleChange
}) => {
	return (
		<Box display={"flex"} flexWrap={"wrap"}>
			<Button
				disabled={disabled}
				padding={0}
				border={isShown ? "1px solid #3373cc" : "1px solid #00000026"}
				borderRadius={"none"}
				onClick={() => toggleChange()}
				color={isShown ? "#3373cc" : "initial"}>
				<AiFillEye size={"1rem"} />
			</Button>
			<Button
				disabled={disabled}
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
