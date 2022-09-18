import { Box } from "@chakra-ui/react";
import { GiHorizontalFlip, GiVerticalFlip } from "react-icons/gi";
import InputBox from "../common/InputBox";
import { SpriteMenuElement } from "./interface";
interface DataBoxProps extends SpriteMenuElement {
	handleChange: (
		element: string | number | boolean,
		key: "sprite" | "x" | "y" | "show" | "size" | "direction" | string
	) => void;
}
export default function DataBox({
	name,
	direction,
	isShown,
	size,
	x,
	y,
	handleChange
}: DataBoxProps) {
	const INPUT_ELEMENTS = [
		{
			name: "sprite",
			leftAddon: null,
			type: "text",
			value: name
		},
		{
			name: "x",
			leftAddon: <GiHorizontalFlip fontWeight={"700"} size={"1.5rem"} />,
			type: "number",
			value: x
		},
		{
			name: "y",
			leftAddon: <GiVerticalFlip fontWeight={"700"} size={"1.5rem"} />,
			type: "number",
			value: y
		},
		{
			name: "show",
			leftAddon: null,
			type: "boolean",
			value: isShown
		},
		{
			name: "size",
			leftAddon: null,
			type: "number",
			value: size
		},
		{
			name: "direction",
			leftAddon: null,
			type: "number",
			value: direction
		}
	];
	return (
		<Box
			background={"white"}
			borderRadius={"base"}
			fontSize={"xs"}
			display={"flex"}
			flexWrap={"wrap"}>
			{INPUT_ELEMENTS.map((element) => (
				<InputBox key={element.name} element={element} handleChange={handleChange} />
			))}
		</Box>
	);
}
