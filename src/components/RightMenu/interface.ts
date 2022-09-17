import { SpriteProps } from "../Sprites/interface";

export interface SpriteMenuElement {
	name: string;
	x: number;
	y: number;
	isShown: boolean;
	size: number;
	direction: number;
	Icon: React.FunctionComponent<SpriteProps>;
}
