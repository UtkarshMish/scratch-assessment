import { Box, Button, Text } from "@chakra-ui/react";
import { toCapitalise } from "../../utils/stringMethods";
import { SpriteMenuElement } from "./interface";

interface SpriteMenuProps {
	spritesList: SpriteMenuElement[];
	deleteHandler: (key: number) => void;
}

export default function SpriteMenu({
	spritesList,
	deleteHandler
}: SpriteMenuProps) {
	return (
		<Box
			className="bordered__box"
			height={"33%"}
			background={"#90cdf4"}
			borderRadius={"base"}
			display={"flex"}
			flexDir={"row"}
			overflow={"auto"}
			flexWrap={"wrap"}>
			{spritesList.map((data, index) => (
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
					className={"selectable"}>
					<Button
						onClick={() => deleteHandler(index)}
						colorScheme={"blue"}
						borderRadius={"full"}
						alignSelf="flex-end">
						D
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
			))}
		</Box>
	);
}
