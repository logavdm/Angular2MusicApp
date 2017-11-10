import { Component,ElementRef, OnInit,ViewChild, AfterViewInit,EventEmitter,Input} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

//AppState
import {AppState} from '../appstate/app-state';
import {PlayerState} from '../appstate/models/player-state';

//actions
import {Actions} from '../actions/actions';
import {PlayerplayPauseToggle} from '../actions/action-interfaces/player/playerplay-pause-toggle';

//logger
import { NGXLogger } from 'ngx-logger';

//directive
import {DragableDirective} from '../directives/dragable.directive';
import {D3SliderDirective} from 'ng-d3-slider/d3-slider.directive'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

@select() readonly playerPlayPauseToggle:Observable<boolean>;
@select() readonly playerState:Observable<PlayerState>;
PlayerState:PlayerState;

@ViewChild('audioplayer') player: any;

controller: EventEmitter<any>;
demo:any;
elem: HTMLElement;
audioElem: any;
audioDuration:string;
src:string;
volume:number=0.5;
VolumeSlider:boolean;
initVolume:number=50;

@Input('options') options: any; 

  constructor(private logger: NGXLogger,private ngRedux: NgRedux<AppState>,elem: ElementRef) { 
      this.elem = elem.nativeElement;
      this.VolumeSlider=false;
  }

  ngOnInit() {
    this.playerState.subscribe(data=>{
      this.PlayerState=data;
    });


      this.audioElem = this.elem.querySelector('audio');

      this.audioElem.addEventListener('loadstart',()=>this.AudioElementLoadStart());
      this.audioElem.addEventListener('loadedmetadata',()=>this.logger.debug("Loaded meta data"));
      this.audioElem.addEventListener('finishedLoading',()=>this.logger.debug("Finish Loading:"+this.audioElem.volume));

      this.audioElem.addEventListener('progress',()=>this.logger.debug("Progress event start"+this.audioElem.volume));
       this.audioElem.addEventListener('loadeddata',()=>this.logger.debug("Loaded data"));

      this.audioElem.addEventListener('canplay',()=>this.logger.debug("Audio Can play"));

      this.audioElem.addEventListener('playing',()=>this.logger.debug("Audio will playing"+this.audioElem.volume));
      this.audioElem.addEventListener('waiting',()=>this.logger.debug("Audio will  waiting for play"));      

      this.audioElem.addEventListener('volumechange',()=>this.logger.debug("Audio Volumn changed"+this.audioElem.volume));
      
      this.audioElem.addEventListener('seeked',()=>this.logger.debug("Audio seeked"));
      this.audioElem.addEventListener('seeking',()=>this.logger.debug("audio seeking"));

  }

  AudioElementLoadStart(){
    this.src="assets/music/wave.mp3";    
     this.logger.debug("Audio Element Load Start Setting audio source success");
  }

  emitCurrentTrack(): void {
    this.logger.debug(this.audioElem.nativeElement);
  }

  ngAfterViewInit() {
  
  }

  PlayerPlayButtonToggle(){
    this.ngRedux.dispatch({type:'PLAYPAUSETOGGLE'} as PlayerplayPauseToggle);
    this.logger.debug("Player Play Pause button toggle cliked Value changed as :"+!this.PlayerState.isPlaying+" To "+this.PlayerState.isPlaying);
    if(this.PlayerState.isPlaying){
      this.audioElem.play();      
    }else{
       this.audioElem.pause();
    }
  }

 over(){
    this.VolumeSlider=true;
  }
  leave(){
    this.VolumeSlider=false;
  }
  muteButtonClick(){
    console.log("mute button clicked");
  }

  selectedValue(iSelectedValue){
    this.volume=iSelectedValue/100;
  }

}
