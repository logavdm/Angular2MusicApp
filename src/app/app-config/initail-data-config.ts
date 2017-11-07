import {AppState} from '../appstate/app-state';
import {DeviceInformation} from '../appstate/models/device-information';
export interface InitailDataConfig {
}

const initDeviceInfo:DeviceInformation=null;

export const INITIAL_STATE: AppState = { 
	sideMenuToggle:false,
	deviceInfo:initDeviceInfo
}