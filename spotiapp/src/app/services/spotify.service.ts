import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const URL =`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
        'Authorization':'Bearer BQD19eHBuX8BoI2ak37WMAwV2NqIOil6KyQ38bT8pF9mj7ofHyZmWweDn_7jw40p4AS_UXnESya0QBko70rVMcEJ6iolIfWIwdCj1_7jwsLa97lH_mn349ziV5P-1fy7OlnXcM8yWrhhwWKG84sE'
    });

    return this.http.get(URL,{headers})
  }

  getNewReleases(){

      return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data => data['artists'].items));

  }
}
