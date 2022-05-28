import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(private http: HttpClient) { }

  getChallengesList() {
    return this.http.get(environment.challenges_list_api);
  }

  // for post implemention
  // createChallenge(body) {
  //   return this.http.post(environment.challenges_list_api, body)
  // }
}
