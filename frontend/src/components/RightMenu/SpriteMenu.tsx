import { Box, Button } from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import {
	axisValidation,
	nameValidation,
	sizeValidation
} from "../../utils/spriteValidatior";

import DataBox from "./DataBox";
import { SpriteMenuElement } from "./interface";
import SpriteBox from "./SpriteBox";
interface SpriteMenuProps {
	spritesList: SpriteMenuElement[];
	updateHandler: (sprite: SpriteMenuElement) => void;
	deleteHandler: (key: number) => void;
	onSelectHandler: (key: number) => void;
	addHandler: (sprite?: SpriteMenuElement) => void;
	selectedSprite: number;
}

export default function SpriteMenu(props: SpriteMenuProps) {
	const {
		spritesList,
		selectedSprite,
		addHandler,
		deleteHandler,
		updateHandler,
		onSelectHandler
	} = props;
	const onSelectedChange = (
		value: any,
		type: "sprite" | "x" | "y" | "show" | "size" | "direction" | string
	) => {
		switch (type) {
			case "sprite":
				updateHandler({
					...spritesList[selectedSprite],
					name: nameValidation(value) ? value : spritesList[selectedSprite].name
				});
				break;
			case "direction":
				updateHandler({
					...spritesList[selectedSprite],
					direction: value === "" ? value : parseInt(value)
				});
				break;
			case "show":
				updateHandler({
					...spritesList[selectedSprite],
					isShown: value
				});
				break;
			case "x":
				updateHandler({
					...spritesList[selectedSprite],
					x: axisValidation(value, -21, 151) ? value : spritesList[selectedSprite].x
				});
				break;
			case "y":
				updateHandler({
					...spritesList[selectedSprite],
					y: axisValidation(value, -21, 301) ? value : spritesList[selectedSprite].y
				});
				break;
			case "size":
				updateHandler({
					...spritesList[selectedSprite],
					size: sizeValidation(value) ? value : spritesList[selectedSprite].size
				});
				break;
		}
	};

	return (
		<Box height={"50%"} position={"relative"}>
			<DataBox {...spritesList[selectedSprite]} handleChange={onSelectedChange} />
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
					<SpriteBox
						onClick={() => onSelectHandler(index)}
						isSelected={selectedSprite === index}
						key={index}
						index={index}
						deleteHandler={deleteHandler}
						data={data}
					/>
				))}
				<Button
					pos={"absolute"}
					top={"82%"}
					colorScheme={"blue"}
					padding={0}
					borderRadius={"50%"}
					background={"#3373cc"}
					color={"white"}
					left={"95%"}
					onClick={() => addHandler()}>
					<BsPlusCircle />
				</Button>
			</Box>
		</Box>
	);
}
