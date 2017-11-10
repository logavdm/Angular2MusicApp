//common
import { Action } from 'redux';


//App State
import {AppState} from '../appstate/app-state';
import {DeviceInformation} from '../appstate/models/device-information';
import {AppStyle} from '../appstate/models/app-style';
import {AppTheme} from '../appstate/models/app-theme';


//actions
import {Actions} from '../actions/actions';
import {ScreenSizeChange} from '../actions/action-interfaces/screen/screen-size-change';
import {ThemeSwitcherToggle} from '../actions/action-interfaces/theme-switcher-toggle';
import {PlayerplayPauseToggle} from '../actions/action-interfaces/player/playerplay-pause-toggle';


export interface Store {
}

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
   
   case Actions.SIDEMENUTOGGLE: 
   return { 
        sideMenuToggle:(state.sideMenuToggle)?false:true,
        deviceInfo:state.deviceInfo,
        appTheme:state.appTheme,
        playerState:state.playerState
    };

   case Actions.SCREENRESIZE: 
     let ScreenSizeChangedVariable=(<ScreenSizeChange>action).deviceInfo;
   return { 
        sideMenuToggle:state.sideMenuToggle,
        deviceInfo:ScreenSizeChangedVariable,
        appTheme:state.appTheme,
        playerState:state.playerState
    };

    case Actions.THEMESWITCHER: 
    let AppThemeVariable=(<ThemeSwitcherToggle>action).AppTheme;
    AppThemeVariable.themeswitchToggle=AppThemeVariable.themeswitchToggle?false:true;
     return { 
          sideMenuToggle:state.sideMenuToggle,
          deviceInfo:ScreenSizeChangedVariable,
          appTheme:AppThemeVariable,
          playerState:state.playerState
      };

      case Actions.PLAYPAUSETOGGLE: 
       let PlayerPlayPauseToggleVariable=state.playerState;
       PlayerPlayPauseToggleVariable.isPlaying=PlayerPlayPauseToggleVariable.isPlaying?false:true;
       return { 
            sideMenuToggle:state.sideMenuToggle,
            deviceInfo:ScreenSizeChangedVariable,
            appTheme:state.appTheme,
            playerState:PlayerPlayPauseToggleVariable
        };

    default: return state;
  }
}
