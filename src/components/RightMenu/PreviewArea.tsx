import { Box } from "@chakra-ui/react";
import CatSprite from "../Sprites/CatSprite";

export default function PreviewArea() {
	return (
		<Box
			height={"66%"}
			background={"white"}
			marginBottom={"2"}
			borderRadius={"base"}>
			<CatSprite />
		</Box>
	);
}
