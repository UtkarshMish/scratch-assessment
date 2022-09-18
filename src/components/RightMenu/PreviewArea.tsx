import { Box } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import React from "react";
import { SpriteMenuElement } from "./interface";

interface PreviewAreaProps {
	spritesList: SpriteMenuElement[];
	selectedSprite: number;
	onSelectHandler: (key: number) => void;
	updateHandler: (sprite: SpriteMenuElement) => void;
}
const PreviewArea: React.FunctionComponent<PreviewAreaProps> = (props) => {
	const { spritesList, selectedSprite, onSelectHandler, updateHandler } = props;
	const dragHandler = (xValue: number, yValue: number, index: number) => {
		const sprite = spritesList[selectedSprite];
		sprite.x = xValue;
		sprite.y = yValue;
		updateHandler(sprite);
	};
	return (
		<Box
			height={"66%"}
			background={"white"}
			marginBottom={"2"}
			display={"flex"}
			flexWrap={"wrap"}
			overflow={"auto"}
			borderRadius={"base"}>
			{spritesList.map((element, index) => (
				<Draggable
					key={index}
					onClick={() => onSelectHandler(index)}
					{...element}
					dragHandler={(x: number, y: number) => dragHandler(x, y, index)}
				/>
			))}
		</Box>
	);
};

export default PreviewArea;

interface DraggableProps extends SpriteMenuElement {
	dragHandler: (x: number, y: number) => void;
	onClick: () => void;
}
const Draggable: React.FunctionComponent<DraggableProps> = (sprite) => {
	const { isShown, Icon, size, x, y, direction, dragHandler, onClick } = sprite;
	const valueInDegrees = Math.floor((direction - 90) % 360);
	const controls = useDragControls();
	return (
		<motion.div
			onClick={() => onClick()}
			style={{
				translateX: x + "%",
				translateY: y + "%",
				width: "fit-content",
				height: "fit-content",
				display: isShown ? "initial" : "none",
				rotate: valueInDegrees
			}}
			drag
			dragConstraints={{
				top: 0,
				left: 0,
				bottom: 350,
				right: 285
			}}
			onDragCapture={() => onClick()}
			onDragEnd={(ev, info) => {
				dragHandler(x + Math.floor(info.delta.x), y + Math.floor(info.delta.y));
			}}
			dragMomentum={false}
			dragElastic={0}
			dragControls={controls}>
			<Icon width={String(size)} height={String(size)} />
		</motion.div>
	);
};
