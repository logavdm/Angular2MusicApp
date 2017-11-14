import { Component,ElementRef, OnInit,ViewChild, AfterViewInit,EventEmitter,Input,Output,Pipe} from '@angular/core';
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

//volume slider
import {D3SliderDirective} from 'ng-d3-slider/d3-slider.directive'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

@select() readonly playerPlayPauseToggle:Observable<boolean>;
@select() readonly playerState:Observable<PlayerState>;
@Output() playerEvent: EventEmitter<any> = new EventEmitter();
@Output() playerControlEvent: EventEmitter<any> = new EventEmitter();

PlayerState:PlayerState;
PlayList:Audio[];
nowPlaying:Audio;
isNextAvailable:boolean=false;
isPreviousAvailable:boolean=false;

elem: HTMLElement;
audioElem: any;

volume:number;
VolumeSlider:boolean;
sliderVolume:number;
duration:string="00.00";
index:number=0;



  constructor(private logger: NGXLogger,private ngRedux: NgRedux<AppState>,elem: ElementRef) { 
      this.elem = elem.nativeElement;
      this.VolumeSlider=false;
  }

  ngOnInit() {

      this.playerState.subscribe(data=>{
        this.PlayerState=data;
        this.PlayList=this.PlayerState.PlayList;
        this.volume=this.PlayerState.volume;
        this.sliderVolume=this.volume*100;
      });

      this.audioElem = this.elem.querySelector('audio');

      if(this.PlayerState.PlayList.length){
        this.nowPlaying=this.PlayerState.PlayList[0];
        this.audioElem.src=this.nowPlaying.source;
         this.checkNextTrackAvailable();
      }

      this.audioElem.addEventListener('loadstart',()=>this.AudioElementLoadStart());
      this.audioElem.addEventListener('loadedmetadata',()=>this.logger.debug("Loaded meta data"));
      this.audioElem.addEventListener('finishedLoading',()=>this.logger.debug("Finish Loading:"));
      this.audioElem.addEventListener('progress',()=>this.logger.debug("Progress event start"));
      this.audioElem.addEventListener('loadeddata',()=>this.logger.debug("Loaded data"));
      this.audioElem.addEventListener('canplay',()=>this.AudioCanPlay());
      this.audioElem.addEventListener('playing',()=>this.logger.debug("Audio will playing"));
      this.audioElem.addEventListener('waiting',()=>this.logger.debug("Audio will  waiting for play"));      
      this.audioElem.addEventListener('volumechange',()=>this.logger.debug("Audio Volumn changed"));     
      this.audioElem.addEventListener('seeked',()=>this.logger.debug("Audio seeked"));
      this.audioElem.addEventListener('seeking',()=>this.logger.debug("audio seeking"));
  }

  AudioElementLoadStart(){
      this.logger.debug("Audio Source Loading Start");
  }

  AudioCanPlay(){
    this.logger.debug("Audio Can Play");
    this.duration=this.audioElem.duration.toString();
    this.logger.debug("Audio Duration Get Success:"+this.duration);
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

  PlayerNextButtonClick(){
     this.index=this.PlayerState.PlayList.indexOf(this.nowPlaying)+1;
    if(this.index<this.PlayerState.PlayList.length){
      if(this.PlayerState.isPlaying)
      this.ngRedux.dispatch({type:'PLAYPAUSETOGGLE'} as PlayerplayPauseToggle);  
      this.audioElem.src=this.PlayerState.PlayList[this.index].source;
      this.nowPlaying=this.PlayerState.PlayList[this.index];
    }else{
      this.logger.debug("Next Song Not Available on the PlayList");
    }
    this.checkNextTrackAvailable();
  }

   PlayerPreviousButtonClick(){
     this.index=this.PlayerState.PlayList.indexOf(this.nowPlaying)-1;
    if(this.index>=0){
      if(this.PlayerState.isPlaying)
      this.ngRedux.dispatch({type:'PLAYPAUSETOGGLE'} as PlayerplayPauseToggle);  
      this.audioElem.src=this.PlayerState.PlayList[this.index].source;
      this.nowPlaying=this.PlayerState.PlayList[this.index];
    }else{
      this.logger.debug("Previous Song Not Available on the PlayList");
    }
    this.checkPreviousTrackAvailable();
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

  checkNextTrackAvailable(){
    if((this.PlayerState.PlayList.length-1)>this.PlayList.indexOf(this.nowPlaying)){
          this.isNextAvailable=true;
     }else{ 
        this.isNextAvailable=false;
      }
      this.checkPreviousTrackAvailable();
  }

  checkPreviousTrackAvailable(){
    if(this.PlayList.indexOf(this.nowPlaying)==0){
          this.isPreviousAvailable=false;
     }else{ 
        this.isPreviousAvailable=true;
     }

     if((this.PlayerState.PlayList.length-1)>this.PlayList.indexOf(this.nowPlaying)){
          this.isNextAvailable=true;
     }else{ 
        this.isNextAvailable=false;
      }
  }



}
