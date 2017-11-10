import {AppState} from '../appstate/app-state';
import {DeviceInformation} from '../appstate/models/device-information';
import {AppTheme} from '../appstate/models/app-theme';
import {PlayerState} from '../appstate/models/player-state';
import {Audio} from '../appstate/models/Audio';

export interface InitailDataConfig {
}

const initDeviceInfo:DeviceInformation=null;
const initAppTheme:AppTheme={
	themeswitchToggle:false,
	PlayerBarColor:"light",
	bodyBackgroundColor:"black",
	sideBarColor:"primary"
};

const initAudio:Audio={
	artist:'AR Rahman',
	title:'Mumbea Vaa',
	source:'http://google.com',
	image:'http://google.png'
}

const initPlayList:Audio[]=[initAudio];

const initPlayerState:PlayerState={
	isAutoPlay:false,
	Volume:50,
	isPlaying:false,
	isNextAvailable:false,
	isPreviousAvailable:false,
	PlayList:initPlayList,
	trackduration:null,
	currentTime:null
}

export const COLORS=['primary','warn','light','black','success','info','blue','red','grey'];
export const BODY_COLORS=['light','grey','dark','black'];

export const INITIAL_STATE: AppState = { 
	sideMenuToggle:false,
	deviceInfo:initDeviceInfo,
	appTheme:initAppTheme,
	playerState:initPlayerState
}