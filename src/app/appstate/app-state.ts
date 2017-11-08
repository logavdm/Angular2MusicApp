import {DeviceInformation} from './models/device-information';
import {AppTheme} from './models/app-theme';
import {AppStyle} from './models/app-style';
export interface AppState {

	sideMenuToggle:boolean;
	deviceInfo:DeviceInformation;
	appTheme:AppTheme;
}
