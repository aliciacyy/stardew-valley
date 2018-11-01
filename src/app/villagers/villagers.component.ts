import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.css']
})
export class VillagersComponent implements OnInit {

  villagers: any;
  relativePath: String = '';
  bachelors: ['Alex', 'Elliott', 'Harvey', 'Sam', 'Sebastian', 'Shane'];
  bachelorettes: ['Abigail', 'Emily', 'Haley', 'Leah', 'Maru', 'Penny'];

  constructor(private http: HttpClient, private dataService : DataService) { 
    
  }

  ngOnInit() {
    this.dataService.getVillagers().subscribe(villagers => this.villagers = villagers);
    /*if (window.location.href.indexOf("stardew-valley") > -1) {
      this.relativePath = '/stardew-valley';
    }
    
    this.http.get(this.relativePath + '/assets/jsons/villagers.json').subscribe(data => {
      this.villagers = data;
    });*/
  }

}
