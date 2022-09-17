import { Box } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import CatSprite from "../Sprites/CatSprite";
export default function PreviewArea() {
	const controls = useDragControls();
	return (
		<Box
			height={"66%"}
			background={"white"}
			marginBottom={"2"}
			borderRadius={"base"}>
			<motion.div
				style={{ width: "fit-content" }}
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
				<CatSprite />
			</motion.div>
		</Box>
	);
}
