import { Box, Text } from "@chakra-ui/react";
import { toCapitalise } from "../../utils/stringMethods";
import { SpriteMenuElement } from "./interface";

interface SpriteMenuProps {
	spritesList: SpriteMenuElement[];
}

export default function SpriteMenu({ spritesList }: SpriteMenuProps) {
	return (
		<Box height={"33%"} background={"white"} borderRadius={"base"}>
			{spritesList.map((data) => (
				<Box
					background={"gray.300"}
					margin={"2.5"}
					borderRadius={"md"}
					width={"fit-content"}
					cursor={"pointer"}
					className={"selectable"}>
					<Box paddingBlock={"1"} paddingInline={"2.5"}>
						<data.Icon width={"45"} height={"45"} />
					</Box>
					<Text
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
