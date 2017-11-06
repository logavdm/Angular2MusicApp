import { Action } from 'redux';
import {AppState} from '../appstate/app-state';
import {Actions} from '../actions/actions';

export interface Store {
}

export const INITIAL_STATE: AppState = {
	isMobile:false,  
	sideMenuToggle:false
}


export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
   
   case Actions.SIDEMENUTOGGLE: 
   return { 
        sideMenuToggle:(state.sideMenuToggle)?false:true,
        isMobile:false
    };

    default: return state;
  }
}
