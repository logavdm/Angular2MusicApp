import { Component ,OnInit,HostListener} from '@angular/core';


import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { rootReducer } from './store/store';
import {INITIAL_STATE} from './app-config/initail-data-config';
import { Observable } from 'rxjs/Observable';
import { ResponsiveState } from 'ng2-responsive';

//AppState
import {AppState} from './appstate/app-state';
import {DeviceInformation} from './appstate/models/device-information';
import {AppTheme} from './appstate/models/app-theme';

//actions
import {Actions} from './actions/actions';
import {ScreenSizeChange} from './actions/action-interfaces/screen/screen-size-change';

//logger
import { NGXLogger } from 'ngx-logger';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@select() readonly sideMenuToggle:Observable<boolean>;
	@select() readonly deviceInfo:Observable<DeviceInformation>;
	@select() readonly appTheme:Observable<AppTheme>;
	toggle:boolean;
	AppStyleConfig:AppTheme;
	color:string;


constructor(private logger: NGXLogger,private ngRedux: NgRedux<AppState>,private devTools: DevToolsExtension,private responsive:ResponsiveState){

	INITIAL_STATE.deviceInfo=this.GetDeviceInformation();



	ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        null,
        devTools.isEnabled() ? [ devTools.enhancer() ] : []);

	}
	
	ngOnInit(){
		
		this.sideMenuToggle.subscribe(data=>{
			this.toggle=data;
			this.logger.debug('Side menu toggle initial state will be subscribed:'+JSON.stringify(this.toggle));
		});

		this.appTheme.subscribe(data=>{
			this.AppStyleConfig=data;
			this.logger.debug('Application style initial state will be subscribed as:'+JSON.stringify(this.AppStyleConfig));
		});

		
	}

	
	
	GetDeviceInformation():DeviceInformation{

		let deviceName,browserName,ScreenSize,Orientation:string;

		this.responsive.deviceObserver.subscribe(data=>{
			deviceName=data;
		});

		this.responsive.browserObserver.subscribe(data=>{
			browserName=data;
		});

		this.responsive.elementoObservar.subscribe(data=>{
			ScreenSize=data;
		});

		this.responsive.orientationObserver.subscribe(data=>{
		 	Orientation= data;
		 });

		let deviceInfo:DeviceInformation={
			device:deviceName,
			browser:browserName,
			orientation:Orientation,
			screenSize:ScreenSize
		};

		this.logger.debug('Device information function called and device information get as:'+JSON.stringify(deviceInfo));
		return deviceInfo;
	}


	 	@HostListener('window:resize')
    	onWindowResize() {
       		INITIAL_STATE.deviceInfo=this.GetDeviceInformation();
       		this.ngRedux.dispatch({type:Actions.SCREENRESIZE,deviceInfo:INITIAL_STATE.deviceInfo} as ScreenSizeChange );
    	}

	

}
