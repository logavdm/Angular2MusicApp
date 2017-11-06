import { Component,Output, EventEmitter } from '@angular/core';
import {AppState} from '../appstate/app-state';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';

import {MenuToggle} from '../actions/commons/menu/menu-actions';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent  {

  

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  ToggleClick(){
  	this.ngRedux.dispatch({type:"SIDEMENUTOGGLE"} as MenuToggle);
   }

}
