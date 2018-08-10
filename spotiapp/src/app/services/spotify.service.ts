import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){

      const headers = new HttpHeaders({
          'Authorization':'Bearer BQCcAhWeQW9Dqh-yp_GIXIZIu1nSc6vuR-qk8qJcoDI_Vtf_2fLfIE0drDczcMTDV9-CxhcSdrY8j92QKJ7F_v9dt7A5Qm2V5gANz_xJ-alxO9efjOGcblPnj4Wnzx4gSanGNsRG6VBDoGCMtY_K'
      });
      return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});

      )

  }
}
