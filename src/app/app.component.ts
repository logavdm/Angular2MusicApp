import { Component ,OnInit,OnChanges} from '@angular/core';
import {AppState} from './appstate/app-state';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { INITIAL_STATE, rootReducer } from './store/store';
import { Observable } from 'rxjs/Observable';
import { ResponsiveState } from 'ng2-responsive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@select() readonly sideMenuToggle:Observable<boolean>;
	toggle:boolean;
  

constructor(private ngRedux: NgRedux<AppState>,devTools: DevToolsExtension,responsive:ResponsiveState){

	ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        null,
        devTools.isEnabled() ? [ devTools.enhancer() ] : []);

		responsive.deviceObserver.subscribe(data=>{
			console.log(data);
		});
		responsive.browserObserver.subscribe(data=>{
			console.log(data);
		});
		responsive.userAgentObserver.subscribe(data=>{
			console.log(data);
		});
		responsive.elementoObservar.subscribe(data=>{
			console.log(data);
		});
		responsive.orientationObserver.subscribe(data=>{
			console.log(data);
		});
	
	}
	
	ngOnInit(){
		this.sideMenuToggle.subscribe(data=>{
			this.toggle=data;

		});
	}

	





	

}
