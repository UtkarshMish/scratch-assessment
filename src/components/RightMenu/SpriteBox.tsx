import { Box, Button, Text } from "@chakra-ui/react";
import { IoMdTrash } from "react-icons/io";
import { toCapitalise } from "../../utils/stringMethods";
import { SpriteMenuElement } from "./interface";
interface SpriteBoxProps {
	deleteHandler: (key: number) => void;
	index: number;
	data: SpriteMenuElement;
	isSelected: boolean;
	onClick: () => void;
}
const SpriteBox: React.FunctionComponent<SpriteBoxProps> = (props) => {
	const { index, deleteHandler, data, isSelected, onClick } = props;
	return (
		<Box
			background={"white"}
			margin={"2.5"}
			display={"flex"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			height={"fit-content"}
			borderRadius={"md"}
			width={"fit-content"}
			cursor={"pointer"}
			className={"selectable"}
			position={"relative"}
			onClick={onClick}
			boxShadow={isSelected ? "0px 0px 0px 4px #4d97ff59" : "none"}>
			<Button
				position={"absolute"}
				top={"-2.5"}
				left={"12"}
				zIndex={1}
				onClick={() => deleteHandler(index)}
				colorScheme={"blue"}
				padding={0}
				borderRadius={"50%"}
				alignSelf="flex-end">
				<IoMdTrash />
			</Button>
			<Box paddingBlock={"1"} paddingInline={"2.5"}>
				<data.Icon width={"45"} height={"45"} />
			</Box>
			<Text
				width={"100%"}
				textAlign={"center"}
				fontSize={"xs"}
				fontWeight={"semibold"}
				color={"#ffffff"}
				paddingBlock={"1"}
				paddingInline={"2.5"}
				borderEndStartRadius={"md"}
				borderEndEndRadius={"md"}
				background={"#4d97ff"}>
				{toCapitalise(data.name)}
			</Text>
		</Box>
	);
};

export default SpriteBox;
