import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  private getToken(){


    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/x-www-form-urlencoded");


    let post_data = {
      'client_id' : '',
      'client_secret' : '',
      'grant_type' : 'client_credentials',
    }

    this.http.post('https://accounts.spotify.com/api/token?grant_type=client_credentials', post_data, {
      headers: headers,
    })
      .subscribe(resp => {
      console.log("response %o, ", resp);
    });

    localStorage.setItem("auth_token", "value");
  }

  getQuery(query:string){
    const URL =`https://api.spotify.com/v1/${query}`;

    //let authToken = localStorage.getItem('auth_token');
    //'Authorization':`Bearer ${authToken}`

    const headers = new HttpHeaders({
        'Authorization':'Bearer QDx3YTBForRKLZpqU_YqOoS-o3HzF3qiDq51GGvynQfmEP5MWPIV4ZeIE8NTxWl9ku15gEvVrfLc35cDGA'
    });

    return this.http.get(URL,{headers})
  }

  getNewReleases(){

      return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`)
    //.pipe(map(data => data['artists'].items));

  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=MX`)
    .pipe(map(data => data['tracks']));

  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data => data['artists'].items));

  }
}
