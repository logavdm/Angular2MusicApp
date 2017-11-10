import {DeviceInformation} from './models/device-information';
import {AppTheme} from './models/app-theme';
import {AppStyle} from './models/app-style';
import {PlayerState} from './models/player-state';
export interface AppState {

	sideMenuToggle:boolean;
	deviceInfo:DeviceInformation;
	appTheme:AppTheme;
	playerState:PlayerState;
}
