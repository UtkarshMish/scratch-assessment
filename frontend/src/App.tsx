import { Box, ChakraProvider, theme } from "@chakra-ui/react";

import { useCallback, useState } from "react";
import Sidebar from "./components/LeftMenu/Sidebar";
import MidArea from "./components/MidSection/MidArea";
import { SpriteMenuElement } from "./components/RightMenu/interface";
import PreviewArea from "./components/RightMenu/PreviewArea";
import SpriteMenu from "./components/RightMenu/SpriteMenu";
import CatSprite from "./components/Sprites/CatSprite";
export const App = () => {
	const [spriteList, setSpriteList] = useState<SpriteMenuElement[]>([
		{
			name: "sprite1",
			isShown: true,
			direction: 90,
			size: 100,
			x: 0,
			y: 0,
			Icon: CatSprite
		}
	]);
	const [selectedSprite, setSelectedSprite] = useState<number>(0);
	const deleteHandler = useCallback(
		(key: number) => {
			setSpriteList([...spriteList.filter((_v, index) => index !== key)]);
		},
		[spriteList]
	);
	const updateHandler = useCallback(
		(sprite: SpriteMenuElement) => {
			spriteList[selectedSprite] = sprite;
			setSpriteList([...spriteList]);
		},
		[spriteList, selectedSprite]
	);
	const selectHandler = useCallback((index: number) => {
		setSelectedSprite(index);
	}, []);
	const addHandler = useCallback(
		(
			sprite: SpriteMenuElement = {
				name: "sprite1",
				isShown: true,
				direction: 90,
				size: 100,
				x: 0,
				y: 0,
				Icon: CatSprite
			}
		) => {
			sprite.x = spriteList.length * 10;
			sprite.y = spriteList.length * 10;
			setSpriteList([...spriteList, sprite]);
		},
		[spriteList]
	);

	return (
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
					<PreviewArea
						spritesList={spriteList}
						onSelectHandler={selectHandler}
						selectedSprite={selectedSprite}
						updateHandler={updateHandler}
					/>
					<SpriteMenu
						selectedSprite={selectedSprite}
						spritesList={spriteList}
						addHandler={addHandler}
						onSelectHandler={selectHandler}
						updateHandler={updateHandler}
						deleteHandler={deleteHandler}
					/>
				</Box>
			</Box>
		</ChakraProvider>
	);
};
