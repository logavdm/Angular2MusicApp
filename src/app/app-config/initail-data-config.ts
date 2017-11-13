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

const initAudio1:Audio={
	artist:'AR Rahman1',
	title:'Mumbea Vaa1',
	source:'assets/music/wave.mp3',
	image:'http://google.png'
}

const initAudio2:Audio={
	artist:'AR Rahman1',
	title:'Mumbea Vaa1',
	source:'assets/music/wave.mp3',
	image:'http://google.png'
}

const initAudio3:Audio={
	artist:'AR Rahman1',
	title:'Mumbea Vaa1',
	source:'assets/music/wave.mp3',
	image:'http://google.png'
}

const initPlayList:Audio[]=[initAudio1,initAudio2,initAudio3];

const initPlayerState:PlayerState={
	isAutoPlay:false,
	volume:0.5,
	isMuted:false,
	isPlaying:false,
	isNextAvailable:false,
	isPreviousAvailable:false,
	PlayList:initPlayList,
	isPlayListshow:false,
	trackduration:null,
	currentTime:null,

}

export const COLORS=['primary','warn','light','black','success','info','blue','red','grey'];
export const BODY_COLORS=['light','grey','dark','black'];

export const INITIAL_STATE: AppState = { 
	sideMenuToggle:false,
	deviceInfo:initDeviceInfo,
	appTheme:initAppTheme,
	playerState:initPlayerState
}