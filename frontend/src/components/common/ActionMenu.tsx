import { Box, Text } from "@chakra-ui/react";

interface ActionMenuProps {
	title: string | null | undefined;
	color: string;
	background: string;
}

export default function ActionMenu(props: ActionMenuProps) {
	const { title, color = "white", background = "purple" } = props;
	return (
		<Box
			background={background}
			marginBlock={"2"}
			color={color}
			padding={"2"}
			borderRadius={"xl"}>
			<Text fontSize={"xs"}>{title}</Text>
		</Box>
	);
}
