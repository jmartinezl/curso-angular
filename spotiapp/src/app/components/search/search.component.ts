import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  loading: boolean;

  constructor(private spotify:SpotifyService) {

  }

  ngOnInit() {
  }

  buscar(termino:string){

    if(!termino.trim())
      return false;

    this.loading=true;
    //console.log(termino);
    this.spotify.getArtistas(termino).subscribe((data:any)=>{
          //console.log(data.artists.items);
          this.artists = data;
          this.loading=false;
      });
  }

}
