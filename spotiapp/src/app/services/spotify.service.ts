import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  private getToken(){


      let post_data = {
        'client_id' : '5f3b0ad80e9645a09b7aa876bbd57b60',
        'client_secret' : '22fe8f657e674ee8a77b314b60667a8a',
        'grant_type' : 'client_credentials',
      }


       this.http.post('https://accounts.spotify.com/api/token?grant_type=client_credentials', post_data);

       localStorage.setItem("auth_token", "value");
  }

  getQuery(query:string){
    const URL =`https://api.spotify.com/v1/${query}`;

    //let authToken = localStorage.getItem('auth_token');
    //'Authorization':`Bearer ${authToken}`

    const headers = new HttpHeaders({
        'Authorization':'Bearer BQArjnBzQB9l7HLnJ7Y0UzrdlwpTHCxoXsy_INlJk8FoR-8QXEu3NU8pm0e8YMqGohJ3p9Zh03AhoGwYWgg'
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
