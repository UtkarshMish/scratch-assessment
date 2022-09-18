import { SpriteProps } from "../Sprites/interface";

export interface SpriteMenuElement {
	name: string;
	x: string | number;
	y: string | number;
	isShown: boolean;
	size: number;
	direction: number;
	Icon: React.FunctionComponent<SpriteProps>;
}
