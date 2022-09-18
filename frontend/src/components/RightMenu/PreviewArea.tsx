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
	const dragHandler = (
		xValue: string | number,
		yValue: string | number,
		index: number
	) => {
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
			borderRadius={"base"}
			position={"relative"}>
			{spritesList.map((element, index) => (
				<Draggable
					key={element.name + index}
					onClick={() => onSelectHandler(index)}
					{...element}
					dragHandler={(x: string | number, y: string | number) =>
						dragHandler(x, y, index)
					}
				/>
			))}
		</Box>
	);
};

export default PreviewArea;

interface DraggableProps extends SpriteMenuElement {
	dragHandler: (x: string | number, y: string | number) => void;
	onClick: () => void;
}
const Draggable: React.FunctionComponent<DraggableProps> = (sprite) => {
	const { isShown, Icon, size, x, y, direction, dragHandler, onClick } = sprite;

	const valueInDegrees = Math.floor((direction - 90) % 360);
	const [isDragged, setIsDragged] = React.useState<boolean>(false);
	const controls = useDragControls();

	return (
		<motion.div
			onClick={() => onClick()}
			translate="yes"
			transformTemplate={(temp, val) => {
				if (isDragged) {
					dragHandler(
						parseInt(String(temp.x).replace("px", "")),
						parseInt(String(temp.y).replace("px", ""))
					);
					setIsDragged(false);
				}
				return val;
			}}
			style={{
				position: "absolute",
				width: "fit-content",
				height: "fit-content",
				display: isShown ? "initial" : "none",
				rotate: valueInDegrees,
				translateX: x + "px",
				translateY: y + "px"
			}}
			drag
			dragConstraints={{
				top: 0,
				left: 0,
				bottom: 135,
				right: 150
			}}
			onDragStart={() => onClick()}
			onDragEnd={() => setIsDragged(true)}
			dragMomentum={false}
			dragElastic={0}
			dragControls={controls}>
			<Icon width={String(size)} height={String(size)} />
		</motion.div>
	);
};
