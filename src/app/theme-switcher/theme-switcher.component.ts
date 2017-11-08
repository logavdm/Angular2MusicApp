import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

//actions
import {ThemeSwitcherToggle} from '../actions/action-interfaces/theme-switcher-toggle';
import {COLORS,BODY_COLORS} from '../app-config/initail-data-config';

//AppState
import {AppState} from '../appstate/app-state';
import {AppTheme} from '../appstate/models/app-theme';

//logger
import { NGXLogger } from 'ngx-logger';



@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {

	@select() readonly appTheme:Observable<AppTheme>;
	AppStyle:AppTheme;
  Colors:string[];
  BodyColors:string[];
  SideBarColor:string;
  PlayerColor:string;
  BodyColor:string;


  constructor(private logger: NGXLogger,private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {

  	this.appTheme.subscribe(data=>{
  		this.AppStyle=data;
  	});
    this.Colors=COLORS; 	
    this.BodyColors=BODY_COLORS;
    this.SideBarColor=this.AppStyle.sideBarColor;
    this.PlayerColor=this.AppStyle.PlayerBarColor;
    this.BodyColor=this.AppStyle.bodyBackgroundColor;

    this.logger.debug(BODY_COLORS);


  }

  ToggleThemeSwitcher(){
    this.logger.debug("User Selected Theme Options is:"+this.SideBarColor+":"+this.PlayerColor);
    this.AppStyle.sideBarColor=this.SideBarColor;
    this.AppStyle.PlayerBarColor=this.PlayerColor;
    this.AppStyle.bodyBackgroundColor=this.BodyColor;
    this.ngRedux.dispatch({type:"THEMESWITCHER",AppTheme:this.AppStyle} as ThemeSwitcherToggle);
    this.logger.debug("Theme switcher Toggle Clicked");

  }

  

}
