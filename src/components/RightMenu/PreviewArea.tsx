import { Box } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import React from "react";
import { SpriteProps } from "../Sprites/interface";
import { SpriteMenuElement } from "./interface";

interface PreviewAreaProps {
	spritesList: SpriteMenuElement[];
	selectedSprite: number;
	onSelectHandler: (key: number) => void;
}
const PreviewArea: React.FunctionComponent<PreviewAreaProps> = ({
	spritesList,
	selectedSprite,
	onSelectHandler
}) => {
	return (
		<Box
			height={"66%"}
			background={"white"}
			marginBottom={"2"}
			display={"flex"}
			flexWrap={"wrap"}
			overflow={"auto"}
			borderRadius={"base"}>
			{spritesList.map(({ isShown, size, Icon }, index) => (
				<Draggable

					key={index} isShown={isShown} Icon={Icon} size={size} />
			))}
		</Box>
	);
};

export default PreviewArea;

interface DraggableProps {
	isShown: boolean;
	Icon: React.FunctionComponent<SpriteProps>;
	size: number;
}
const Draggable: React.FunctionComponent<DraggableProps> = ({
	isShown,
	Icon,
	size
}) => {
	const controls = useDragControls();
	return (
		<motion.div
			style={{
				width: "fit-content",
				display: isShown ? "initial" : "none"
			}}
			drag
			dragConstraints={{
				top: 0,
				left: 0,
				bottom: 350,
				right: 285
			}}
			dragMomentum={false}
			dragElastic={0}
			dragControls={controls}>
			<Icon width={String(size)} height={String(size)} />
		</motion.div>
	);
};
