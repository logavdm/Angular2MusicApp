import {AppTheme} from '../../appstate/models/app-theme';
import { Action } from 'redux';

export interface ThemeSwitcherToggle extends Action {
	type:string;
	AppTheme:AppTheme;
}
