interface SideMenu {
	[x: string]: {
		color: string;
		borderColor: string;
		menu_items?: { name: string; handler: (value: any) => void }[];
	};
}
export const SIDE_MENU: SideMenu = {
	Motion: {
		color: "#4c97ff",
		borderColor: "#3373cc",
		menu_items: [
			{
				name: "move",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "turn",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "goto",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "glide",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "point",
				handler: (value: any) => {
					console.log(value);
				}
			}
		]
	},
	Looks: {
		color: "#9966ff",
		borderColor: "#774dcb"
	},
	Control: {
		color: "#ffab19",
		borderColor: "#cf8b17"
	},
	Events: {
		color: "#ffd500",
		borderColor: "#cc9900"
	}
};
