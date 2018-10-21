import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Villager } from './vo/villager';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  relativePath: String = '';

  constructor(private http: HttpClient) {
    if (window.location.href.indexOf("stardew-valley") > -1) {
      this.relativePath = '/stardew-valley';
    }
   }

  getVillagers() : Observable<Villager[]> {
    return this.http.get<Villager[]>(this.relativePath + '/assets/jsons/villagers.json');
  }

  getIndex() : Observable<any[]> {
    return this.http.get<any[]>(this.relativePath + '/assets/jsons/index_villagers.json');
  }

}
