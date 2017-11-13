import { Component,ElementRef, OnInit,ViewChild, AfterViewInit,EventEmitter,Input} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

//AppState
import {AppState} from '../appstate/app-state';
import {PlayerState} from '../appstate/models/player-state';
import {Audio} from '../appstate/models/Audio';

//actions
import {Actions} from '../actions/actions';
import {PlayerplayPauseToggle} from '../actions/action-interfaces/player/playerplay-pause-toggle';
import {PlaylistToggle} from '../actions/action-interfaces/player/playlist-toggle';
import {MuteToggle} from '../actions/action-interfaces/player/mute-toggle';

//logger
import { NGXLogger } from 'ngx-logger';

//directive
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
PlayList:Audio[];
nowPlaying:Audio={artist:'',title:'',source:'',image:''};



elem: HTMLElement;
audioElem: any;

volume:number=0.5;
VolumeSlider:boolean;
initVolume:number=50;
src:string;


  constructor(private logger: NGXLogger,private ngRedux: NgRedux<AppState>,elem: ElementRef) { 
      this.elem = elem.nativeElement;
      this.VolumeSlider=false;
  }

  ngOnInit() {

      this.playerState.subscribe(data=>{
        this.PlayerState=data;
        this.logger.log("Playe state Subscribe success");
      });

      this.audioElem = this.elem.querySelector('audio');
      this.audioElem.addEventListener('loadstart',()=>this.AudioElementLoadStart());
      this.audioElem.addEventListener('loadedmetadata',()=>this.logger.debug("Loaded meta data"));
      this.audioElem.addEventListener('finishedLoading',()=>this.logger.debug("Finish Loading:"));
      this.audioElem.addEventListener('progress',()=>this.logger.debug("Progress event start"));
      this.audioElem.addEventListener('loadeddata',()=>this.logger.debug("Loaded data"));
      this.audioElem.addEventListener('canplay',()=>this.logger.debug("Audio Can play"));
      this.audioElem.addEventListener('playing',()=>this.logger.debug("Audio will playing"));
      this.audioElem.addEventListener('waiting',()=>this.logger.debug("Audio will  waiting for play"));      
      this.audioElem.addEventListener('volumechange',()=>this.logger.debug("Audio Volumn changed"));     
      this.audioElem.addEventListener('seeked',()=>this.logger.debug("Audio seeked"));
      this.audioElem.addEventListener('seeking',()=>this.logger.debug("audio seeking"));
  }

  AudioElementLoadStart(){
     if(this.PlayerState.PlayList.length){
       this.nowPlaying=this.PlayerState.PlayList[0];
       this.src=this.nowPlaying.source;
       this.logger.debug("initial audio will be set as source audio:"+this.PlayerState.PlayList[0]);
     }else{
       this.logger.debug("Initial audio list is empty");
     }
  }



  emitCurrentTrack(): void {
    this.logger.debug(this.audioElem.nativeElement);
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
  
  selectedValue(iSelectedValue){
    this.volume=iSelectedValue/100;
  }

  PlayListToggle(){
   this.ngRedux.dispatch({type:"PLAYLISTTOGGLE"} as PlaylistToggle);
   this.logger.debug("Player Playlist Toggle Action Performed");
  }

  MuteToggle(){
    this.ngRedux.dispatch({type:"PLAYERMUTETOGGLE"} as MuteToggle);
    this.audioElem.muted=this.PlayerState.isMuted?true:false;  
    this.logger.debug("Mute Button toggle Action Performed");
  }

}
