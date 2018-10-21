import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { Villager } from '../../vo/villager';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-villager-detail',
  templateUrl: './villager-detail.component.html',
  styleUrls: ['./villager-detail.component.css']
})
export class VillagerDetailComponent implements OnInit {

  villager : Villager = new Villager;
  villagers : any;
  error = false;
  
  constructor(private route : ActivatedRoute, private http: HttpClient, private dataService : DataService) { 
    route.params.subscribe(val => {
      var name = this.route.snapshot.paramMap.get('name');
      this.dataService.getVillagers().subscribe(villagers => {
        this.villagers = villagers;
        this.villager = this.villagers.find((v) => v.name == name);
        if (this.villager == null) {
          this.error = true;
        }
        console.log(this.villager);
      });
    })
    
  }

  ngOnInit() {
    /* var name = this.route.snapshot.paramMap.get('name');
      this.dataService.getVillagers().subscribe(villagers => {
        this.villagers = villagers;
        this.villager = this.villagers.find((v) => v.name == name);
        console.log(this.villager);
      });*/
  }

}
