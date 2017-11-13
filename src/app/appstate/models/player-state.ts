import {Audio} from './Audio';

export interface PlayerState {
	isAutoPlay:boolean;
	volume:number;
	isMuted:boolean;
	isPlaying:boolean;
	isNextAvailable:boolean;
	isPreviousAvailable:boolean;
	PlayList:Audio[];
	isPlayListshow:boolean;
	trackduration:string;
	currentTime:string;
}
