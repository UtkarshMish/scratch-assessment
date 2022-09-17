import React from "react";
import EventsPage from "./EventsPage";

import SideSelectors from "./SideSelectors";

export default function Sidebar() {
	return (
		<React.Fragment>
			<SideSelectors />
			<EventsPage />
		</React.Fragment>
	);
}
