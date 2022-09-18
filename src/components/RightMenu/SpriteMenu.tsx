import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { IoMdTrash } from "react-icons/io";
import { toCapitalise } from "../../utils/stringMethods";
import DataBox from "./DataBox";
import { SpriteMenuElement } from "./interface";
interface SpriteMenuProps {
	spritesList: SpriteMenuElement[];
	deleteHandler: (key: number) => void;
	addHandler: (sprite?: SpriteMenuElement) => void;
}

export default function SpriteMenu({
	spritesList,
	addHandler,
	deleteHandler
}: SpriteMenuProps) {
	const [selectedElement, setSelectedElement] = useState<SpriteMenuElement>(
		spritesList[spritesList.length - 1]
	);

	const onSelectedChange = (
		value: any,
		type: "sprite" | "x" | "y" | "show" | "size" | "direction" | string
	) => {
		switch (type) {
			case "sprite":
				setSelectedElement({
					...selectedElement,
					name: value
				});
				break;
			case "direction":
				setSelectedElement({
					...selectedElement,
					direction: value === "" ? 0 : parseInt(value)
				});
				break;
			case "show":
				setSelectedElement({
					...selectedElement,
					isShown: value
				});
				break;
			case "x":
				setSelectedElement({
					...selectedElement,
					x: value === "" ? 0 : parseInt(value)
				});
				break;
			case "y":
				setSelectedElement({
					...selectedElement,
					y: value === "" ? 0 : parseInt(value)
				});
				break;
			case "size":
				setSelectedElement({
					...selectedElement,
					size: value === "" ? 0 : parseInt(value)
				});
				break;
		}
	};
	return (
		<Box height={"50%"} position={"relative"}>
			<DataBox {...selectedElement} handleChange={onSelectedChange} />
			<Box
				height={"50%"}
				className="bordered__box"
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
						className={"selectable"}
						position={"relative"}>
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
				))}
				<Button
					pos={"absolute"}
					top={"85%"}
					colorScheme={"blue"}
					padding={0}
					borderRadius={"50%"}
					background={"#3373cc"}
					color={"white"}
					left={"90%"}
					onClick={() => addHandler()}>
					<BsPlusCircle />
				</Button>
			</Box>
		</Box>
	);
}
