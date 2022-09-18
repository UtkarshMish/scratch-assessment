import { Button, Text } from "@chakra-ui/react";

interface IconComponentProps {
	title: string;
	icon: any;
	isSelected?: boolean;
	handleClick: () => void;
}
export default function IconComponent({
	icon: Icon,
	title,
	isSelected,
	handleClick
}: IconComponentProps) {
	return (
		<Button
			background={isSelected ? "gainsboro" : "initial"}
			display={"flex"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			paddingBlock={"8"}
			onClick={handleClick}>
			{Icon}
			<Text
				fontSize={"0.75rem"}
				fontFamily={'"Helvetica Neue", Helvetica, sans-serif'}>
				{title}
			</Text>
		</Button>
	);
}
