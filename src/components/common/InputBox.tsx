import { Input, InputGroup, Text } from "@chakra-ui/react";
import { toCapitalise } from "../../utils/stringMethods";
import ShownBox from "./ShownBox";
interface InputBoxProps {
	element: {
		name: string;
		leftAddon: null | JSX.Element;
		type: string;
		value: string | number | boolean;
	};
	handleChange: (
		element: string | number | boolean,
		key: "sprite" | "x" | "y" | "show" | "size" | "direction" | string
	) => void;
}
export default function InputBox({
	element,
	handleChange
}: InputBoxProps): JSX.Element {
	return (
		<InputGroup alignItems={"center"} margin={"2"} width={"fit-content"}>
			{element.leftAddon}
			<label style={{ margin: "8px" }}>
				<Text fontWeight={"semibold"}>{toCapitalise(element.name)}</Text>
			</label>
			{typeof element.value == "boolean" ? (
				<ShownBox
					isShown={element.value}
					toggleChange={() => handleChange(!element.value, element.name)}
				/>
			) : (
				<Input
					fontSize={"xs"}
					borderRadius={"3xl"}
					maxWidth={element.type === "number" ? "3rem" : "5rem"}
					type={element.type}
					value={element.value}
					onChange={(e) => handleChange(e.target.value, element.name)}
				/>
			)}
		</InputGroup>
	);
}
