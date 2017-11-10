import {Audio} from './Audio';

export interface PlayerState {
	isAutoPlay:boolean;
	Volume:number;
	isPlaying:boolean;
	isNextAvailable:boolean;
	isPreviousAvailable:boolean;
	PlayList:Audio[];
	trackduration:string;
	currentTime:string;
}
