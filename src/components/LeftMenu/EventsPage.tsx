import { Box } from "@chakra-ui/react";
import { SIDE_MENU } from "../../constants/menu";
import ActionMenu from "../common/ActionMenu";

export default function EventsPage() {
	const sideMenuList = Object.keys(SIDE_MENU)
		.map((key) => {
			if (SIDE_MENU[key].menu_items != null) {
				return SIDE_MENU[key].menu_items?.map((ele) => ({
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
			{sideMenuList
				.map((item) => (item ? <ActionMenu {...item} /> : null))
				.filter((val) => val != null)}
		</Box>
	);
}
