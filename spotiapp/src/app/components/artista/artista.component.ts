import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any={};
  topTracks:any={};
  loading: boolean;

  constructor(private activatedRouter:ActivatedRoute,private spotifyService:SpotifyService) {
    this.activatedRouter.params.subscribe(params =>{
      this.getArtista(params['id'])
      this.getTopTracks(params['id'])
    });
 }

 getArtista(id:string){
   this.loading=true;
   this.spotifyService.getArtista(id)
   .subscribe(artista =>{
     this.artista=artista;
     this.loading=false;
   })
 }

 getTopTracks(id:string){
   //this.loading=true;
   this.spotifyService.getTopTracks(id)
   .subscribe(topTracks =>{
     this.topTracks=topTracks;
   })
 }

  ngOnInit() {
  }

}
