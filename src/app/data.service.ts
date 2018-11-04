import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Villager } from './vo/villager';
import { Fish } from './vo/fish';

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

  getFishes() : Observable<Fish[]> {
    return this.http.get<Fish[]>(this.relativePath + '/assets/jsons/fish.json');
  }

  getIndex() : Observable<any[]> {
    return this.http.get<any[]>(this.relativePath + '/assets/jsons/index_all.json');
  }

  getVillagersIndex() : Observable<any[]> {
    return this.http.get<any[]>(this.relativePath + '/assets/jsons/index_villagers.json');
  }

  getVillagerImage(name: String) : String{
    return this.relativePath + '/assets/img/villagers/' + name + '.png';
  }

  getFishImage(name: String) : String{
    return this.relativePath + '/assets/img/fishes/' + name + '.png';
  }

  getVillagerIcon(name: String) : String{
    return this.relativePath + '/assets/img/villagers_icon/' + name + '_Icon.png';
  }

  getCalendarImage(name: String) : String{
    return this.relativePath + '/assets/img/calendar/' + name + '.jpg';
  }

}
