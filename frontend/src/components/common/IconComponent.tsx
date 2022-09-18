import { Box, Text } from "@chakra-ui/react";

interface IconComponentProps {
	title: string;
	icon: any;
}
export default function IconComponent({
	icon: Icon,
	title
}: IconComponentProps) {
	return (
		<Box
			paddingBlock={"2"}
			display={"flex"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}>
			{Icon}
			<Text
				fontSize={"0.75rem"}
				fontFamily={'"Helvetica Neue", Helvetica, sans-serif'}>
				{title}
			</Text>
		</Box>
	);
}
