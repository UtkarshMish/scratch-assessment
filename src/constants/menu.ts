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
				name: "move left",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "turn left",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "turn right",
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
				name: "goto x",
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
		borderColor: "#774dcb",
		menu_items: [
			{
				name: "say",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "think",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "switch",
				handler: (value: any) => {
					console.log(value);
				}
			}
		]
	},
	Control: {
		color: "#ffab19",
		borderColor: "#cf8b17",
		menu_items: [
			{
				name: "when key pressed",
				handler: (value: any) => {
					console.log(value);
				}
			},
			{
				name: "when sprite killed",
				handler: (value: any) => {
					console.log(value);
				}
			}
		]
	},
	Events: {
		color: "#ffd500",
		borderColor: "#cc9900",
		menu_items: [
			{
				name: "wait",
				handler: (value: any) => {
					console.log(value);
				}
			}
		]
	}
};
