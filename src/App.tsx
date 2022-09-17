import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import Sidebar from "./components/LeftMenu/Sidebar";
import MidArea from "./components/MidSection/MidArea";
import PreviewArea from "./components/RightMenu/PreviewArea";
import SpriteMenu from "./components/RightMenu/SpriteMenu";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box
			display="flex"
			flexDir={"row"}
			flexWrap={"wrap"}
			fontSize="xl"
			height={"100vh"}
			overflow={"auto"}
			background={"blue.200"}>
			<Box
				display={"flex"}
				width={"container.lg"}
				background={"white"}
				height="calc(100vh - 2rem)"
				margin={"2.5"}
				borderRadius={"base"}>
				<Sidebar />
				<MidArea />
			</Box>
			<Box
				display={"flex"}
				width={"sm"}
				flexDir={"column"}
				height="calc(100vh - 2rem)"
				margin={"2.5"}
				borderRadius={"base"}>
				<PreviewArea />
				<SpriteMenu />
			</Box>
		</Box>
	</ChakraProvider>
);
