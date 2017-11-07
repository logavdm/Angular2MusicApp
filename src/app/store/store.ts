import { Action } from 'redux';
import {AppState} from '../appstate/app-state';
import {DeviceInformation} from '../appstate/models/device-information';

//actions
import {Actions} from '../actions/actions';
import {ScreenSizeChange} from '../actions/action-interfaces/screen/screen-size-change';


export interface Store {
}

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
   
   case Actions.SIDEMENUTOGGLE: 
   return { 
        sideMenuToggle:(state.sideMenuToggle)?false:true,
        deviceInfo:state.deviceInfo
    };

   case Actions.SCREENRESIZE: 
     let ScreenSizeChangedVariable=(<ScreenSizeChange>action).deviceInfo;
   return { 
        sideMenuToggle:state.sideMenuToggle,
        deviceInfo:ScreenSizeChangedVariable
    };

    default: return state;
  }
}
