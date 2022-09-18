import React from "react";
import EventsPage from "./EventsPage";

import SideSelectors from "./SideSelectors";

export default function Sidebar() {
	const [selected, setSelected] = React.useState<string | null>(null);
	return (
		<React.Fragment>
			<SideSelectors selected={selected} handleClick={setSelected} />
			<EventsPage selected={selected} handleScroll={setSelected} />
		</React.Fragment>
	);
}
