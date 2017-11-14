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
	artist:'AR Rahman',
	title:'Kaattu Sirukki',
	source:'http://www.friendstamilmp3.com/songs2/A%20R%20Rahman%20Hits/Raavanan/Kaattu%20Sirukki.mp3',
	image:'http://logavdm.me/StarMusiq/images/songs/Jodhaa-Akbar_B.jpg'
}

const initAudio2:Audio={
	artist:'AR Rahman2',
	title:'Alle Alle',
	source:'http://www.friendstamilmp3.com/songs2/A%20R%20Rahman%20Hits/Boys/Ale%20Ale.mp3',
	image:'http://logavdm.me/StarMusiq/images/songs/Kadhalil-Vizhunthen_B.jpg'
}

const initAudio3:Audio={
	artist:'AR Rahman3',
	title:'Mumbea Vaa3',
	source:'http://www.friendstamilmp3.com/songs2/A%20R%20Rahman%20Hits/Raavanan/Usure%20Pogudhey.mp3',
	image:'http://logavdm.me/StarMusiq/images/songs/Kaalai_B.jpg'
}

const initPlayList:Audio[]=[initAudio1,initAudio2,initAudio3];

const initPlayerState:PlayerState={
	isAutoPlay:false,
	volume:0.75,
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
	sideMenuToggle:true,
	deviceInfo:initDeviceInfo,
	appTheme:initAppTheme,
	playerState:initPlayerState
}