import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { SIDE_MENU } from "../../constants/menu";
import ActionMenu from "../common/ActionMenu";
interface EventsPageProps {
	selected: string | null;
	handleScroll: (x: string) => void;
}
export default function EventsPage(props: EventsPageProps) {
	const { selected, handleScroll } = props;
	const sideMenuList = Object.keys(SIDE_MENU)
		.map((key) => {
			if (SIDE_MENU[key].menu_items != null) {
				return SIDE_MENU[key].menu_items?.map((ele) => ({
					category: key,
					title: ele.name,
					color: "white",
					background: SIDE_MENU[key].color
				}));
			} else {
				return null;
			}
		})

		.flat();
	return (
		<Box
			minW={"15rem"}
			marginRight={"1"}
			backgroundColor={"whiteAlpha.800"}
			paddingInline={"2"}
			borderRight={"1px solid #00000026"}
			overflow="auto"
			fontWeight={"semibold"}>
			{Object.keys(SIDE_MENU).map((element, index) => (
				<ScrollableEvents
					key={index}
					isSelected={element.toLowerCase() === selected?.toLocaleLowerCase()}
					element={element}
					sideMenuList={sideMenuList}
				/>
			))}
		</Box>
	);
}
interface ScrollableEventsProps {
	element: string;
	sideMenuList: (
		| { category: string; title: string; color: string; background: string }
		| null
		| undefined
	)[];
	isSelected?: boolean;
}
function ScrollableEvents(props: ScrollableEventsProps): JSX.Element {
	const { element, sideMenuList, isSelected } = props;

	const refElement = React.useRef<HTMLDivElement>(null);
	if (isSelected && refElement.current) {
		refElement.current.scrollIntoView({ behavior: "smooth", block: "start" });
	}
	return (
		<Box ref={refElement}>
			<Text fontSize={"md"}>{element}</Text>
			{sideMenuList
				.filter((val) => val?.category === element)
				.map((item) => (item ? <ActionMenu key={item.title} {...item} /> : null))
				.filter((val) => val != null)}
		</Box>
	);
}
