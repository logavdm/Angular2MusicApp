import {AppState} from '../appstate/app-state';
import {DeviceInformation} from '../appstate/models/device-information';
import {AppTheme} from '../appstate/models/app-theme';

export interface InitailDataConfig {
}

const initDeviceInfo:DeviceInformation=null;
const initAppTheme:AppTheme={
	themeswitchToggle:false,
	PlayerBarColor:"grey",
	bodyBackgroundColor:"black",
	sideBarColor:"primary"
};

export const COLORS=['primary','warn','light','black','success','info','blue','danger','grey'];
export const BODY_COLORS=['light','grey','dark','black'];

export const INITIAL_STATE: AppState = { 
	sideMenuToggle:false,
	deviceInfo:initDeviceInfo,
	appTheme:initAppTheme
}